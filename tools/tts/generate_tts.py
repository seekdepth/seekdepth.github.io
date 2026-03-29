#!/usr/bin/env python3

import argparse
import json
import shutil
import subprocess
import tempfile
from pathlib import Path


def run_command(args: list[str]) -> None:
    subprocess.run(args, check=True)


def synthesize_opus(text: str, voice: str, rate: int, output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as temp_dir:
        aiff_path = Path(temp_dir) / "tts.aiff"
        run_command(["say", "-v", voice, "-r", str(rate), "-o", str(aiff_path), text])
        run_command(
            [
                "ffmpeg",
                "-y",
                "-loglevel",
                "error",
                "-i",
                str(aiff_path),
                "-ac",
                "1",
                "-ar",
                "24000",
                "-c:a",
                "libopus",
                "-b:a",
                "32k",
                "-vbr",
                "on",
                "-application",
                "voip",
                str(output_path),
            ]
        )


def load_lesson(path: Path) -> dict:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def relpath(target: Path, base: Path) -> str:
    return target.relative_to(base).as_posix()


def build_clip_name(index: int, language_code: str) -> str:
    safe_language = language_code.replace("-", "_")
    return f"{index:03d}_{safe_language}.opus"


def normalize_language_code(code: str) -> str:
    if code == "en":
        return "en-US"
    if code.startswith("en-GB") or code.startswith("en_GB"):
        return "en-GB"
    if code.startswith("en"):
        return "en-US"
    if code.startswith("pt"):
        return "pt-BR"
    if code.startswith("es"):
        return "es-ES"
    if code.startswith("fr"):
        return "fr-FR"
    return code


def get_lesson_languages(lesson: dict) -> list[str]:
    raw_languages = lesson.get("languages") or [lesson.get("source_language", "en"), lesson.get("target_language", "pt-BR")]
    return [normalize_language_code(language) for language in raw_languages]


def get_item_terms(item: dict) -> dict:
    if "terms" in item:
        return item["terms"]
    return {
        "en": item["english"],
        "pt-BR": item["portuguese"],
    }


def get_item_sentences(item: dict) -> dict:
    if "sample_sentences" in item:
        return item["sample_sentences"]
    return {
        "en": item["sample_sentence"]["english"],
        "pt-BR": item["sample_sentence"]["portuguese"],
    }


def resolve_localized_value(values: dict, language: str) -> str:
    if language in values:
        return values[language]
    base_language = language.split("-")[0]
    if base_language in values:
        return values[base_language]
    raise KeyError(f"Missing localized value for {language}")


def build_manifest(
    lesson: dict,
    lesson_path: Path,
    voice_map: dict[str, str],
    rate_map: dict[str, int],
    output_dir: Path,
) -> dict:
    lesson_id = lesson.get("lesson_id", lesson_path.stem)
    titles = lesson.get("titles", {"en": lesson.get("title", lesson_id), "pt": lesson.get("title", lesson_id)})
    languages = get_lesson_languages(lesson)
    intro_sentences = lesson.get("intro_sentences") or {
        "en": f"Let's study {titles['en'].lower()}.",
        "pt-BR": f"Vamos estudar {titles['pt'].lower()}.",
    }
    intro_word_audio = {}
    intro_sentence_audio = {}

    for language in languages:
        word_audio = output_dir / "words" / build_clip_name(0, language)
        sentence_audio = output_dir / "sentences" / build_clip_name(0, language)
        title_text = resolve_localized_value(titles, language)
        intro_text = resolve_localized_value(intro_sentences, language)
        synthesize_opus(title_text, voice_map[language], rate_map[language], word_audio)
        synthesize_opus(intro_text, voice_map[language], rate_map[language], sentence_audio)
        intro_word_audio[language] = relpath(word_audio, output_dir)
        intro_sentence_audio[language] = relpath(sentence_audio, output_dir)
        intro_sentences[language] = intro_text

    manifest = {
        "lesson_id": lesson_id,
        "title": lesson.get("title", lesson_id),
        "titles": titles,
        "audience": lesson.get("audience"),
        "source_lesson": str(lesson_path),
        "languages": languages,
        "voices": {language: voice_map[language] for language in languages},
        "rates": {language: rate_map[language] for language in languages},
        "intro": {
            "titles": titles,
            "sample_sentences": intro_sentences,
            "word_audio": intro_word_audio,
            "sentence_audio": intro_sentence_audio,
        },
        "generated_files": [],
    }

    for index, item in enumerate(lesson.get("items", []), start=1):
        terms = get_item_terms(item)
        sample_sentences = get_item_sentences(item)
        word_audio = {}
        sentence_audio = {}

        for language in languages:
            word_path = output_dir / "words" / build_clip_name(index, language)
            sentence_path = output_dir / "sentences" / build_clip_name(index, language)
            term_text = resolve_localized_value(terms, language)
            sentence_text = resolve_localized_value(sample_sentences, language)
            synthesize_opus(term_text, voice_map[language], rate_map[language], word_path)
            synthesize_opus(sentence_text, voice_map[language], rate_map[language], sentence_path)
            word_audio[language] = relpath(word_path, output_dir)
            sentence_audio[language] = relpath(sentence_path, output_dir)
            terms[language] = term_text
            sample_sentences[language] = sentence_text

        manifest["generated_files"].append(
            {
                "terms": terms,
                "word_audio": word_audio,
                "sentence_audio": sentence_audio,
                "sample_sentences": sample_sentences,
            }
        )

    return manifest


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate word and sentence Opus files from a lesson JSON file."
    )
    parser.add_argument(
        "--lesson",
        required=True,
        help="Path to the lesson JSON file.",
    )
    parser.add_argument(
        "--output-dir",
        help="Directory for generated audio. Defaults to audio/<lesson_id>.",
    )
    parser.add_argument(
        "--voice",
        dest="portuguese_voice",
        default="Luciana",
        help="Brazilian Portuguese macOS say voice. Example: Luciana, Flo, Eddy.",
    )
    parser.add_argument(
        "--english-us-voice",
        default="Samantha",
        help="English (US) macOS say voice. Example: Samantha, Allison.",
    )
    parser.add_argument(
        "--rate",
        dest="portuguese_rate",
        type=int,
        default=165,
        help="Portuguese words per minute for macOS say.",
    )
    parser.add_argument(
        "--english-us-rate",
        type=int,
        default=170,
        help="English (US) words per minute for macOS say.",
    )
    parser.add_argument(
        "--english-uk-voice",
        default="Daniel",
        help="English (UK) macOS say voice. Example: Daniel, Eddy (English (UK)).",
    )
    parser.add_argument(
        "--english-uk-rate",
        type=int,
        default=170,
        help="English (UK) words per minute for macOS say.",
    )
    parser.add_argument(
        "--spanish-voice",
        default="Mónica",
        help="Spanish (Spain) macOS say voice. Example: Mónica, Flo (Spanish (Spain)), Eddy (Spanish (Spain)).",
    )
    parser.add_argument(
        "--spanish-rate",
        type=int,
        default=165,
        help="Spanish (Spain) words per minute for macOS say.",
    )
    parser.add_argument(
        "--french-voice",
        default="Thomas",
        help="French (France) macOS say voice. Example: Thomas, Jacques, Flo (French (France)).",
    )
    parser.add_argument(
        "--french-rate",
        type=int,
        default=165,
        help="French (France) words per minute for macOS say.",
    )
    args = parser.parse_args()

    if shutil.which("say") is None:
        raise SystemExit("Missing required command: say")

    if shutil.which("ffmpeg") is None:
        raise SystemExit("Missing required command: ffmpeg")

    lesson_path = Path(args.lesson).resolve()
    lesson = load_lesson(lesson_path)
    lesson_id = lesson.get("lesson_id", lesson_path.stem)

    if args.output_dir:
        output_dir = Path(args.output_dir).resolve()
    else:
        output_dir = (lesson_path.parent.parent / "docs" / "audio" / lesson_id).resolve()

    if output_dir.exists():
        shutil.rmtree(output_dir)

    voice_map = {
        "en-US": args.english_us_voice,
        "en-GB": args.english_uk_voice,
        "pt-BR": args.portuguese_voice,
        "es-ES": args.spanish_voice,
        "fr-FR": args.french_voice,
    }
    rate_map = {
        "en-US": args.english_us_rate,
        "en-GB": args.english_uk_rate,
        "pt-BR": args.portuguese_rate,
        "es-ES": args.spanish_rate,
        "fr-FR": args.french_rate,
    }

    manifest = build_manifest(
        lesson,
        lesson_path,
        voice_map,
        rate_map,
        output_dir,
    )
    manifest_path = output_dir / "manifest.json"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)

    with manifest_path.open("w", encoding="utf-8") as handle:
        json.dump(manifest, handle, ensure_ascii=False, indent=2)
        handle.write("\n")

    source_catalog_path = lesson_path.parent / "catalog.json"
    docs_catalog_path = lesson_path.parent.parent / "docs" / "lessons" / "catalog.json"
    if source_catalog_path.exists():
        docs_catalog_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_catalog_path, docs_catalog_path)

    print(f"Generated lesson audio in {output_dir}")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
