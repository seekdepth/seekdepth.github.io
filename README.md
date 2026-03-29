# Simple Lang

Simple Lang is a static language-learning site intended for GitHub Pages.

## Repository layout

- `docs/`: published web site for GitHub Pages
- `docs/audio/`: generated browser audio assets in Opus format
- `docs/lessons/catalog.json`: browser-facing lesson catalog
- `lessons/`: source lesson definitions
- `tools/tts/`: local TTS generation scripts

## Run locally

Serve the repository root with a local web server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/docs/](http://localhost:8000/docs/).

## Regenerate lesson audio

Generate one lesson:

```bash
python3 tools/tts/generate_tts.py --lesson lessons/days_of_week.json
```

Generate all current lessons:

```bash
python3 tools/tts/generate_tts.py --lesson lessons/days_of_week.json
python3 tools/tts/generate_tts.py --lesson lessons/numbers_1_to_10.json
python3 tools/tts/generate_tts.py --lesson lessons/colors.json
```

The TTS build writes browser assets into `docs/audio/` and syncs the published lesson catalog into `docs/lessons/catalog.json`.

## GitHub Pages

This repo is structured to publish the site from `docs/`.
