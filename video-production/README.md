# GNDU Placement & Career Portal — launch showcase

Deliverable: `../outputs/GNDU-Placement-Portal-Showcase.mp4`

90 seconds, 1920 × 1080, 30 fps, H.264 video with stereo AAC instrumental audio.

The edit uses actual browser captures from the local GNDU portal. Website captures were made at the browser's native viewport and composed into the final 1080p export. It uses restrained camera moves, horizontal graphic reveals, an opportunity-card interaction sequence, and a held closing identity. The Python source and capture files are retained for revisions.

## Editorial choices

- The current website's technology cards replace the brief's project showcase, because individual project records are not present.
- Current opportunity status is preserved: CodeInsight has no supplied application link; Resec and Emicon registration deadlines have passed. No active application or submission is fabricated.
- Existing campus event cards are shown. No invented event footage is used.
- Current Vice-Chancellor and Placement Director pages replace the removed superintendent content.
- Final URL is explicitly labelled as a local portal preview. A published portal URL has not been supplied.
- Statistics and company/credential names are the values supplied by the user and displayed by the website, not independently audited for this video.

## Audio and assets

`original-score.wav` is an original, locally synthesized instrumental arrangement: D minor / B-flat / F / C, 96 BPM, layered pads, arpeggios, bass and restrained percussion. No sampled commercial song or voice is used.

GNDU crest, campus front photograph and leadership portraits were supplied by the user. Archival campus imagery visible in the website retains its on-page attribution; see the portal's `/credits` page for the Gopal Aggarwal / Wikimedia Commons source links and licences. Company marks are existing site assets and remain the property of their respective owners.

## Re-render

Use the bundled Python runtime with Pillow and NumPy. `imageio-ffmpeg` is installed in `python-packages` within this folder. Run `render_showcase.py --review` for a storyboard, or `render_showcase.py` to export the MP4 and poster. `timeline.json` records the shot timing.
