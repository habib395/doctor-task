import React from 'react';

const mockPrescriptions = [
  {
    id: 'RX001',
    patient: 'Rahim Uddin',
    date: '2025-06-25',
    doctor: 'Dr. Nazmul Haque',
    medication: 'Paracetamol 500mg, 3x/day',
    status: 'Approved',
  },
  {
    id: 'RX002',
    patient: 'Salma Khatun',
    date: '2025-06-28',
    doctor: 'Dr. Ayesha Sultana',
    medication: 'Amoxicillin 250mg, 2x/day',
    status: 'Pending',
  },
  {
    id: 'RX003',
    patient: 'Kamrul Hasan',
    date: '2025-06-27',
    doctor: 'Dr. Rubaiya Toma',
    medication: 'Cetrizine 10mg, 1x/day',
    status: 'Approved',
  },
];

const TotalPrescription = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Total Prescriptions</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="px-4 py-2 border">Prescription ID</th>
              <th className="px-4 py-2 border">Patient</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Doctor</th>
              <th className="px-4 py-2 border">Medications</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockPrescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td className="px-4 py-2 border text-center">{prescription.id}</td>
                <td className="px-4 py-2 border text-center">{prescription.patient}</td>
                <td className="px-4 py-2 border text-center">{prescription.date}</td>
                <td className="px-4 py-2 border text-center">{prescription.doctor}</td>
                <td className="px-4 py-2 border text-center">{prescription.medication}</td>
                <td className="px-4 py-2 border text-center">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      prescription.status === 'Approved' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  >
                    {prescription.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalPrescription;