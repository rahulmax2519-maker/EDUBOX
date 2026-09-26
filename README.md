# EDU-BOX: Offline-First Learning Platform

> **"Quality Education. Anywhere. Offline."**

EDU-BOX is a modern, responsive, offline-first educational web platform designed for communities with limited or no internet connectivity, scarce devices, and remote classrooms.

---

## 🌟 Core Concepts

- **Single Hub Architecture**: A single laptop, tablet, Raspberry Pi, or local server functions as the **EDU-BOX Hub**.
- **Local Wi-Fi Mesh**: Broadcasts a local Wi-Fi hotspot (`EDU-BOX-LEARNING-HUB`). Up to 35+ students can connect simultaneously.
- **Zero Internet Requirement**: All lessons, interactive visual fraction slicers, quizzes, voice narration, and the "Ask EDU 🤖" AI assistant run completely offline using local client-side IndexedDB/LocalStorage.
- **Progressive Web App (PWA)**: Uses Service Workers (`sw.js`) and Cache API for offline persistence.
- **Multilingual Support**: Real native translations across 5 languages:
  - 🇬🇧 English
  - 🇮🇳 தமிழ் (Tamil)
  - 🇮🇳 हिन्दी (Hindi)
  - 🇮🇳 తెలుగు (Telugu)
  - 🇮🇳 ಕನ್ನಡ (Kannada)

---

## 🚀 Quick Start & Running Locally

### Option 1: Using the Zero-Dependency Server (Recommended)
Open PowerShell in the `edu-box` directory and run:
```powershell
powershell.exe -ExecutionPolicy Bypass -File .\server.ps1
```
The server will start on **`http://localhost:5600/`** and automatically open the application in your default browser.

### Option 2: Direct Browser Launch
Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🌐 Local Network (LAN) Access

Other devices (phones, tablets, student laptops) connected to the same Wi-Fi network can access EDU-BOX at:
```
http://<YOUR_LOCAL_IP>:5600/
```
*(e.g., `http://10.9.115.69:5600/`)*

---

## 🎯 Hackathon Demo Tour Guide (Judges Flow)

The top navigation bar includes a **"🎯 DEMO STEPS"** guide for evaluation:

1. **Step 1: Landing Page**  
   Explore the hero section, Why EDU-BOX, How It Works, and the animated SVG Wi-Fi Mesh diagram.
2. **Step 2: Try Demo**  
   Click "🚀 Try Instant Demo" to automatically enter as sample student **Arun Kumar (Grade 8)**.
3. **Step 3: Language Selection**  
   Switch dynamically between English, Tamil, Hindi, Telugu, or Kannada.
4. **Step 4: Student Dashboard**  
   View "My Courses", "Lessons Completed", "Quiz Score", and progress bars for Math, Science, CS, and English.
5. **Step 5: Lesson Page (Fractions)**  
   - Interactive Pizza visualizer: click slices to see `1/2 = 2/4 = 4/8` in real-time.
   - Click **"Listen Audio 🔊"** for offline speech narration via Web Speech API.
   - Click **"Download for Offline 💾"** to cache the lesson.
6. **Step 6: Offline Quiz**  
   Answer *"What is 1/2 + 1/2?"*, submit for instant scoring and explanation, saved directly to local storage.
7. **Step 7: Ask EDU 🤖**  
   Chat with the offline assistant. Click suggestion chips like *"Why is 1/2 + 1/2 = 1?"* or *"How do plants make food?"*.
8. **Step 8: Student Progress**  
   Inspect the 5-day learning streak, quiz history log, and weak area breakdown.
9. **Step 9: Teacher Dashboard**  
   Switch to the Teacher console. View the live roster (Arun, Priya, Kumar, Deepa), open **"Identify Weak Areas"**, or click **"Assign Lesson"**.
10. **Step 10: Offline Hub & Sync**  
    Test the **"Simulate Internet Disconnected"** toggle, view telemetry (battery, devices, storage), and trigger **"Sync Progress to Cloud Hub"**.

---

## 📁 Project Structure

```
edu-box/
├── index.html            # Main SPA entry point & PWA shell
├── manifest.json         # PWA Web App Manifest
├── sw.js                 # Service worker with offline caching strategy
├── server.ps1            # Zero-dependency PowerShell HTTP server
├── README.md             # Project documentation
├── assets/
│   ├── icon-192.svg      # PWA 192px app icon
│   └── icon-512.svg      # PWA 512px app icon
├── css/
│   └── app.css           # Blue, white, and soft green design system
└── js/
    ├── app.js            # React 18 application with all 14 pages/views
    ├── db.js             # LocalStorage & IndexedDB offline persistence layer
    ├── quizData.js       # 60 Grade-8 questions across 4 subjects in 5 languages
    ├── videoPlayer.js    # Offline Educational Video Engine with 5 videos
    ├── translations.js   # Multilingual dictionary (EN, TA, HI, TE, KN)
    └── vendor/
        ├── react.min.js      # Local offline React 18
        ├── react-dom.min.js  # Local offline ReactDOM 18
        └── babel.min.js      # Local offline Babel JSX compiler
```

---

## 🛠️ Technology Stack

- **Frontend**: React 18 + Custom Responsive Educational Design System (Tailwind-compatible utility classes, pure modern CSS).
- **Offline Engine**: Progressive Web App (PWA) Service Worker + IndexedDB + LocalStorage.
- **Audio Synthesis**: Native HTML5 Web Speech API (`speechSynthesis`).
- **Server**: Zero-dependency PowerShell `.NET HttpListener` microserver on port 5600.
