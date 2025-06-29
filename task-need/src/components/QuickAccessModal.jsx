import React, { useState } from 'react';
import { PiDotsNineBold } from 'react-icons/pi';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Dialog } from '@headlessui/react';
import {
  MdDashboard, MdPeople, MdAssignment, MdHistory, MdPendingActions, MdLocalPharmacy,
  MdListAlt, MdMessage, MdPerson, MdMiscellaneousServices, MdMoneyOff, MdPayment,
  MdSupervisorAccount, MdSms, MdNotificationsActive, MdReportProblem,
} from 'react-icons/md';

const icons = [
  { id: 'dashboard', label: 'Dashboard', icon: <MdDashboard size={24} /> },
  { id: 'total-prescription', label: 'Total Prescription', icon: <MdAssignment size={24} /> },
  { id: 'total-patient', label: 'Total Patient', icon: <MdPeople size={24} /> },
  { id: 'diagnosis-history', label: 'Diagnosis History', icon: <MdHistory size={24} /> },
  { id: 'pending-appointments', label: 'Pending Appointments', icon: <MdPendingActions size={24} /> },
  { id: 'total-supplement', label: 'Total Supplement', icon: <MdLocalPharmacy size={24} /> },
  { id: 'patient-supplement-list', label: 'Patient Supplement List', icon: <MdListAlt size={24} /> },
  { id: 'admin-message', label: 'Admin Message', icon: <MdMessage size={24} /> },
  { id: 'profile-setting', label: 'Profile Setting', icon: <MdPerson size={24} /> },
  { id: 'service', label: 'Service', icon: <MdMiscellaneousServices size={24} /> },
  { id: 'patient-due', label: 'Patient Due', icon: <MdMoneyOff size={24} /> },
  { id: 'payment-history', label: 'Payment History', icon: <MdPayment size={24} /> },
  { id: 'admin-activity', label: 'Admin Activity', icon: <MdSupervisorAccount size={24} /> },
  { id: 'sms-credits', label: 'SMS Credits', icon: <MdSms size={24} /> },
  { id: 'send-notification', label: 'Send Notification', icon: <MdNotificationsActive size={24} /> },
  { id: 'low-stocks-supplement', label: 'Low Stocks Supplement', icon: <MdReportProblem size={24} /> },
];

const SortableItem = ({ id, label }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center gap-3 p-3 rounded-xl bg-white/20 backdrop-blur-lg shadow hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200"
    >
      <span className="text-blue-600">{icons.find(i => i.id === id)?.icon}</span>
      <span className="font-medium text-black text-sm md:text-base">{label}</span>
    </div>
  );
};

const QuickAccessModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(icons);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);
      setItems(prev => arrayMove(prev, oldIndex, newIndex));
    }
  };

  return (
    <div>
      <button
        className="text-xl p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        onClick={() => setIsOpen(true)}
      >
        <PiDotsNineBold />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
          <Dialog.Panel className="w-full max-w-[95vw] sm:max-w-3xl bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-200 space-y-6">
            <Dialog.Title className="text-xl sm:text-2xl font-bold text-center text-blue-600">
              🔗 Quick Access
            </Dialog.Title>

            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={items} strategy={verticalListSortingStrategy}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {items.map(item => (
                    <SortableItem key={item.id} id={item.id} label={item.label} />
                  ))}
                </div>
              </SortableContext>
            </DndContext>

            <div className="text-center pt-4">
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default QuickAccessModal;