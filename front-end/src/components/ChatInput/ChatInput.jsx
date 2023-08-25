import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Chat = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Chat;
