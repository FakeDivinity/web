"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Connect to the Socket.IO server

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on('chat message', (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Classroom Info</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Announcements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/chat">Chat</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1 className="my-4">Real-time Chat</h1>
      <div className="card">
        <div className="card-header">Messages</div>
        <div className="card-body" style={{ height: '400px', overflowY: 'scroll' }}>
          {messages.map((msg, index) => (
            <div key={index} className="alert alert-secondary" role="alert">
              {msg}
            </div>
          ))}
        </div>
        <div className="card-footer">
          <form onSubmit={sendMessage} className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
