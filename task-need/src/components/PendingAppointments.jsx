import React from 'react';

const dummyAppointments = [
  {
    id: 1,
    patientName: 'John Doe',
    date: '2025-07-01',
    time: '10:00 AM',
    status: 'Pending',
  },
  {
    id: 2,
    patientName: 'Jane Smith',
    date: '2025-07-02',
    time: '02:30 PM',
    status: 'Pending',
  },
  {
    id: 3,
    patientName: 'Rahim Uddin',
    date: '2025-07-03',
    time: '09:15 AM',
    status: 'Pending',
  },
];

const PendingAppointments = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Pending Appointments</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Patient Name</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Time</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyAppointments.map((appointment, index) => (
              <tr key={appointment.id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{appointment.patientName}</td>
                <td className="px-4 py-2 border">{appointment.date}</td>
                <td className="px-4 py-2 border">{appointment.time}</td>
                <td className="px-4 py-2 border text-yellow-500 font-semibold">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAppointments;