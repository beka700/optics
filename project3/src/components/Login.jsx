import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    if (isRegister) {
      if (!formData.name.trim()) errors.name = 'Name is required';
      else if (formData.name.length < 2) errors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    
    if (!formData.password) errors.password = 'Password is required';
    else if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
    
    if (isRegister) {
      if (!formData.confirmPassword) errors.confirmPassword = 'Please confirm password';
      else if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      Object.values(errors).forEach(error => {
        toast.error(`❌ ${error}`, { autoClose: 3000 });
      });
      setLoading(false);
      return;
    }
    
    setTimeout(() => {
      if (isRegister) {
        const userData = {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
          registeredAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('authToken', 'token-' + Date.now());
        localStorage.setItem('isLoggedIn', 'true');
        
        if (rememberMe) {
          localStorage.setItem('rememberedUser', formData.email);
        }
        
        setLoading(false);

        toast.success("🎉 Registration successful!", { 
          autoClose: 2000,
          hideProgressBar: false 
        });
        
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        
        setIsRegister(false);
        
        if (from) {
          navigate(from, { replace: true });
        } else {
          navigate('/', { replace: true });
        }
        
      } else {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        
        if (savedUser && savedUser.email === formData.email) {
          savedUser.lastLogin = new Date().toISOString();
          localStorage.setItem('user', JSON.stringify(savedUser));
          localStorage.setItem('authToken', 'token-' + Date.now());
          localStorage.setItem('isLoggedIn', 'true');
          
          if (rememberMe) {
            localStorage.setItem('rememberedUser', formData.email);
          } else {
            localStorage.removeItem('rememberedUser');
          }
          
          setLoading(false);
          
          toast.success("✅ Login successful!", { 
            autoClose: 2000,
            hideProgressBar: false 
          });
          
          setFormData(prev => ({
            ...prev,
            password: ''
          }));
          
          if (from) {
            navigate(from, { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        } else {
          setLoading(false);
          toast.error("❌ Invalid credentials! Please register first.", { 
            autoClose: 3000,
            hideProgressBar: false 
          });
          setIsRegister(true);
        }
      }
    }, 1000);
  };

  const handleForgotPassword = () => {
    if (!formData.email) {
      toast.warning("⚠️ Please enter your email first", { autoClose: 2000 });
      return;
    }
    
    toast.info(`📧 Password reset link sent to ${formData.email}`, { 
      autoClose: 3000,
      hideProgressBar: false 
    });
  };

  const handleSocialLogin = (provider) => {
    const providers = {
      'google': 'Google',
      'facebook': 'Facebook',
      'apple': 'Apple'
    };
    
    toast.info(`🔗 Connecting to ${providers[provider]}...`, { 
      autoClose: 2000,
      hideProgressBar: false 
    });
    
    setTimeout(() => {
      const mockUser = {
        id: Date.now(),
        name: `${providers[provider]} User`,
        email: `user@${provider}.com`,
        provider: provider,
        lastLogin: new Date().toISOString()
      };
      
      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('authToken', 'social-token-' + Date.now());
      localStorage.setItem('isLoggedIn', 'true');
      
      toast.success(`✅ Connected with ${providers[provider]}!`, { 
        autoClose: 2000,
        hideProgressBar: false 
      });
      
      if (from) {
        navigate(from, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }, 1500);
  };

  const handleGuestCheckout = () => {
    toast.info("🛍️ Continuing as guest", { 
      autoClose: 2000,
      hideProgressBar: false 
    });
    
    if (from) {
      navigate(from, { replace: true });
    } else {
      navigate('/checkout', { replace: true });
    }
  };

  const handleDemoLogin = () => {
    setFormData({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'demo123',
      confirmPassword: 'demo123'
    });
    
    toast.info("🚀 Demo credentials loaded", { 
      autoClose: 1500,
      hideProgressBar: false 
    });
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="login-background-overlay"></div>
      </div>
      
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-icon">🖥️</span>
            <span className="logo-text">MSI Store</span>
          </div>
          <h1 className="login-title">{isRegister ? 'Create Account' : 'Welcome Back'}</h1>
          <p className="login-subtitle">
            {isRegister ? 'Join our community and start shopping' : 'Sign in to continue your purchase'}
          </p>
        </div>
        
        <div className="social-login-section">
          <p className="social-title">Quick Sign In</p>
          <div className="social-buttons">
            <button 
              type="button"
              className="social-btn google"
              onClick={() => handleSocialLogin('google')}
            >
              <span className="social-icon">G</span>
              Google
            </button>
            <button 
              type="button"
              className="social-btn facebook"
              onClick={() => handleSocialLogin('facebook')}
            >
              <span className="social-icon">f</span>
              Facebook
            </button>
            <button 
              type="button"
              className="social-btn apple"
              onClick={() => handleSocialLogin('apple')}
            >
              <span className="social-icon"></span>
              Apple
            </button>
          </div>
        </div>
        
        <div className="divider">
          <span>or continue with email</span>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {isRegister && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required={isRegister}
              />
            </div>
          )}
          
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
            <div className="password-hint">
              {isRegister ? 'Password must be at least 6 characters' : ''}
            </div>
          </div>
          
          {isRegister && (
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                required={isRegister}
              />
            </div>
          )}
          
          {!isRegister && (
            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="checkbox-input"
                />
                <span className="checkbox-custom"></span>
                Remember me
              </label>
              
              <button 
                type="button" 
                onClick={handleForgotPassword}
                className="forgot-password-btn"
              >
                Forgot password?
              </button>
            </div>
          )}
          
          <button 
            type="submit" 
            className={`submit-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                {isRegister ? 'Creating Account...' : 'Signing In...'}
              </>
            ) : (
              isRegister ? 'Create Account' : 'Sign In'
            )}
          </button>
        </form>
        
        <div className="demo-section">
          <button 
            type="button" 
            onClick={handleDemoLogin}
            className="demo-btn"
          >
            🚀 Load Demo Credentials
          </button>
        </div>
        
        <div className="login-footer">
          <div className="toggle-section">
            <p className="toggle-text">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}
            </p>
            <button 
              type="button" 
              onClick={() => {
                setIsRegister(!isRegister);
                if (!isRegister) {
                  setFormData(prev => ({
                    ...prev,
                    confirmPassword: ''
                  }));
                }
              }}
              className="toggle-btn"
            >
              {isRegister ? 'Sign In' : 'Create Account'}
            </button>
          </div>
          
          <button 
            type="button" 
            onClick={handleGuestCheckout}
            className="guest-checkout-btn"
          >
            <span className="guest-icon">👤</span>
            Continue as Guest →
          </button>
          
          <div className="security-info">
            <span className="security-icon">🔒</span>
            <span className="security-text">256-bit SSL encryption & secure login</span>
          </div>
        </div>
        
        <div className="login-help">
          <p>Need help? <button type="button" className="help-link">Contact Support</button> or call 1-800-MSI-HELP</p>
        </div>
      </div>
    </div>
  );
};

export default Login;