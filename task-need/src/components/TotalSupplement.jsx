import React from 'react';

const dummySupplements = [
  {
    id: 1,
    name: 'Vitamin D',
    quantity: 120,
    unit: 'Capsules',
    category: 'Vitamins',
    stockStatus: 'Available',
  },
  {
    id: 2,
    name: 'Omega 3 Fish Oil',
    quantity: 80,
    unit: 'Softgels',
    category: 'Essential Oils',
    stockStatus: 'Low Stock',
  },
  {
    id: 3,
    name: 'Calcium',
    quantity: 200,
    unit: 'Tablets',
    category: 'Minerals',
    stockStatus: 'Available',
  },
];

const TotalSupplement = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Total Supplements</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Unit</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Stock Status</th>
            </tr>
          </thead>
          <tbody>
            {dummySupplements.map((supplement, index) => (
              <tr key={supplement.id} className="text-center">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{supplement.name}</td>
                <td className="px-4 py-2 border">{supplement.quantity}</td>
                <td className="px-4 py-2 border">{supplement.unit}</td>
                <td className="px-4 py-2 border">{supplement.category}</td>
                <td
                  className={`px-4 py-2 border font-semibold ${
                    supplement.stockStatus === 'Low Stock' ? 'text-red-500' : 'text-green-600'
                  }`}
                >
                  {supplement.stockStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalSupplement;