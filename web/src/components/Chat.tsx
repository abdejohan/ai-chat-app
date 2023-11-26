import { RefObject, useRef, useState } from 'react';
import SendMessage from './SendMessage';
import ChatBubble from './ChatBubble';
import { Message } from '../types';
const API_URL = import.meta.env.VITE_API_URL;

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

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
      scrollChatToBottom(chatRef);
    } catch (error) {
      return null;
    }
  };

  const scrollChatToBottom = (chatRef: RefObject<HTMLDivElement>) => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
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
        {messages?.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </div>
      <div ref={chatRef} style={{ marginBottom: '120px' }} /> {/* offset for the sendmessage  */}
      <SendMessage saveNewMessage={saveNewMessage} />
    </>
  );
};

export default ChatBox;
