import { RefObject, useEffect, useRef, useState } from 'react';
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
    ref.current!.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
      return setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => scrollChatToBottom(chatRef), [messages]);

  const saveNewMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
    getAiResponse(newMessage);
  };

  return (
    <>
      <div className="scroll-container">
        <div className="conversation">
          {messages?.map((message: Message, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ChatBubble key={index} message={message} />
          ))}
          <div ref={chatRef} />
        </div>
      </div>
      <SendMessage saveNewMessage={saveNewMessage} />
    </>
  );
};

export default ChatBox;
