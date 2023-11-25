const Message = ({ message }: any) => {
  return (
    <div className={`chat-bubble ${message.role === 'user' ? 'right' : ''}`}>
      <div className="chat-bubble__right">
        <p className="user-name">{message.role}</p>
        <p className="user-message">{message.message}</p>
      </div>
    </div>
  );
};
export default Message;
