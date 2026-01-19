import { Outlet } from 'react-router-dom';
import Prohed from './components/pro-hed/Prohed';
import Pro9 from "./components/pro9/Pro9.jsx";
import { useState, createContext, useContext } from 'react';
import ProductDetails from './components/ProductDetails/ProductDetails';
import './App.css';

const ToastContext = createContext();

const Toast = ({ message, type = 'success', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
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
      <button className="toast-close" onClick={() => setIsVisible(false)}>×</button>
      <div className="toast-progress">
        <div 
          className="toast-progress-bar" 
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success', duration = 3000) => {
    const id = Date.now();
    const newToast = {
      id,
      message,
      type,
      duration
    };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      removeToast(id);
    }, duration + 300);
    
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

function App() {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState("default");

  const handleShowProduct = (productId) => {
    setSelectedProductId(productId);
    setShowProductDetails(true);
  };

  const handleBackFromProduct = () => {
    setShowProductDetails(false);
    setSelectedProductId("default");
  };

  return (
    <ToastProvider>
      <div>
        <Prohed />
        {showProductDetails ? (
          <ProductDetails 
            onBack={handleBackFromProduct}
            productId={selectedProductId}
          />
        ) : (
          <Outlet context={{ onShowProduct: handleShowProduct }} />
        )}
        <Pro9 />
      </div>
    </ToastProvider>
  );
}

export default App;
export { useToast };