import React, { useEffect, useRef, useState } from 'react';
import SendMessage from './SendMessage';
import Message from './Message';

const chatConversation = [
  {
    role: 'user',
    message: 'Hi there!',
  },
  {
    role: 'assistant',
    message: 'Hello! How can I help you today?',
  },
  {
    role: 'user',
    message: 'Im having trouble with my computer.',
  },
  {
    role: 'assistant',
    message: 'What seems to be the problem?',
  },
  {
    role: 'user',
    message: 'It keeps crashing when I open multiple programs.',
  },
  {
    role: 'assistant',
    message: 'Have you tried freeing up some memory or closing unnecessary apps?',
  },
];

const ChatBox = () => {
  const [messages, setMessages] = useState(chatConversation);
  const scroll = useRef();

  const saveNewMessage = (newMsg: any) => {
    setMessages([...messages, newMsg]);
  };

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage saveNewMessage={saveNewMessage} scroll={scroll} />
    </main>
  );
};

export default ChatBox;
