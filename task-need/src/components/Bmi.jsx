import React, { useState } from 'react';

const Bmi = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setBmi(null);
      setCategory('Invalid input');
      return;
    }

    const result = (w / (h * h)).toFixed(2);
    setBmi(result);

    if (result < 18.5) {
      setCategory('Underweight');
    } else if (result >= 18.5 && result < 24.9) {
      setCategory('Normal weight');
    } else if (result >= 25 && result < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-6 border rounded shadow-md my-20">
      <h2 className="text-2xl font-bold text-center mb-6">BMI ক্যালকুলেটর</h2>

      <form onSubmit={calculateBMI}>
        <table className="table-auto w-full text-left">
          <tbody className="text-sm ">
            <tr>
              <td className="p-2 font-medium">উচ্চতা (সেন্টিমিটার):</td>
              <td className="p-2">
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-transparent border rounded "
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 font-medium">ওজন (কেজি):</td>
              <td className="p-2">
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-transparent border rounded "
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 font-medium">BMI রেজাল্ট:</td>
              <td className="p-2">
                <input
                  type="text"
                  readOnly
                  value={bmi || ''}
                  className="w-full px-3 bg-transparent py-2 border rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 font-medium">বিএমআই ক্যাটাগরি:</td>
              <td className="p-2">
                <input
                  type="text"
                  readOnly
                  value={category}
                  className="w-full px-3 py-2 bg-transparent border rounded "
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            হিসাব করুন
          </button>
        </div>
      </form>
      <div className='space-y-3 py-3'>
      <p>Very Severely Underweight (BMI &lt; 15)</p>
<p>Severely Underweight (BMI 15 - 16)</p>
<p>Underweight (BMI 16 - 18.5)</p>
<p>Normal (BMI 18.5 - 24.9)</p>
<p>Overweight (BMI 25 - 29.9)</p>
<p>Obese Class 1 (BMI 30 - 34.9)</p>
<p>Obese Class 2 (BMI 35 - 39.9)</p>
<p>Obese Class 3 (BMI &gt;= 40)</p>
      </div>
    </div>
  );
};

export default Bmi;