/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';


const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div className={`message ${message.sender}`} key={index}>
            <span className="message-sender">{message.sender}:</span> {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MessageList;
