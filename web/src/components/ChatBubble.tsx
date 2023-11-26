const ChatBubble = ({ message }: any) => {
  const rightBubble = message.role === 'user';
  return (
    <div className={`chat-page__bubble ${rightBubble ? 'chat-page__bubble--right' : ''}`}>
      {false && <p className="chat-page__bubble-role">{message.role}</p>}
      <p className="chat-page__bubble-message">{message.content}</p>
    </div>
  );
};
export default ChatBubble;
