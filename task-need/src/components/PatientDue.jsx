import React from 'react';

const dueList = [
  { id: 1, name: 'Rahim Uddin', service: 'Cardiology', due: 1500, date: '2025-06-25' },
  { id: 2, name: 'Karima Akter', service: 'General Check-up', due: 500, date: '2025-06-20' },
  { id: 3, name: 'Sumon Mia', service: 'Dental Surgery', due: 2000, date: '2025-06-18' },
];

const PatientDue = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Patient Due List</h2>

      <div className="overflow-x-auto shadow border rounded-lg">
        <table className="min-w-full table-auto bg-white text-sm">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Patient Name</th>
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Due Amount (৳)</th>
              <th className="px-4 py-2 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {dueList.map((patient) => (
              <tr key={patient.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{patient.name}</td>
                <td className="px-4 py-2">{patient.service}</td>
                <td className="px-4 py-2 text-red-600 font-semibold">৳ {patient.due}</td>
                <td className="px-4 py-2">{patient.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientDue;