// SortableItem.jsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

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
      className="bg-transparent border rounded-xl shadow-md p-6 cursor-move hover:shadow-xl transition-all duration-300"
    >
      <h2 className="text-lg font-semibold text-gray-700">{id}</h2>
    </div>
  );
};