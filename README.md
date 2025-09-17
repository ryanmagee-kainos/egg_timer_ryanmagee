## Egg Timer

Egg Timer is a simple, responsive web app for timing boiled eggs. Choose your preferred doneness (soft, medium, or hard), or set a custom time. The app features a circular timer visualization, ticking and alarm sounds, and a clean, modern UI.

### Features
- Select egg doneness: Soft (4:00), Medium (7:00), or Hard (10:00)
- Custom minute and second input
- Circular timer visualization (toggle on/off)
- Ticking sound during countdown
- Alarm sound and message when time is up
- Responsive design using Tailwind CSS

### Usage
1. Open `index.html` in your browser.
2. Choose a doneness preset or enter a custom time.
3. (Optional) Toggle the circular timer visualization.
4. Click **Start** to begin the countdown.
5. Use **Pause** or **Reset** as needed.
6. When the timer ends, a "ding" will sound and a message will appear.

### File Structure
- `index.html` – Main web page
- `egg-timer.js` – Timer logic and UI interaction
- `audio/` – Contains `tick-tock.mp3` and `ding.mp3` for sounds
- `README.md` – Project overview

### Customization
You can change the default times for each doneness in `egg-timer.js` by editing the `donenessTimes` object.

### Credits
UI built with [Tailwind CSS](https://tailwindcss.com/).
Sounds: [tick-tock.mp3](audio/tick-tock.mp3), [ding.mp3](audio/ding.mp3)

