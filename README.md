# ✨ For My Amazing Sister ❤️ — Raksha Bandhan Cinematic Website

A premium, emotional, and interactive Raksha Bandhan digital memory book & gift built with **React, Vite, Tailwind CSS, Framer Motion, and Lucide Icons**.

---

## 🚀 Quick Start (Running Locally)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🎨 How to Customize in 1 Place (`src/data/content.js`)

All the website's text, sister name, quotes, photos, and music playlist are managed in **one central file**:
👉 `src/data/content.js`

### 1. Changing Your Sister's Name & Nicknames
Open `src/data/content.js` and edit:
```javascript
export const content = {
  sisterName: "Pooja", // Change to your sister's name
  sisterNickname: "Chhoti / Partner in Crime",
  brotherName: "Rahul",
  ...
};
```

### 2. Changing Photos
- Place your sister's photo in `public/images/sister.jpg`.
- Place your childhood & family memories in `public/images/memory1.jpg`, `memory2.jpg`, etc.
- In `src/data/content.js`, update the image paths:
```javascript
sisterIntro: {
  image: "/images/sister.jpg",
  ...
}
```

### 3. Changing the Spotify Playlist
1. Open Spotify and find your favorite playlist.
2. Click **Share** -> **Copy Link to Playlist** (e.g. `https://open.spotify.com/playlist/7DILEiQF93PlU7eKMI2FIt`).
3. In `src/data/content.js`, update:
```javascript
spotify: {
  playlistId: "7DILEiQF93PlU7eKMI2FIt", // Put your Spotify playlist ID here
}
```

### 4. Customizing Timeline Chapters & Heartfelt Confessions
In `src/data/content.js`, simply edit the `timeline` array or `unsaidWords` array with your real childhood memories and inside jokes!

---

## 🌐 How to Deploy for Free

### Option A: Vercel (Recommended — 1 Minute)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will give you a live shareable URL (e.g., `https://for-my-sister.vercel.app`)!

### Option B: Netlify (Drag & Drop)
1. Run `npm run build` locally to generate the `dist/` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder. It is live instantly!

---

## 💎 Features Included
- 🎬 **Cinematic Opening Sequence**: Multi-stage text reveals with glowing festive Rakhi.
- 👑 **3D Tilt Sister Photo Frame**: Premium royal photo card with custom affection badges.
- 📖 **Memory Timeline**: 5 chapters of childhood, growing up, crazy moments, and today.
- 💌 **Unsaid Words**: 3D tap-to-flip secret envelope cards.
- 😂 **Fun Sister Section**: Playful breakdown of quirks (Midnight Food Thief, Professional Irritator).
- 🎵 **Official Spotify Embed**: Working playlist with animated audio equalizer.
- 📸 **Photo Gallery & Lightbox**: Responsive masonry grid with fullscreen zoom & swipe.
- 🧵 **Interactive Rakhi Ceremony**: Sacred thread tying animation with multi-stage confetti explosion.
- 🎁 **3D Gift Box Finale**: Shaking gift box with lid opening, golden rays, and emotional letter.

*Built with code. Filled with memories. Made for my sister. ❤️*
