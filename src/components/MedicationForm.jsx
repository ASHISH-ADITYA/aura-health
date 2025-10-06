import React, { useState } from 'react';
function MedicationForm({ addMedication }) {
  const [medName, setMedName] = useState('');
  const [dosage, setDosage] = useState('');
  const [schedule, setSchedule] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!medName || !dosage || !schedule) return;
    addMedication({ name: medName, dosage, schedule });
    setMedName(''); setDosage(''); setSchedule('');
  };
  return (
    <div className="form-container">
      <h2>Add New Medication</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Medication Name" value={medName} onChange={(e) => setMedName(e.target.value)} />
        <input type="text" placeholder="Dosage (e.g., 10mg)" value={dosage} onChange={(e) => setDosage(e.target.value)} />
        <input type="text" placeholder="Schedule (e.g., 8:00 AM)" value={schedule} onChange={(e) => setSchedule(e.target.value)} />
        <button type="submit">Add Medication</button>
      </form>
    </div>
  );
}
export default MedicationForm;