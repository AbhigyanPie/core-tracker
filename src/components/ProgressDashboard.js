import React, { useState, useEffect } from 'react';
import { schedule } from '../data';

const ProgressDashboard = () => {
  const [completed, setCompleted] = useState(() =>
    JSON.parse(localStorage.getItem('completedDays') || '{}')
  );

  // Calendar-grid summary (like GitHub)
  const days = schedule.map(s => s.date);
  const totalActive = Object.values(completed).filter(Boolean).length;

  // Longest streak calculation
  let maxStreak = 0, currStreak = 0;
  for (let d of days) {
    if (completed[d]) {
      currStreak++;
      if (currStreak > maxStreak) maxStreak = currStreak;
    } else currStreak = 0;
  }

  return (
    <div className="card">
      <div className="header">Progress Dashboard</div>
      <div style={{marginBottom:'1em'}}>
        <b>Total completed days:</b> {totalActive} / {days.length}
      </div>
      <div style={{marginBottom:'1em'}}>
        <b>Max Streak:</b> {maxStreak}
      </div>
      <div style={{
        display: 'flex', flexWrap: 'wrap', maxWidth: '800px', gap: '3px', background:'#f0e6cc', padding:'1em', borderRadius:'1em'
      }}>
        {days.map((d, i) =>
          <div
            key={d}
            title={d}
            style={{
              width: '14px',
              height: '14px',
              background: completed[d]
                ? `linear-gradient(135deg, var(--gold) ${i%2 ? '60%' : '100%'}, var(--darkgreen) 100%)`
                : '#eceadf',
              opacity: completed[d] ? '1' : '0.5',
              borderRadius: '2px'
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
export default ProgressDashboard;
