import React from 'react';

const mockPatients = [
  {
    id: 'P001',
    name: 'Rahim Uddin',
    age: 45,
    gender: 'Male',
    condition: 'Diabetes',
    doctor: 'Dr. Ayesha Sultana',
    contact: '01712345678',
  },
  {
    id: 'P002',
    name: 'Salma Khatun',
    age: 29,
    gender: 'Female',
    condition: 'Hypertension',
    doctor: 'Dr. Nazmul Haque',
    contact: '01898765432',
  },
  {
    id: 'P003',
    name: 'Kamrul Hasan',
    age: 38,
    gender: 'Male',
    condition: 'Asthma',
    doctor: 'Dr. Rubaiya Toma',
    contact: '01611223344',
  },
];

const TotalPatient = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Total Patients</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPatients.map((patient) => (
          <div key={patient.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-600">{patient.name}</h3>
            <p className="text-sm text-gray-600">Patient ID: {patient.id}</p>
            <p className="text-sm text-gray-700">Age: {patient.age}</p>
            <p className="text-sm text-gray-700">Gender: {patient.gender}</p>
            <p className="text-sm text-gray-700">Condition: {patient.condition}</p>
            <p className="text-sm text-gray-700">Assigned Doctor: {patient.doctor}</p>
            <p className="text-sm text-gray-700">Contact: {patient.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalPatient;