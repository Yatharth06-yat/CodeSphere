# CodeSphere

A professional, clean, scalable, and fully responsive React frontend for **CodeSphere** — a collaborative study and productivity platform.

This is a **frontend-only** application. All data is mocked locally inside each feature's `data/` folder. No backend, authentication, or database logic is implemented — the app is structured so a real API layer can be dropped in later with minimal changes (see `shared/services` and each feature's `services/` folder).

## Tech Stack

- React 18 + React Router DOM
- Axios (pre-wired, not yet connected to a live API)
- Chart.js via react-chartjs-2
- React Icons
- Plain CSS (no Tailwind), feature-scoped stylesheets

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Folder Structure

```
src/
  assets/            static images/icons
  shared/
    components/      Navbar, Sidebar, Footer, Button, Loader, Modal, Table,
                      SearchBar, Pagination, EmptyState, Charts
    layouts/          MainLayout (navbar + sidebar + footer shell)
    hooks/            useFetch, useLocalStorage, useDebounce
    services/         shared axios instance
    utils/            formatting + helper functions
    constants/        route paths, chart color palette
  features/
    Home/ Dashboard/ Auth/ GitHub/ LeetCode/ NeetCode/ ManualTracker/
    Friends/ Leaderboard/ Challenges/ Goals/ Notes/ Analytics/ Profile/ Settings/
    -> each feature owns its own components/, hooks/, services/, data/, styles/
  App.jsx
  main.jsx
```

## Feature Architecture

Every feature is self-contained and follows the same internal pattern:

```
FeatureName/
  components/     feature-specific presentational components
  hooks/          useFeatureName.js  (loads + manages the feature's mock data)
  services/       featureNameAPI.js (axios calls, ready for backend)
                  featureNameService.js (business logic wrapper around the API)
  data/           featureNameMockData.js
  styles/         FeatureName.css
  FeatureName.jsx  page-level component
  index.js         barrel export
```

This means new features can be added by copying the pattern above without touching any other part of the app.

## Notes

- All charts render from mock data via Chart.js.
- The Manual Tracker is a generic module — users can create any kind of tracker (JEE prep, gym, reading, etc.) without needing separate pages per activity.
- Swap `shared/services/axiosInstance.js` baseURL and connect each feature's `*API.js` file to real endpoints when the backend is ready..
start backend -> 2/08/2026
