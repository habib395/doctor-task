import React, { useState } from 'react';

const dummyMessages = [
  { id: 1, sender: 'Admin', content: 'System maintenance on Sunday at 10 PM.' },
  { id: 2, sender: 'Admin', content: 'New update deployed successfully.' },
  { id: 3, sender: 'Admin', content: 'Reminder: Please review patient reports.' },
];

const AdminMessage = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const messageObj = {
      id: messages.length + 1,
      sender: 'Admin',
      content: newMessage.trim(),
    };

    setMessages([...messages, messageObj]);
    setNewMessage('');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Admin Messages</h2>

      <div className="mb-6 max-h-64 overflow-y-auto border rounded p-4 space-y-3 bg-gray-50">
        {messages.length === 0 && <p className="text-gray-500 text-center">No messages yet.</p>}
        {messages.map(({ id, sender, content }) => (
          <div key={id} className="bg-blue-100 rounded p-3">
            <p className="font-semibold">{sender}:</p>
            <p>{content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-3">
        <input
          type="text"
          placeholder="Write a new message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border rounded px-3 py-2 focus:outline-yellow-500"
        />
        <button type="submit" className="btn btn-primary px-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default AdminMessage;