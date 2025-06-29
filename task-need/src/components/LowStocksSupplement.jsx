import React from 'react';

const LowStocksSupplement = () => {
  // Example data — replace with API data or props later
  const lowStockSupplements = [
    { id: 1, name: 'Vitamin D', quantity: 5, threshold: 10 },
    { id: 2, name: 'Calcium Tablets', quantity: 3, threshold: 10 },
    { id: 3, name: 'Iron Syrup', quantity: 2, threshold: 5 },
    { id: 4, name: 'Omega-3 Capsules', quantity: 4, threshold: 8 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
        ⚠️ Low Stock Supplements
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-red-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Supplement Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Quantity Left</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Threshold</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {lowStockSupplements.map((supplement, index) => (
              <tr key={supplement.id} className="border-t">
                <td className="py-2 px-4 text-sm">{index + 1}</td>
                <td className="py-2 px-4 text-sm">{supplement.name}</td>
                <td className="py-2 px-4 text-sm">{supplement.quantity}</td>
                <td className="py-2 px-4 text-sm">{supplement.threshold}</td>
                <td className="py-2 px-4 text-sm">
                  <span className="text-red-500 font-medium">Low Stock</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LowStocksSupplement;