import React, { useEffect, useState } from 'react';
import { schedule } from '../data';

function getTodayString() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

const DailyTracker = () => {
  // Load saved completion state from localStorage at start
  const [completed, setCompleted] = useState(() =>
    JSON.parse(localStorage.getItem('completedDays') || '{}')
  );

  // Whenever completed changes, update localStorage
  useEffect(() => {
    localStorage.setItem('completedDays', JSON.stringify(completed));
  }, [completed]);

  // Toggle button handler for a day
  const handleCheck = (date) => {
    setCompleted((prev) => ({ ...prev, [date]: !prev[date] }));
  };

  return (
    <div className="card">
      <div className="header">Daily Checklist</div>
      <table style={{ width: '100%', fontSize: '1.12em', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Date</th><th>Day</th><th>Topic</th><th>Done</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day) => (
            <tr
              key={day.date}
              data-today={getTodayString() === day.date ? "true" : undefined}
            >
              <td style={{
                padding: '0.47em',
                color: getTodayString() === day.date ? 'var(--spidey-blue)' : undefined
              }}>{day.date}</td>
              <td>{day.day}</td>
              <td>{day.topic}</td>
              <td>
                <input
                  className="checkbox-custom"
                  type="checkbox"
                  checked={!!completed[day.date]}
                  onChange={() => handleCheck(day.date)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyTracker;
