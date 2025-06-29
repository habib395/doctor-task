import React from 'react';

const mockDiagnosis = [
  {
    id: 'D001',
    patientName: 'Rahim Uddin',
    date: '2025-06-15',
    diagnosis: 'Type 2 Diabetes',
    doctor: 'Dr. Ayesha Sultana',
    prescription: 'Metformin 500mg, twice daily',
  },
  {
    id: 'D002',
    patientName: 'Salma Khatun',
    date: '2025-06-17',
    diagnosis: 'High Blood Pressure',
    doctor: 'Dr. Nazmul Haque',
    prescription: 'Amlodipine 5mg, once daily',
  },
  {
    id: 'D003',
    patientName: 'Kamrul Hasan',
    date: '2025-06-18',
    diagnosis: 'Bronchial Asthma',
    doctor: 'Dr. Rubaiya Toma',
    prescription: 'Salbutamol inhaler, as needed',
  },
];

const DiagnosisHistory = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Diagnosis History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Patient</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Diagnosis</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Doctor</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Prescription</th>
            </tr>
          </thead>
          <tbody>
            {mockDiagnosis.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 border-b text-sm text-gray-700">{entry.date}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{entry.patientName}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{entry.diagnosis}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{entry.doctor}</td>
                <td className="px-4 py-2 border-b text-sm text-gray-700">{entry.prescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosisHistory;