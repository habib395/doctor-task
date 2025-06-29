import React from 'react';

const SmsCredits = () => {
  const totalCredits = 1000;
  const usedCredits = 425;
  const remainingCredits = totalCredits - usedCredits;

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">📨 SMS Credits</h2>

      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex justify-between text-lg">
          <span className="font-semibold text-gray-700">Total Credits:</span>
          <span className="text-blue-600">{totalCredits}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-semibold text-gray-700">Used Credits:</span>
          <span className="text-red-500">{usedCredits}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-semibold text-gray-700">Remaining Credits:</span>
          <span className="text-green-500">{remainingCredits}</span>
        </div>

        <div className="mt-6">
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${(remainingCredits / totalCredits) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-1">Credit Usage Progress</p>
        </div>
      </div>
    </div>
  );
};

export default SmsCredits;