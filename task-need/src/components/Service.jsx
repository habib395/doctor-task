import React from 'react';
import { FaStethoscope, FaUserMd, FaNotesMedical, FaHeartbeat } from 'react-icons/fa';

const services = [
  {
    title: 'General Check-up',
    description: 'Routine health exams and consultations to maintain your well-being.',
    icon: <FaStethoscope className="text-4xl text-blue-500" />
  },
  {
    title: 'Specialist Consultation',
    description: 'Access to expert doctors in cardiology, neurology, orthopedics, and more.',
    icon: <FaUserMd className="text-4xl text-green-500" />
  },
  {
    title: 'Lab Tests & Diagnostics',
    description: 'Comprehensive lab tests with fast and accurate results.',
    icon: <FaNotesMedical className="text-4xl text-yellow-500" />
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency services to handle urgent medical conditions.',
    icon: <FaHeartbeat className="text-4xl text-red-500" />
  }
];

const Service = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Medical Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;