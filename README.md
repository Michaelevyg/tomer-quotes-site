# אתר הציטוטים של תומר (Tomer's Quotes Website)

A simple, responsive website that randomly plays Hebrew audio quotes when the user clicks a button.

## Features

- Clean, modern design with Hebrew text support
- Responsive layout that works on desktop and mobile devices
- Random selection from 48 MP3 audio files
- Built-in audio player with controls
- Error handling for missing audio files

## Setup Instructions

1. **Add your MP3 files**: Place your audio files in the `public` folder with the following naming convention:
   - `01.mp3`
   - `02.mp3`
   - `03.mp3`
   - ...
   - `48.mp3`

2. **Open the website**: Simply open `index.html` in your web browser

3. **Usage**: Click the "תן לי ציטוט" (Give me a quote) button to randomly play one of the audio files

## File Structure

```
tomer-quotes-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── public/             # Folder for MP3 files
│   ├── 01.mp3
│   ├── 02.mp3
│   ├── ...
│   └── 48.mp3
└── README.md           # This file
```

## Technical Details

- **HTML5**: Uses semantic HTML with proper Hebrew language support (`lang="he" dir="rtl"`)
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: Vanilla JS for audio playback and random selection
- **Audio Format**: MP3 files supported by all modern browsers

## Browser Compatibility

Works on all modern browsers that support:
- HTML5 audio element
- CSS3 features (gradients, transforms, etc.)
- ES6 JavaScript features

## Customization

You can easily modify:
- The number of audio files by changing the `totalFiles` variable in `script.js`
- The styling by editing `styles.css`
- The Hebrew text by modifying the content in `index.html` 