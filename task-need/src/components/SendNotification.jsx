import React, { useState } from 'react';

const SendNotification = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    // Here you would typically send the data to the server
    console.log('Notification Sent:', { title, message });
    setSuccess(true);
    setTitle('');
    setMessage('');
    setTimeout(() => setSuccess(false), 3000); // hide message after 3s
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">📢 Send Notification</h2>

      <form
        onSubmit={handleSend}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notification Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Enter notification title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message here"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Send Notification
        </button>

        {success && (
          <p className="text-green-600 text-sm text-center mt-2">
            ✅ Notification sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default SendNotification;