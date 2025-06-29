import React, { useState } from 'react';

const ProfileSetting = () => {
  const [formData, setFormData] = useState({
    name: 'Dr. Habibur Rahman',
    email: 'habib@example.com',
    phone: '01700000000',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, submit to backend API
    console.log('Updated Profile:', formData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">প্রোফাইল সেটিংস</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">আপনার নাম</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">ইমেইল</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">মোবাইল নাম্বার</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">নতুন পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-yellow-500"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">আপডেট করুন</button>
      </form>
    </div>
  );
};

export default ProfileSetting;