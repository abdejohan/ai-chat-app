import { SyntheticEvent, useState } from 'react';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleMessageSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }
    // make the api call here
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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default SendMessage;
