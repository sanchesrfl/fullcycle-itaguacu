// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import ChatInput from './components/ChatInput/ChatInput';
import MessageList from './components/ChatInput/MessageList';
import './App.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  const handleSendMessage = (text, sender) => {
    const newMessage = { text, sender };
    setMessages([newMessage, ...messages]);

    if (sender !== 'bot') {
      setTimeout(() => {
        const botMessage = { text: 'Olá! Sou um bot !!!!!!!!!!', sender: 'Bot' };
        setMessages([botMessage, ...messages]);
      }, 500);
    }
  };

  return (
    <div className="chat-app">
      <MessageList messages={messages} ref={messagesContainerRef} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
