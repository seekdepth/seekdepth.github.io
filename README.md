# Seekdepth.net Language Lessons

Seekdepth.net Language Lessons is a static language-learning SPA published from this repository. The live site is deployed at [https://seekdepth.net/](https://seekdepth.net/).

The app is browser-only and stores profile, lesson progress, and quiz history in `localStorage`. Lesson content and audio are generated from source JSON files and published into `docs/` for static hosting.

## Repository layout

- `docs/`: published site assets
- `docs/index.html`: app shell markup
- `docs/styles.css`: app styles
- `docs/app.js`: lesson, quiz, profile, and UI logic
- `docs/audio/`: generated audio lesson packs and manifests
- `docs/lessons/catalog.json`: browser-facing published lesson catalog
- `lessons/`: source lesson definitions and source catalog
- `lessons/catalog.json`: source catalog for all lessons
- `tools/tts/`: local text-to-speech generation tooling

## Current lesson set

The repository currently includes:

- `Vocabulary - Basic`
- `Verbs - Simple Present`
- `Verbs - Simple Past`
- `Verbs - Simple Future`

At the time of this README update, the lesson catalog contains 64 lessons across those categories.

## Run locally

Serve the repository root with a local web server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/docs/](http://localhost:8000/docs/).

## Generate lesson audio

Generate one lesson:

```bash
python3 tools/tts/generate_tts.py --lesson lessons/days_of_week.json
```

Generate a verb lesson:

```bash
python3 tools/tts/generate_tts.py --lesson lessons/to_go.json
python3 tools/tts/generate_tts.py --lesson lessons/to_go_simple_past.json
python3 tools/tts/generate_tts.py --lesson lessons/to_go_simple_future.json
```

Generate all lessons by running the generator for each source file in `lessons/`.

The generation step:

- writes browser audio assets into `docs/audio/`
- creates or updates each lesson `manifest.json`
- syncs the published lesson catalog to `docs/lessons/catalog.json`

## Content model

Each lesson source file in `lessons/` defines:

- `lesson_id`
- localized `titles`
- `category`
- `tense` for verb lessons
- supported `languages`
- localized `intro_sentences`
- lesson `items` with terms and sample sentences

Published lesson packs in `docs/audio/<lesson_id>/manifest.json` are what the SPA loads at runtime.

## Hosting

This repository is structured to publish as a static site from `docs/`. It can be hosted on GitHub Pages or any other static host serving the same directory contents.
