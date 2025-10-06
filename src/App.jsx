import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import MedicationForm from './components/MedicationForm';
import './App.css';
function App() {
  const [medications, setMedications] = useState([
    { id: 1, name: 'Lisinopril', dosage: '10mg', schedule: '8:00 AM', taken: true },
  ]);
  const addMedication = (medToAdd) => {
    const newMed = { ...medToAdd, id: Date.now(), taken: false };
    setMedications([...medications, newMed]);
  };
  return (
    <div className="app-container">
      <Dashboard medications={medications} />
      <MedicationForm addMedication={addMedication} />
    </div>
  );
}
export default App;