# Two Years, Still You — Flask anniversary website

A romantic, editorial-style anniversary website built with Flask. Your 16 uploaded photos are included locally in `static/photos/`.

## Run locally

1. Install Python 3.10 or newer.
2. Open a terminal in this project folder.
3. Create and activate a virtual environment (recommended):

   **Windows**
   ```powershell
   py -m venv .venv
   .venv\Scripts\activate
   ```

   **macOS / Linux**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Start the website:
   ```bash
   python app.py
   ```
6. Open http://127.0.0.1:5000 in your browser.

## Personalize before gifting

Open `templates/index.html` and edit the written message so it sounds unmistakably like you.
The current copy is intentionally warm but does not invent private memories or promises.
You can add:
- Both of your names or the nickname you use for her.
- The exact anniversary date.
- A short paragraph about a real moment only the two of you remember.
- A specific quality or small habit of hers that you love.

Replace or reorder the images in `static/photos/` if you want a different gallery order. The homepage hero uses `memory-01.jpg`.

## Project structure

```text
two_years_for_us/
├── app.py
├── requirements.txt
├── README.md
├── templates/
│   └── index.html
└── static/
    ├── css/style.css
    ├── js/main.js
    └── photos/
```

## Notes

- Flask serves the pages and the included photos locally.
- Google Fonts are loaded from the internet; if unavailable, the page falls back to system serif/sans fonts.
- This is a local-ready project. For public hosting, use a production WSGI server such as Gunicorn and configure your hosting provider's start command.


## Background music

The site includes a music control and starts playback only after the visitor presses **Open your little surprise**. This is intentional: modern browsers block sound autoplay before a user gesture.

To add your chosen song:
1. Put an MP3 file in `static/audio/`.
2. Name it `anniversary-song.mp3`.
3. Refresh the site.

Your selected soundtrack is **“Kiss of Life” by Sade**. The ZIP does not include the commercial recording. If you have a legally obtained MP3 that you are allowed to use, place it in `static/audio/` and name it `anniversary-song.mp3`. The player is already configured for that filename. Until the file is added, the music control will indicate that a song needs to be added.
