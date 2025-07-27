import React, { useState, useEffect } from 'react';
import { schedule, topics } from '../data';

const TopicProgress = () => {
  const [completed, setCompleted] = useState(() =>
    JSON.parse(localStorage.getItem('completedDays') || '{}')
  );

  // Compute per-topic coverage
  const topicCounts = topics.map((t) => {
    const total = schedule.filter(s => s.topic === t.name).length;
    const done = schedule.filter(s => s.topic === t.name && completed[s.date]).length;
    return { ...t, total, done, percent: total ? Math.round((done/total)*100) : 0 };
  });

  return (
    <div className="card">
      <div className="header">Topic Progress</div>
      <table style={{width:'100%', fontSize:'1.1em'}}>
        <thead>
          <tr><th>Part</th><th>Topic</th><th>Progress</th></tr>
        </thead>
        <tbody>
          {topicCounts.map(t => (
            <tr key={t.name}>
              <td style={{color:'var(--gold)'}}>Part {t.part}</td>
              <td>{t.name}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress-bar-inner"
                    style={{width: `${t.percent}%`}}
                  ></div>
                </div>
                {t.done}/{t.total} days ({t.percent}%)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicProgress;
