import React from 'react';

const dummyPatientSupplements = [
  {
    id: 1,
    patientName: 'Md. Habib',
    supplement: 'Vitamin D',
    dosage: '1 capsule',
    schedule: 'Daily after breakfast',
  },
  {
    id: 2,
    patientName: 'Fatema Khatun',
    supplement: 'Calcium',
    dosage: '2 tablets',
    schedule: 'Twice a day',
  },
  {
    id: 3,
    patientName: 'Rafsan Khan',
    supplement: 'Omega 3',
    dosage: '1 softgel',
    schedule: 'Daily at bedtime',
  },
];

const PatientSupplementList = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Patient Supplement List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Patient Name</th>
              <th className="px-4 py-2 border">Supplement</th>
              <th className="px-4 py-2 border">Dosage</th>
              <th className="px-4 py-2 border">Schedule</th>
            </tr>
          </thead>
          <tbody>
            {dummyPatientSupplements.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.patientName}</td>
                <td className="px-4 py-2 border">{item.supplement}</td>
                <td className="px-4 py-2 border">{item.dosage}</td>
                <td className="px-4 py-2 border">{item.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientSupplementList;