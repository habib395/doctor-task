import React, { useState } from 'react';
import {
  FaBars,
  FaTimes
} from 'react-icons/fa';

import Dashboard from './Dashboard';
import TotalPrescription from './TotalPrescription';
import TotalPatient from './TotalPatient';
import DiagnosisHistory from './DiagnosisHistory';
import PendingAppointments from './PendingAppointments';
import TotalSupplement from './TotalSupplement';
import PatientSupplementList from './PatientSupplementList';
import AdminMessage from './AdminMessage';
import ProfileSetting from './ProfileSetting';
import Service from './Service';
import PatientDue from './PatientDue';
import PaymentHistory from './PaymentHistory';
import AdminActivity from './AdminActivity';
import SmsCredits from './SmsCredits';
import SendNotification from './SendNotification';
import LowStocksSupplement from './LowStocksSupplement';

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard': return <Dashboard />;
      case 'Total Prescription': return <TotalPrescription />;
      case 'Total Patient': return <TotalPatient />;
      case 'Diagnosis History': return <DiagnosisHistory />;
      case 'Pending Appointments': return <PendingAppointments />;
      case 'Total Supplement': return <TotalSupplement />;
      case 'Patient Supplement List': return <PatientSupplementList />;
      case 'Admin Message': return <AdminMessage />;
      case 'Profile Setting': return <ProfileSetting />;
      case 'Service': return <Service />;
      case 'Patient Due': return <PatientDue />;
      case 'Payment History': return <PaymentHistory />;
      case 'Admin Activity': return <AdminActivity />;
      case 'SMS Credits': return <SmsCredits />;
      case 'Send Notification': return <SendNotification />;
      case 'Low Stocks Supplement': return <LowStocksSupplement />;
      default: return <div>Select a menu item</div>;
    }
  };

  const menuItems = [
    'Dashboard',
    'Total Prescription',
    'Total Patient',
    'Diagnosis History',
    'Pending Appointments',
    'Total Supplement',
    'Patient Supplement List',
    'Admin Message',
    'Profile Setting',
    'Service',
    'Patient Due',
    'Payment History',
    'Admin Activity',
    'SMS Credits',
    'Send Notification',
    'Low Stocks Supplement',
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white border-r p-4 space-y-2 z-40 transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              setActiveComponent(item);
              setIsSidebarOpen(false); // close on mobile after selection
            }}
            className={`block w-full text-left px-4 py-2 rounded hover:bg-blue-200 ${
              activeComponent === item ? 'bg-blue-300 font-semibold' : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 ml-0 lg:ml-64">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Sidebar;