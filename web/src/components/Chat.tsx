import { RefObject, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SendMessage from './SendMessage';
import ChatBubble from './ChatBubble';
import { Message } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

const ChatBox = () => {
  const { state: startMessage } = useLocation();
  const [messages, setMessages] = useState<Message[]>([startMessage]);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollChatToBottom = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAiResponse = async (message: Message) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      const aiMessage = await response.json();
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
      return scrollChatToBottom(chatRef);
    } catch (error) {
      return null;
    }
  };

  const saveNewMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
    scrollChatToBottom(chatRef);
    getAiResponse(newMessage);
  };

  return (
    <>
      <div className="chat-page">
        {messages?.map((message: Message) => (
          <ChatBubble key={message.content} message={message} />
        ))}
      </div>
      <div ref={chatRef} style={{ marginBottom: '120px' }} />
      <SendMessage saveNewMessage={saveNewMessage} />
    </>
  );
};

export default ChatBox;
