# MindReader - Cognitive Assessment Platform

A web-based cognitive assessment platform featuring interactive games and real-time emotion detection to evaluate mental health and cognitive abilities.

Built for the **IHRD Hackathon** with React, Vite, Tailwind CSS, Recharts, and OpenAI API.

---

## 📸 Visual Showcase

| Landing Page (Student / Parent / Teacher) | Mission Control Dashboard |
| :---: | :---: |
| ![Home Page](docs/screenshots/01-mindreader-homepage.png) | ![Mission Control](docs/screenshots/03-mission-control-dashboard.png) |

| 4-Core Assessment Protocol | Comprehensive Cognitive Report & Charts |
| :---: | :---: |
| ![4 Core Games](docs/screenshots/05-game-selection-core-4.png) | ![Assessment Report](docs/screenshots/09-results-cognitive-report-charts.png) |

---

## 🚀 Quick Start

See [QUICK_START.md](./docs/QUICK_START.md) for installation and setup instructions.

```bash
# Install dependencies
npm install

# Run unit test suite (16 tests)
npm test

# Run linter
npm run lint

# Start local development server
npm run dev
```

---

## 📁 Project Structure

```
mindreader/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main application pages
│   ├── games/          # Interactive cognitive games
│   ├── services/       # AI and emotion detection services
│   ├── context/        # React context providers
│   └── utils/          # Helper functions
├── public/             # Static files and standalone HTML games
└── screenshots/        # Application screenshots
```

---

## 📱 Application Flow

### 1. Home Page
The landing page with an overview of the platform and getting started options.

![Home Page](./screenshots/homepage.png)

---

### 2. Profile Setup
Create your profile by entering basic information before starting the assessment.

![Profile Setup](./screenshots/profile.png)

---

### 3. Questionnaire
Answer preliminary questions to help tailor the cognitive assessment.

![Questionnaire](./screenshots/quiz-question.png)

---

### 4. Game Selection
Choose from various cognitive games designed to assess different mental abilities.

![Game Selection](./screenshots/game-section.png)

---

### 5. Interactive Games

#### Focus Flight
Test your focus and reaction time with this attention-based game.

![Focus Flight](./screenshots/fous-flight.png)

---

#### Memory Quest
Assess your spatial memory and visualization capabilities.

![Memory Quest](./screenshots/memory-quest.png)

---

#### Void Challenge
Test your problem-solving abilities in challenging scenarios.

![Void Challenge](./screenshots/void-challenge.png)

---

### 6. Results & Dashboard
View comprehensive results, scores, and cognitive assessment reports.

![Results Dashboard](./screenshots/results.png)

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **AI/ML**: OpenAI API, Custom Emotion Detection
- **Charts**: Recharts

---

## 🎮 Available Games

1. **Focus Flight** - Attention and focus assessment
2. **Memory Quest** - Spatial memory and recall
3. **Void Challenge** - Problem-solving and logic
4. **Matrix Reasoning** - Pattern recognition
5. **Number Ninja** - Numerical reasoning
6. **Lexical Legends** - Language skills

---

## 📚 Documentation

- [Quick Start Guide](./docs/QUICK_START.md) - Installation and setup
- [Architecture](./docs/ARCHITECTURE.md) - Technical architecture
- [Privacy Policy](./docs/README_PRIVACY.md) - Data handling and privacy
- [Games Integration](./docs/GAMES_INTEGRATION.md) - Game development guide

---

**IHRD Hackathon Project**
