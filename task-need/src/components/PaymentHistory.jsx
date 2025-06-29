import React from 'react';

const payments = [
  {
    id: 1,
    name: 'Rahim Uddin',
    service: 'Cardiology',
    amount: 1500,
    method: 'Bkash',
    date: '2025-06-25',
  },
  {
    id: 2,
    name: 'Karima Akter',
    service: 'Dental Cleaning',
    amount: 800,
    method: 'Cash',
    date: '2025-06-22',
  },
  {
    id: 3,
    name: 'Sumon Mia',
    service: 'ENT Checkup',
    amount: 500,
    method: 'Card',
    date: '2025-06-20',
  },
];

const PaymentHistory = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Payment History</h2>

      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="min-w-full table-auto bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Patient Name</th>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Amount (৳)</th>
              <th className="px-4 py-3 text-left">Payment Method</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pay) => (
              <tr key={pay.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{pay.name}</td>
                <td className="px-4 py-2">{pay.service}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">৳ {pay.amount}</td>
                <td className="px-4 py-2">{pay.method}</td>
                <td className="px-4 py-2">{pay.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;