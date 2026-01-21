# Quick Start Guide - Mind-Reader with Emotion Detection

## 🚀 QUICK START

### 1. Upgrade Node.js (REQUIRED)
```bash
# Using nvm (recommended):
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

### 2. Configure Environment (First Time Only)
1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```
2. **Add your API Key:**
   Open `.env` and paste your OpenAI key after `VITE_OPENAI_API_KEY=`.

### 3. Run Application
```bash
cd "/home/nibin/Desktop/Projects/ihrd hackathon/image-rec"
npm install
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:5173**

---

## 🎮 HOW TO USE

1. **Home Page** → Click "Student" card
2. **Profile** → Enter name and age
3. **Dashboard** → Click "START SCREENING"
   - Allow webcam access when prompted ✅
4. **Play Games** → Complete cognitive assessment
   - Watch emotion indicator in top-right corner
5. **Results** → View AI risk assessment

---

## 🧠 KEY FEATURES

### Emotion Tracking
- **Real-time** emotion detection via webcam
- Tracks: happy, neutral, sad, fearful, surprised, angry, disgusted
- **Visible indicator** shows current emotion during games

### Smart Risk Detection
- **Easy questions failed** = Higher risk weight
- **Emotion changes** during transitions = Risk indicator
- **Combined scoring**: Performance + Emotion + Time

### Risk Assessment
- **Dyslexia**: Reading tasks (LexicalLegends game)
- **Dyscalculia**: Math tasks (NumberNinja game)
- **Overall Risk**: Low (0-29) | Medium (30-59) | High (60-100)

---

## 📊 RESULTS INTERPRETATION

### Low Risk (Green)
- Good performance on most tasks
- Stable emotions during gameplay
- Age-appropriate responses

### Medium Risk (Yellow)
- Some struggles with specific task types
- Emotion changes during difficult questions
- May need monitoring

### High Risk (Red)
- Significant difficulties on easy tasks
- Frequent negative emotions
- Confusion/frustration patterns
- **Recommend professional assessment**

---

## 🎯 ALGORITHM HIGHLIGHTS

**Risk Points Calculation:**
- Wrong answer + Negative emotion + EASY question = **+25 points**
- Wrong answer + Negative emotion + MEDIUM question = **+20 points**
- Wrong answer + Negative emotion + HARD question = **+15 points**
- Emotion change during transition + Wrong answer = **+8 points**
- Multiple rapid emotion changes (< 3s) = **+10 points**

**Why Easy Questions Matter More:**
Struggling with basic tasks is a stronger indicator of learning difficulties than struggling with advanced concepts.

---

## 🔧 TROUBLESHOOTING

**Node version error:**
```bash
node --version  # Should be 20.x or higher
```

**Webcam not working:**
- Check browser permissions (Chrome → Settings → Privacy → Camera)
- Close other apps using camera
- Try Firefox if Chrome doesn't work

**Emotion not showing:**
- Refresh page and allow camera again
- Check browser console for errors (F12)

---

## 📁 PROJECT STRUCTURE

```
image-rec/
├── src/
│   ├── services/
│   │   └── emotionDetector.js    ← Emotion detection logic
│   ├── context/
│   │   └── GameContext.jsx       ← Risk scoring & state
│   ├── games/
│   │   ├── NumberNinja.jsx       ← Math game (dyscalculia)
│   │   └── LexicalLegends.jsx    ← Reading game (dyslexia)
│   └── pages/
│       ├── Home.jsx              ← Entry point (Student/Parent/Teacher)
│       ├── Dashboard.jsx         ← Starts emotion detection
│       ├── GameLayout.jsx        ← Shows emotion indicator
│       └── Results.jsx           ← AI risk assessment
├── public/                       ← Old emotion detection code
├── train/                        ← Training data for model
└── test/                         ← Test data for model

```

---

## ✅ COMPLETE CHECKLIST

- [x] Mind-Reader as main entry page
- [x] Student selection redirects to games
- [x] Emotion detection integrated
- [x] Emotion tracked during gameplay
- [x] Emotion changes during transitions detected
- [x] Easy questions weighted more heavily
- [x] Risk scores calculated (dyslexia, dyscalculia)
- [x] Results page shows emotion analysis
- [x] Visual emotion indicator in games

---

## 🎓 FOR TEACHERS/PARENTS

The system provides:
- **Non-invasive screening** through game-based assessment
- **Objective metrics** combining performance + emotion
- **Early detection** of potential learning difficulties
- **Detailed reports** for professional consultation
- **Privacy-first** - all processing happens in browser

**Important:** This is a screening tool, not a diagnosis. Always consult qualified professionals for formal assessment.

---

## 🔮 FUTURE ENHANCEMENTS

Planned improvements:
1. Load trained emotion detection model (from train/ data)
2. Teacher/Parent dashboards for monitoring multiple students
3. Historical tracking and progress reports
4. Export PDF reports for sharing with specialists
5. Additional games for ADHD and other conditions

---

**Ready to go! Just upgrade Node.js and run `npm run dev`** 🚀
