import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem';

const initialItems = [
  '📄 Total Prescription',
  '👥 Total Patient',
  '📋 Diagnosis History',
  '⏳ Pending Appointments',
  '💊 Total Supplement',
  '📝 Patient Supplement List',
  '💬 Admin Message',
  '⚙️ Profile Setting',
  '🧰 Service',
  '💰 Patient Due',
  '📊 Payment History',
  '📅 Admin Activity',
  '✉️ SMS Credits',
  '🔔 Send Notification',
  '💼 Career',
  '🗑️ Auto Deleted Users',
  '📉 Low Stocks Supplement',
];

const Dashboard = () => {
  const [items, setItems] = useState(initialItems);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active?.id !== over?.id) {
      setItems((prev) => {
        const oldIndex = prev.indexOf(active.id);
        const newIndex = prev.indexOf(over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        ড্যাশবোর্ড
      </h1>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((item) => (
              <SortableItem key={item} id={item} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Dashboard;