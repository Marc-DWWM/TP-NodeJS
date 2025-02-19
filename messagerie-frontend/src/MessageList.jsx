import React, { useState, useEffect } from 'react';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/messages')

      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Liste des messages</h1>
      {messages.map((msg) => (
        <div key={msg.id}>
          <strong>{msg.author}</strong> : {msg.content}
        </div>
      ))}
    </div>
  );
}
export default MessageList;