# TTS Workflow

This workflow uses macOS `say` to synthesize speech and `ffmpeg` to convert each clip into an Opus file for web delivery.

## Generate audio for the days-of-week lesson

```bash
python3 tools/tts/generate_tts.py --lesson lessons/days_of_week.json
```

## Output layout

- `docs/audio/<lesson_id>/words/000_en_US.opus`: intro card English (US) title audio
- `docs/audio/<lesson_id>/words/000_en_GB.opus`: intro card English (UK) title audio
- `docs/audio/<lesson_id>/words/001_pt_BR.opus`: first item Portuguese word audio
- `docs/audio/<lesson_id>/sentences/001_fr_FR.opus`: first item French sentence audio
- `docs/audio/<lesson_id>/manifest.json`: browser-facing manifest
- `docs/lessons/catalog.json`: browser-facing lesson catalog synced from source

## Useful options

```bash
python3 tools/tts/generate_tts.py \
  --lesson lessons/days_of_week.json \
  --english-us-voice Samantha \
  --english-uk-voice Daniel \
  --voice Luciana \
  --english-us-rate 165 \
  --english-uk-rate 165 \
  --rate 150
```

## Notes

- Run commands from the repository root.
- Source lessons live in `lessons/`.
- Published web assets live in `docs/`.
- The current default voice map is:
  - `en-US`: `Samantha`
  - `en-GB`: `Daniel`
  - `pt-BR`: `Luciana`
  - `es-ES`: `Mónica`
  - `fr-FR`: `Thomas`
