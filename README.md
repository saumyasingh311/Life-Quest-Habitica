# 🌟 Habit Tracker Web App

A beautiful, modern web application to track your daily habits with gamification elements, built with React and Vite. All data is stored locally in your browser using localStorage, ensuring privacy and offline functionality.

🌐 **[Live Demo](https://theunknown550.github.io/Habit-Tracker-Web-App/)** - Try it now!

![Habit Tracker Demo](./demo.gif) <!-- Placeholder for demo GIF -->

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📚 Documentation](#-documentation)
- [🌐 Deployment](#-deployment)
- [🎮 Usage](#-usage)
- [📈 Gamification Features](#-gamification-features)
- [🏗️ Project Structure](#️-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)

## ✨ Features

- **🎨 Beautiful UI**: Modern design with gradients, animations, and smooth transitions
- **🎯 Add, Edit, and Delete Habits**: Easily manage your habit list with an intuitive interface
- **✅ Daily Checklist**: Interactive habit completion with celebratory animations
- **🔥 Streak Tracking**: View your current streak for each habit with achievement badges
- **📊 Progress Visualization**: Animated progress bar with color-coded completion levels
- **📅 Calendar View**: Monthly calendar showing habit completion history with visual indicators
- **📈 Statistics Dashboard**: Comprehensive analytics including completion rates, top habits, and progress charts
- **💾 Data Management**: Export/import habit data and clear all data with backup functionality
- **🎉 Motivational Messages**: Dynamic encouragement based on your progress percentage
- **🎭 Random Icons**: Each habit gets a fun emoji icon for better visual organization
- **💾 Local Storage**: All data persists between sessions without needing a backend
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Smooth Animations**: Fade-in effects, hover animations, and completion celebrations

## Tech Stack

- **Frontend**: React 19.1.1 with Vite for fast development and building
- **Styling**: TailwindCSS 4.1.14 for modern, utility-first CSS with custom animations
- **Data Storage**: Browser localStorage (no backend required)
- **Language**: JavaScript (ES6+)
- **Icons**: Unicode emojis for cross-platform compatibility

## 🚀 Quick Start

Get started with the Habit Tracker in just a few minutes!

```bash
git clone https://github.com/TheUnknown550/Habit-Tracker-Web-App.git
cd Habit-Tracker-Web-App
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

📖 **Detailed Installation Guide**: See [INSTALLATION.md](INSTALLATION.md) for comprehensive setup instructions, troubleshooting, and alternative installation methods.

## 📚 Documentation

- **[INSTALLATION.md](INSTALLATION.md)** - Complete installation and setup guide
- **[README.md](README.md)** - Project overview, features, and usage (this file)

## 🌐 Deployment

This app is automatically deployed to GitHub Pages using GitHub Actions.

**Live Demo**: [https://theunknown550.github.io/Habit-Tracker-Web-App/](https://theunknown550.github.io/Habit-Tracker-Web-App/)

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment:
1. GitHub Actions builds the app using `npm run build`
2. The built files are deployed to GitHub Pages
3. Your site is live within 2-3 minutes!

### Manual Deployment

You can also trigger a deployment manually:
1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### Setup GitHub Pages (First Time)

If you fork this repository, enable GitHub Pages:
1. Go to your repository **Settings**
2. Navigate to **Pages** (under "Code and automation")
3. Under **Source**, select **GitHub Actions**
4. The next push to `main` will deploy automatically!

See [INSTALLATION.md](INSTALLATION.md#deploying-to-github-pages) for more deployment options.

## 🎮 Usage

The app features four main sections accessible via the navigation tabs at the top:

### 🎯 Habits Tab
1. **Adding a Habit**: Use the beautiful "Add New Habit" form to create a new habit. Each habit automatically gets a fun emoji icon!

2. **Tracking Progress**: Click the circular icon next to each habit to mark it as completed. Watch the celebratory animation and see your progress bar update in real-time!

3. **Viewing Streaks**: See your current streak displayed below each habit name. Earn achievement badges for 7+ day and 30+ day streaks! 🔥⭐👑

4. **Editing Habits**: Click the "✏️ Edit" button next to a habit to modify its name or description.

5. **Deleting Habits**: Click the "🗑️ Delete" button to remove a habit from your list.

### 📅 Calendar Tab
- View your habit completion history in a monthly calendar format
- Green dots: All habits completed that day
- Yellow dots: Some habits completed that day
- Gray dots: No habits completed that day
- Navigate between months and jump back to today

### 📊 Statistics Tab
- **Key Metrics**: Total habits, active habits, longest streak, monthly completion rate
- **Top Performing Habits**: See which habits you complete most consistently
- **Progress Charts**: Visual representation of your last 14 days of habit completion

### 💾 Data Tab
- **Export Data**: Download your habits and progress as a JSON backup file
- **Import Data**: Upload a previously exported backup to restore your data
- **Clear All Data**: Permanently remove all habits and completion history

## 📈 Gamification Features

- **🎯 Achievement Badges**: Special indicators for impressive streaks
- **🎨 Dynamic Progress Colors**: Progress bar changes color based on completion percentage
- **✨ Celebration Animations**: Satisfying animations when completing habits
- **💬 Motivational Messages**: Context-aware encouragement throughout your journey
- **🎭 Visual Icons**: Each habit gets a unique emoji for better visual organization

## Project Structure

```
src/
├── components/
│   ├── AddHabitForm.jsx       # Form for adding new habits
│   ├── CalendarView.jsx       # Monthly calendar with completion history
│   ├── DataExport.jsx         # Data management (export/import/clear)
│   ├── HabitItem.jsx          # Individual habit component
│   ├── HabitList.jsx          # List of all habits
│   ├── ProgressBar.jsx        # Daily progress visualization
│   └── StatisticsDashboard.jsx # Analytics and statistics
├── hooks/
│   └── useLocalStorage.js     # Custom hook for localStorage persistence
├── App.jsx                    # Main application with tab navigation
├── index.css                  # Global styles with Tailwind imports
└── main.jsx                   # Application entry point
public/                        # Static assets (currently empty)
```

## Contributing

Contributions are welcome! This project is open-source and beginner-friendly. Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test them
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Open a Pull Request

### Ideas for Contributions

- **🌙 Dark Mode**: Toggle between light and dark themes for better user experience
- **� PWA Features**: Progressive Web App capabilities for mobile installation
- **🔔 Browser Notifications**: Optional reminders for habit completion times
- **📊 Advanced Analytics**: Trend analysis, habit correlations, and predictive insights
- **� Habit Categories**: Group habits by categories (Health, Productivity, Learning, etc.)
- **📤 Data Export Options**: Export to CSV, PDF reports, or shareable formats
- **🔄 Habit Templates**: Pre-built habit collections for common goals
- **👥 Social Features**: Share achievements and compete with friends
- **🎵 Sound Effects**: Customizable audio feedback for habit completions
- **� Weekly/Monthly Goals**: Set and track completion targets
- **🔥 Streak Challenges**: Community challenges and streak competitions
- **� Habit Insights**: AI-powered suggestions for habit improvement

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Inspired by various habit tracking apps for a simple, effective approach
