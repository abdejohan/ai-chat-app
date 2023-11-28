import { SyntheticEvent, useState } from 'react';
import { Message } from '../types';

type SendMessageProps = {
  saveNewMessage: (newMsg: Message) => void;
};

const SendMessage = ({ saveNewMessage }: SendMessageProps) => {
  const [message, setMessage] = useState('');

  const handleMessageSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }
    // make the api call here
    saveNewMessage({ role: 'user', content: message });
    setMessage('');
  };

  return (
    <form onSubmit={handleMessageSubmit} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        autoComplete="off"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default SendMessage;
