import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import i1 from '../../assets/Logo.png'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
// import CartDrawer from '../CartDrawer/CartDrawer'; 
import './pro-hed.css'

function Prohed() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const [isRegister, setIsRegister] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // Mock products for search
  const mockProducts = [
    { id: 1, name: 'Sunglasses', category: 'optics', price: '$120', path: '/optics' },
    { id: 2, name: 'T-Shirt', category: 'clothing', price: '$45', path: '/clothing' },
    { id: 3, name: 'John Doe - Hero', category: 'heroes', price: '', path: '/heroes' },
    { id: 4, name: 'Adventure Story', category: 'stories', price: '', path: '/stories' },
    { id: 5, name: 'Glasses Case', category: 'optics', price: '$25', path: '/optics' },
    { id: 6, name: 'Hoodie', category: 'clothing', price: '$85', path: '/clothing' },
    { id: 7, name: 'Jane Smith - Hero', category: 'heroes', price: '', path: '/heroes' },
    { id: 8, name: 'Travel Story', category: 'stories', price: '', path: '/stories' },
    { id: 9, name: 'Polarized Lenses', category: 'optics', price: '$150', path: '/optics' },
    { id: 10, name: 'Cap', category: 'clothing', price: '$30', path: '/clothing' },
  ]

  useEffect(() => {
    checkLoginStatus()
  }, [])

  useEffect(() => {
    // Search query өзгөргөндө
    if (searchQuery.trim() === '') {
      setSearchResults([])
      return
    }

    const filteredResults = mockProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5) // Биринчи 5 натыйжаны гана көрсөтүү

    setSearchResults(filteredResults)
  }, [searchQuery])

  const checkLoginStatus = () => {
    const saved = localStorage.getItem('isLoggedIn')
    const user = localStorage.getItem('userName')
    const isAuth = localStorage.getItem('isAuthorized')
    
    const loggedIn = saved === 'true' && isAuth === 'true'
    setIsLoggedIn(loggedIn)
    if (loggedIn && user) {
      setUserName(user)
    }
  }

  const handleCategoryClick = (path) => {
    if (!isLoggedIn && path !== '/login' && path !== '/register') {
      setShowAuthModal(true)
      return
    }
    
    if (window.location.pathname === path) {
      window.scrollTo(0, 0);
    } else {
      navigate(path);
    }
    setShowSearch(false)
    setSearchQuery('')
  }

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  }

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setShowLogoutModal(true)
    } else {
      setShowAuthModal(true)
      setIsRegister(true)
    }
    setShowSearch(false)
  }

  const handleSearchClick = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true)
      return
    }
    
    setShowSearch(!showSearch)
    if (showSearch) {
      setSearchQuery('')
      setSearchResults([])
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() && isLoggedIn) {
      // Search бетине баруу же натыйжаларды көрсөтүү
      console.log('Searching for:', searchQuery)
      if (searchResults.length > 0) {
        navigate(searchResults[0].path)
      }
      setShowSearch(false)
      setSearchQuery('')
    }
  }

  const handleSearchResultClick = (path) => {
    if (isLoggedIn) {
      navigate(path)
      setShowSearch(false)
      setSearchQuery('')
      setSearchResults([])
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    
    const savedEmail = localStorage.getItem('userEmail')
    const savedPassword = localStorage.getItem('userPassword')
    const userDataStr = localStorage.getItem('userData')
    let savedName = ""
    
    if (userDataStr) {
      try {
        const userData = JSON.parse(userDataStr)
        savedName = userData.name
      } catch (error) {
        console.error("Error parsing user data:", error)
      }
    }
    
    if (email === savedEmail && password === savedPassword) {
      setUserName(savedName || email.split('@')[0])
      setIsLoggedIn(true)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('userName', savedName || email.split('@')[0])
      localStorage.setItem('isAuthorized', 'true')
      setShowAuthModal(false)
      setShowSearch(false)
      alert("✅ Login successful! Welcome back!")
      form.reset()
      window.location.reload()
    } else {
      alert("❌ Invalid email or password! Please register first.")
      setIsRegister(true)
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    
    if (!name || !email || !password) {
      alert("Please fill all fields!")
      return
    }
    
    if (password.length < 6) {
      alert("Password must be at least 6 characters!")
      return
    }
    
    const userData = {
      name,
      email,
      password,
      registeredAt: new Date().toISOString()
    }
    
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userPassword', password)
    
    setUserName(name)
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userName', name)
    localStorage.setItem('isAuthorized', 'true')
    setIsRegister(false)
    setShowAuthModal(false)
    
    alert("🎉 Registration successful! You can now use all features!")
    form.reset()
    window.location.reload()
  }

  const confirmLogout = () => {
    setIsLoggedIn(false)
    setUserName('')
    setShowLogoutModal(false)
    setShowSearch(false)
    setSearchQuery('')
    setSearchResults([])
    
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
    localStorage.removeItem('isAuthorized')
    
    alert("👋 Signed out successfully!")
    navigate('/login')
  }

  const cancelLogout = () => {
    setShowLogoutModal(false)
  }

  const handleNavigation = (path, e) => {
    e.preventDefault()
    if (!isLoggedIn && path !== '/login') {
      setShowAuthModal(true)
    } else {
      if (window.location.pathname === path) {
        window.scrollTo(0, 0)
      } else {
        navigate(path)
      }
    }
    setShowSearch(false)
    setSearchQuery('')
  }

  return (
    <>
      <div className="header1">
        <div className="header__logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={i1} className='logo' alt="NAKED Optics Logo" />
        </div>

        <div className="header2">
          <Link 
            className={`header__link ${isActive('/') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/', e)}
            style={{ cursor: 'pointer' }}
          >
            HOME
          </Link>
          <Link 
            className={`header__link ${isActive('/optics') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/optics', e)}
            style={{ cursor: 'pointer' }}
          >
            OPTICS
          </Link>
          <Link 
            className={`header__link ${isActive('/clothing') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/clothing', e)}
            style={{ cursor: 'pointer' }}
          >
            CLOTHING
          </Link>
          <Link 
            className={`header__link ${isActive('/heroes') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/heroes', e)}
            style={{ cursor: 'pointer' }}
          >
            NAKED HEROES
          </Link>
          <Link 
            className={`header__link ${isActive('/stories') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/stories', e)}
            style={{ cursor: 'pointer' }}
          >
            STORIES
          </Link>
        </div>

        <div className="header__icons">
          <div className="search-container">
            <span 
              className="header__icon1" 
              onClick={handleSearchClick}
              style={{ cursor: 'pointer' }}
            >
              <CiSearch />
            </span>
            
            {showSearch && (
              <div className="search-dropdown">
                <form onSubmit={handleSearchSubmit} className="search-form">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                    autoFocus
                  />
                  <button type="submit" className="search-submit">
                    <CiSearch />
                  </button>
                </form>
                
                {searchResults.length > 0 && (
                  <div className="search-results">
                    {searchResults.map(result => (
                      <div 
                        key={result.id} 
                        className="search-result-item"
                        onClick={() => handleSearchResultClick(result.path)}
                      >
                        <div className="result-name">{result.name}</div>
                        <div className="result-info">
                          <span className="result-category">{result.category}</span>
                          {result.price && <span className="result-price">{result.price}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {searchQuery && searchResults.length === 0 && (
                  <div className="no-results">No results found for "{searchQuery}"</div>
                )}
              </div>
            )}
          </div>
          
          <span 
            className="header__icon" 
            onClick={handleUserIconClick}
            style={{ cursor: 'pointer' }}
          >
            <FaRegUserCircle />
            {isLoggedIn && userName && (
              <span className="user-badge">{userName.charAt(0)}</span>
            )}
          </span>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="auth-modal-overlay" onClick={() => setShowAuthModal(false)}>
          <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{isRegister ? "Register" : "Sign In"}</h2>
            <form onSubmit={isRegister ? handleRegister : handleLogin}>
              {isRegister && (
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required 
                />
              )}
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                required 
              />
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                required 
                minLength={isRegister ? "6" : undefined}
              />
              <button type="submit" className="auth-submit-btn">
                {isRegister ? "Register" : "Sign In"}
              </button>
            </form>
            <div className="auth-switch">
              <span onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Already have an account? Sign In" : "Don't have an account? Register"}
              </span>
            </div>
            <button className="auth-close-btn" onClick={() => setShowAuthModal(false)}>
              ×
            </button>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="logout-modal-overlay" onClick={() => setShowLogoutModal(false)}>
          <div className="logout-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Sign Out</h3>
            <p>Are you sure you want to sign out?</p>
            <div className="logout-buttons">
              <button onClick={cancelLogout} className="logout-cancel">Cancel</button>
              <button onClick={confirmLogout} className="logout-confirm">Sign Out</button>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close search */}
      {showSearch && (
        <div className="search-overlay" onClick={() => setShowSearch(false)}></div>
      )}
    </>
  )
}

export default Prohed