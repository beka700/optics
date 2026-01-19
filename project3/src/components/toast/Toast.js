import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({ message, type = 'success', duration = 1000, onClose }) => { 
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  let icon;
  switch(type) {
    case 'success':
      icon = '✓';
      break;
    case 'error':
      icon = '✗';
      break;
    case 'info':
      icon = 'ℹ';
      break;
    case 'warning':
      icon = '⚠';
      break;
    default:
      icon = 'ℹ';
  }

  return (
    <div className={`toast-notification toast-${type} ${isVisible ? 'show' : ''}`}>
      <span className="toast-icon">{icon}</span>
      <div className="toast-content">{message}</div>
      <button className="toast-close" onClick={() => {
        setIsVisible(false);
        setTimeout(() => {
          if (onClose) onClose();
        }, 300);
      }}>×</button>
      <div className="toast-progress">
        <div 
          className="toast-progress-bar" 
          style={{ 
            animation: `toastProgress ${duration}ms linear forwards` // Динамическая анимация
          }}
        />
      </div>
    </div>
  );
};

export default Toast;