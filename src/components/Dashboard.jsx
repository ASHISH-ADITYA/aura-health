import React from 'react';
function Dashboard({ medications }) {
  return (
    <div className="dashboard-container">
      <h1>Today's Medications</h1>
      <div className="med-list">
        {medications.map(med => (
          <div key={med.id} className={`med-item ${med.taken ? 'taken' : ''}`}>
            <h3>{med.name}</h3>
            <p>Dosage: {med.dosage}</p>
            <p>Time: {med.schedule}</p>
            <button>{med.taken ? 'Taken' : 'Mark as Taken'}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;