import { useCallback, useEffect, useState } from 'react';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';
import { toastEventManager } from '../../../utils/toast';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);
  const [pendingRemovalMessagesIds, setPendingRemovalMessagesIds] = useState([]);

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalMessagesIds((prevState) => [...prevState, id]);
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
    setPendingRemovalMessagesIds((prevState) => prevState.filter((messageId) => messageId !== id));
  }, []);

  useEffect(() => {
    function handleAddToast({ text, type, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          text,
          type,
          duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
