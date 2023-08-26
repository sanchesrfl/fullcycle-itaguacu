import './MessageList.styles.css';
/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars


const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div className={`message ${message.sender} ${message.isSentByMe ? 'sent-by-me' : ''}`} key={index}>
            <span className="message-sender">{message.sender}:</span> {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};



export default MessageList;
