import React from 'react';
import './styles/theme.css';
import DailyTracker from './components/DailyTracker';
import TopicProgress from './components/TopicProgress';
import ProgressDashboard from './components/ProgressDashboard';

function App() {
  return (
    <div style={{
      margin: '0 auto', maxWidth: '1100px', padding: '3rem 1rem 8rem 1rem'
    }}>
      <h1 style={{
        fontFamily: 'Merriweather, serif', color: 'var(--darkgreen)', fontWeight: 700,
        letterSpacing: '.04em', marginBottom:'2.5rem', textAlign:'center'
      }}>
        🏛️ Schedule Tracker
      </h1>
      <ProgressDashboard />
      <TopicProgress />
      <DailyTracker />
    </div>
  );
}

export default App;
