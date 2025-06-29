import React from 'react';

const activities = [
  {
    id: 1,
    action: 'Added new doctor profile: Dr. Azad Khan',
    date: '2025-06-28',
    time: '10:45 AM',
  },
  {
    id: 2,
    action: 'Updated patient record: Sumi Akter',
    date: '2025-06-27',
    time: '3:15 PM',
  },
  {
    id: 3,
    action: 'Deleted outdated prescription data',
    date: '2025-06-26',
    time: '1:30 PM',
  },
];

const AdminActivity = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Activity</h2>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <li key={activity.id} className="px-4 py-4 hover:bg-gray-50">
              <p className="text-gray-800 font-medium">{activity.action}</p>
              <p className="text-sm text-gray-500">{activity.date} at {activity.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminActivity;