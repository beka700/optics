import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import i1 from '../../assets/Logo.png'
import { CiSearch } from "react-icons/ci"
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa"
import { FiShoppingCart, FiX, FiTrash2, FiPlus, FiMinus, FiMail, FiCheck, FiAlertCircle, FiInfo } from "react-icons/fi"
import './pro-hed.css'

// Импорты изображений
import sun from "../../assets/sun1.webp"
import sun3 from "../../assets/sun2.webp"
import sun6 from "../../assets/sun3.webp"
import sun9 from "../../assets/sun4.webp"
import sun12 from "../../assets/sun5.webp"
import sun15 from "../../assets/sun6.webp"
import sun18 from "../../assets/sun7.webp"
import sport1 from "../../assets/sport1.webp"
import sport4 from "../../assets/sport2.webp"
import sport7 from "../../assets/sport3.webp"
import sport10 from "../../assets/sport4.webp"
import sport13 from "../../assets/sport5.webp"
import ski1 from "../../assets/ski1.webp"
import ski4 from "../../assets/ski2.webp"
import ski7 from "../../assets/ski3.webp"
import ski10 from "../../assets/ski444.webp"
import ski13 from "../../assets/ski5.webp"
import down1 from "../../assets/down1.webp"
import down4 from "../../assets/down2.webp"
import down7 from "../../assets/down3.webp"
import basic1 from "../../assets/basic1.webp"
import basic4 from "../../assets/basic2.webp"
import basic3 from "../../assets/basic3.webp"
import basic7 from "../../assets/basic4.webp"
import basic9 from "../../assets/basic5.webp"
import len1 from "../../assets/len1.webp"
import len2 from "../../assets/len2.webp"
import len3 from "../../assets/len3.webp"
import len4 from "../../assets/len4.webp"
import len5 from "../../assets/len5.webp"
import len6 from "../../assets/len6.webp"
import len7 from "../../assets/len7.webp"
import acs1 from "../../assets/acs1.webp"
import acs2 from "../../assets/acs2.webp"
import acs3 from "../../assets/acs3.webp"
import acs4 from "../../assets/acs4.webp"
import acs5 from "../../assets/acs5.webp"
import acs6 from "../../assets/acs6.webp"
import acs7 from "../../assets/acs7.webp"
import yellow1 from '../../assets/ski444.webp'
import lens1 from '../../assets/lenses.png'
import lens2 from '../../assets/lenses1.png'
import lens3 from '../../assets/lenses2.png'
import lens4 from '../../assets/lenses3.png'
import lens5 from '../../assets/lenses4.png'
import lens6 from '../../assets/lenses5.png'

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
  const [formErrors, setFormErrors] = useState({})
  const [authError, setAuthError] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [animatingItem, setAnimatingItem] = useState(null)
  const [animationPosition, setAnimationPosition] = useState({ x: 0, y: 0 })
  const cartIconRef = useRef(null)

  const productImages = {
    "slush": sun,
    "whoop": sun3,
    "slush-pro": sun6,
    "luna": sun9,
    "iris": sun12,
    "muse": sun15,
    "icon": sun18,
    
    "rush-half": sport1,
    "rush-full": sport4,
    "charge-full": sport7,
    "rush-photochromatic": sport10,
    "hawk": sport13,
    "falcon": sport1,
    
    "mtb-pro": basic1,
    "road-elite": basic4,
    "trail-master": basic3,
    "urban-rider": basic7,
    "gravel-explorer": basic9,
    
    "alpine-pro": ski1,
    "freeride-elite": ski4,
    "slalom-race": ski7,
    "powder-master": ski10,
    "backcountry-x": ski13,
    
    "dh-extreme": down1,
    "enduro-pro": down4,
    "xc-light": down7,
    
    "polarized-pro": len1,
    "photochromatic": len2,
    "mirror-coated": len3,
    "blue-light-filter": len4,
    "night-vision": len5,
    "anti-fog": len6,
    "clear-lens": len7,
    "falcon-lens-1": lens1,
    "falcon-lens-2": lens2,
    "falcon-lens-3": lens3,
    "falcon-lens-4": lens4,
    "falcon-lens-5": lens5,
    "falcon-lens-6": lens6,
    
    "premium-case": acs1,
    "lens-cleaner": acs2,
    "strap-set": acs3,
    "nose-pads": acs4,
    "temple-tips": acs5,
    "carrying-bag": acs6,
    "microfiber-cloth": acs7,
    
    "default": yellow1,
  };

  const mockProducts = [
    { id: "slush", name: "The SLUSH", category: "optics", price: "79,99 €", path: '/optics', type: "Sunglasses", image: sun },
    { id: "whoop", name: "The WHOOP", category: "optics", price: "69,99 €", path: '/optics', type: "Sunglasses", image: sun3 },
    { id: "slush-pro", name: "The SLUSH Pro", category: "optics", price: "89,99 €", path: '/optics', type: "Sunglasses", image: sun6 },
    { id: "luna", name: "The Luna", category: "optics", price: "74,99 €", path: '/optics', type: "Sunglasses", image: sun9 },
    { id: "iris", name: "The Iris", category: "optics", price: "82,99 €", path: '/optics', type: "Sunglasses", image: sun12 },
    { id: "muse", name: "The MUSE", category: "optics", price: "76,99 €", path: '/optics', type: "Sunglasses", image: sun15 },
    { id: "icon", name: "The Icon", category: "optics", price: "94,99 €", path: '/optics', type: "Sunglasses", image: sun18 },
    { id: "rush-half", name: "Rush Half Frame", category: "optics", price: "64,99 €", path: '/optics', type: "Sport", image: sport1 },
    { id: "rush-full", name: "Rush Full Frame", category: "optics", price: "69,99 €", path: '/optics', type: "Sport", image: sport4 },
    { id: "charge-full", name: "Charge Full Frame", category: "optics", price: "72,99 €", path: '/optics', type: "Sport", image: sport7 },
    { id: "rush-photochromatic", name: "Rush Half Frame Photochromatic", category: "optics", price: "79,99 €", path: '/optics', type: "Sport", image: sport10 },
    { id: "hawk", name: "The Hawk", category: "optics", price: "84,99 €", path: '/optics', type: "Sport", image: sport13 },
    { id: "falcon", name: "The Falcon", category: "optics", price: "89,99 €", path: '/optics', type: "Sport", image: sport1 },
    { id: "alpine-pro", name: "Alpine Pro", category: "optics", price: "129,99 €", path: '/optics', type: "Ski", image: ski1 },
    { id: "freeride-elite", name: "Freeride Elite", category: "optics", price: "139,99 €", path: '/optics', type: "Ski", image: ski4 },
    { id: "slalom-race", name: "Slalom Race", category: "optics", price: "149,99 €", path: '/optics', type: "Ski", image: ski7 },
    { id: "powder-master", name: "Powder Master", category: "optics", price: "134,99 €", path: '/optics', type: "Ski", image: ski10 },
    { id: "backcountry-x", name: "Backcountry X", category: "optics", price: "159,99 €", path: '/optics', type: "Ski", image: ski13 },
    { id: "dh-extreme", name: "DH Extreme", category: "optics", price: "119,99 €", path: '/optics', type: "MTB", image: down1 },
    { id: "enduro-pro", name: "Enduro Pro", category: "optics", price: "109,99 €", path: '/optics', type: "MTB", image: down4 },
    { id: "xc-light", name: "XC Light", category: "optics", price: "99,99 €", path: '/optics', type: "MTB", image: down7 },
    { id: "mtb-pro", name: "MTB Pro", category: "optics", price: "75,99 €", path: '/optics', type: "Cycling", image: basic1 },
    { id: "road-elite", name: "Road Elite", category: "optics", price: "69,99 €", path: '/optics', type: "Cycling", image: basic4 },
    { id: "trail-master", name: "Trail Master", category: "optics", price: "72,99 €", path: '/optics', type: "Cycling", image: basic3 },
    { id: "urban-rider", name: "Urban Rider", category: "optics", price: "65,99 €", path: '/optics', type: "Cycling", image: basic7 },
    { id: "gravel-explorer", name: "Gravel Explorer", category: "optics", price: "79,99 €", path: '/optics', type: "Cycling", image: basic9 },
    { id: "polarized-pro", name: "Polarized PRO", category: "optics", price: "49,99 €", path: '/optics', type: "Lenses", image: len1 },
    { id: "photochromatic", name: "Photochromatic", category: "optics", price: "59,99 €", path: '/optics', type: "Lenses", image: len2 },
    { id: "mirror-coated", name: "Mirror Coated", category: "optics", price: "44,99 €", path: '/optics', type: "Lenses", image: len3 },
    { id: "blue-light-filter", name: "Blue Light Filter", category: "optics", price: "34,99 €", path: '/optics', type: "Lenses", image: len4 },
    { id: "night-vision", name: "Night Vision", category: "optics", price: "39,99 €", path: '/optics', type: "Lenses", image: len5 },
    { id: "anti-fog", name: "Anti-Fog", category: "optics", price: "27,99 €", path: '/optics', type: "Lenses", image: len6 },
    { id: "clear-lens", name: "Clear Lens", category: "optics", price: "27,99 €", path: '/optics', type: "Lenses", image: len7 },
    { id: "falcon-lens-1", name: "The FALCON Lens", category: "optics", price: "29,99 €", path: '/optics', type: "Lenses", image: lens1 },
    { id: "premium-case", name: "Premium Case", category: "optics", price: "29,99 €", path: '/optics', type: "Accessories", image: acs1 },
    { id: "lens-cleaner", name: "Lens Cleaner", category: "optics", price: "14,99 €", path: '/optics', type: "Accessories", image: acs2 },
    { id: "strap-set", name: "Strap Set", category: "optics", price: "19,99 €", path: '/optics', type: "Accessories", image: acs3 },
    { id: "nose-pads", name: "Nose Pads", category: "optics", price: "9,99 €", path: '/optics', type: "Accessories", image: acs4 },
    { id: "temple-tips", name: "Temple Tips", category: "optics", price: "7,99 €", path: '/optics', type: "Accessories", image: acs5 },
    { id: "carrying-bag", name: "Carrying Bag", category: "optics", price: "5,99 €", path: '/optics', type: "Accessories", image: acs6 },
    { id: "microfiber-cloth", name: "Microfiber Cloth", category: "optics", price: "4,99 €", path: '/optics', type: "Accessories", image: acs7 },
    { id: "default", name: "THE TROOP EVO", category: "optics", price: "79,99 €", path: '/optics', type: "Sport", image: yellow1 },
  ];

  const [frequentlyBought] = useState([
    { 
      id: 1, 
      name: "The FALCON Lens", 
      price: 29.99,
      image: lens1
    }
  ]);

  // Функция для показа тоастов
  const showToast = (message, type = 'success', duration = 3000) => {
    // Удаляем существующие тоасты
    const existingToasts = document.querySelectorAll('.toast-notification');
    existingToasts.forEach(toast => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 300);
    });

    // Создаем элемент тоаста
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    
    // Выбираем иконку в зависимости от типа
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
    
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-content">${message}</div>
      <button class="toast-close">×</button>
      <div class="toast-progress">
        <div class="toast-progress-bar" style="animation-duration: ${duration}ms"></div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    // Добавляем обработчик закрытия
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 300);
    });
    
    // Показываем тоаст
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Автоматически скрываем через указанное время
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, duration);
    
    return toast;
  };

  // Глобальное хранилище для корзины
  window.globalCart = {
    addItem: (product, quantity) => {
      const cart = JSON.parse(localStorage.getItem('nakedOpticsCart') || '[]');
      const existingItem = cart.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          image: product.image || productImages[product.id] || yellow1
        });
      }
      
      localStorage.setItem('nakedOpticsCart', JSON.stringify(cart));
      updateCartCount(cart);
      loadCartFromStorage();
      return true;
    }
  };

  const updateCartCount = (cart) => {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    document.title = totalCount > 0 ? `(${totalCount}) NAKED Optics` : 'NAKED Optics'
  }

  useEffect(() => {
    checkLoginStatus()
    loadCartFromStorage()
    
    // Обработчик глобальных событий
    const handleAddToCart = (event) => {
      if (event.detail) {
        const { productData, quantity } = event.detail;
        if (productData) {
          addToCartDirect(productData, quantity);
        }
      }
    };
    
    // Обработчик открытия корзины
    const handleOpenCart = () => {
      setShowCart(true);
    };
    
    window.addEventListener('add-to-cart', handleAddToCart);
    window.addEventListener('open-cart', handleOpenCart);
    document.addEventListener('add-to-cart', handleAddToCart);
    
    return () => {
      window.removeEventListener('add-to-cart', handleAddToCart);
      window.removeEventListener('open-cart', handleOpenCart);
      document.removeEventListener('add-to-cart', handleAddToCart);
    };
  }, [])

  useEffect(() => {
    updateCartCount(cartItems)
  }, [cartItems])

  const checkLoginStatus = () => {
    const saved = localStorage.getItem('isLoggedIn')
    const user = localStorage.getItem('userName')
    
    if (saved === 'true') {
      setIsLoggedIn(true)
      if (user) {
        setUserName(user)
      }
    }
  }

  const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('nakedOpticsCart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCartItems(parsedCart)
      } catch (error) {
        console.error("Error parsing cart items:", error)
        setCartItems([])
      }
    }
  }

  const validateForm = () => {
    const errors = {}
    
    if (isRegister && !document.querySelector('input[name="name"]')?.value.trim()) {
      errors.name = 'Fill in the name field'
    }
    
    if (!document.querySelector('input[name="email"]')?.value.trim()) {
      errors.email = 'Fill in the email field'
    } else if (!/\S+@\S+\.\S+/.test(document.querySelector('input[name="email"]').value)) {
      errors.email = 'Invalid email format'
    }
    
    if (!document.querySelector('input[name="password"]')?.value.trim()) {
      errors.password = 'Fill in the password field'
    } else if (document.querySelector('input[name="password"]').value.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    
    if (isRegister && document.querySelector('input[name="password"]')?.value !== document.querySelector('input[name="confirmPassword"]')?.value) {
      errors.confirmPassword = 'Passwords do not match'
    }
    
    return errors
  }

  const handleNavigation = (path, e) => {
    e.preventDefault()
    if (!isLoggedIn && path !== '/login') {
      setShowAuthModal(true)
    } else {
      navigate(path)
      window.scrollTo(0, 0)
    }
    setShowSearch(false)
    setSearchQuery('')
    setShowCart(false)
    setIsMobileMenuOpen(false)
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
    setShowCart(false)
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
    setShowCart(false)
  }

  const handleCartClick = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true)
      setAuthError('Please login to view your cart')
      showToast('Please login to view your cart', 'error')
      return
    }
    
    setShowCart(!showCart)
    setShowSearch(false)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      setAuthError('Fill in the search field')
      showToast('Please enter search query', 'info')
      return
    }
    
    if (!isLoggedIn) {
      setShowAuthModal(true)
      return
    }
    
    if (searchResults.length > 0) {
      navigate(`/product/${searchResults[0].id}`)
    }
    setShowSearch(false)
    setSearchQuery('')
    setAuthError('')
  }

  const handleSearchResultClick = (productId) => {
    if (isLoggedIn) {
      navigate(`/product/${productId}`)
      setShowSearch(false)
      setSearchQuery('')
      setSearchResults([])
    }
  }

  const addToCartDirect = (product, quantity = 1) => {
    const productId = product.id || 'unknown';
    const productName = product.name || "Unknown Product";
    
    // Преобразуем цену
    let productPrice = 0;
    if (typeof product.price === 'number') {
      productPrice = product.price;
    } else if (typeof product.price === 'string') {
      productPrice = parseFloat(product.price.replace(',', '.').replace(' €', '')) || 0;
    }
    
    // Получаем изображение
    let productImage = product.image || productImages[productId] || yellow1;
    
    const cart = JSON.parse(localStorage.getItem('nakedOpticsCart') || '[]');
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: quantity,
        image: productImage
      });
    }
    
    localStorage.setItem('nakedOpticsCart', JSON.stringify(cart));
    setCartItems(cart);
    updateCartCount(cart);
    
    // Показываем toast уведомление
    showToast(`${quantity} ${productName} added to cart!`, 'success');
    
    // Открываем корзину через 500мс
    setTimeout(() => {
      setShowCart(true);
    }, 500);
    
    return true;
  };

  const updateQuantity = (id, change) => {
    const cart = JSON.parse(localStorage.getItem('nakedOpticsCart') || '[]');
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    localStorage.setItem('nakedOpticsCart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    updateCartCount(updatedCart);
  }

  const removeItem = (id) => {
    const cart = JSON.parse(localStorage.getItem('nakedOpticsCart') || '[]');
    const itemToRemove = cart.find(item => item.id === id);
    
    if (itemToRemove) {
      const updatedCart = cart.filter(item => item.id !== id);
      localStorage.setItem('nakedOpticsCart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      updateCartCount(updatedCart);
      showToast(`${itemToRemove.name} removed from cart`, 'info');
    }
  }

  const addFrequentlyBought = (id) => {
    const product = frequentlyBought.find(item => item.id === id);
    if (product) {
      addToCartDirect(product, 1);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const freeShippingThreshold = 150;
  const missingAmount = Math.max(0, freeShippingThreshold - total);
  const progressPercentage = Math.min(100, (total / freeShippingThreshold) * 100);

  const handleOrderNow = () => {
    if (cartItems.length === 0) {
      showToast('Your cart is empty. Add items before ordering.', 'error');
      return;
    }
    
    const orderId = `NO-${Date.now().toString().slice(-8)}`;
    const orderDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Показываем тоаст с деталями заказа
    showToast(
      `✅ ORDER CONFIRMED!\n\nOrder ID: ${orderId}\nDate: ${orderDate}\nTotal: ${total.toFixed(2)}€\n\nThank you for shopping with NAKED Optics!`,
      'success',
      5000
    );
    
    // Сохраняем заказ в историю
    const savedOrders = JSON.parse(localStorage.getItem('nakedOpticsOrders') || '[]');
    savedOrders.push({
      orderId: orderId,
      date: new Date().toISOString(),
      items: cartItems,
      total: total.toFixed(2)
    });
    localStorage.setItem('nakedOpticsOrders', JSON.stringify(savedOrders));
    
    setCartItems([]);
    localStorage.removeItem('nakedOpticsCart');
    updateCartCount([]);
    setShowCart(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setAuthError('');
    
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    const userDataStr = localStorage.getItem('userData');
    let savedName = "";
    
    if (userDataStr) {
      try {
        const userData = JSON.parse(userDataStr);
        savedName = userData.name;
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
    
    if (email === savedEmail && password === savedPassword) {
      setUserName(savedName || email.split('@')[0]);
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', savedName || email.split('@')[0]);
      localStorage.setItem('isAuthorized', 'true');
      setShowAuthModal(false);
      showToast('Login successful! Welcome back!', 'success');
      window.location.reload();
    } else {
      setAuthError('Invalid email or password! Please register first.');
      showToast('Invalid email or password! Please register first.', 'error');
      setIsRegister(true);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setAuthError('');
    
    const userData = {
      name,
      email,
      password,
      registeredAt: new Date().toISOString()
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
    localStorage.setItem('isAuthorized', 'true');
    
    setUserName(name);
    setIsLoggedIn(true);
    setIsRegister(false);
    setShowAuthModal(false);
    
    showToast('Registration successful! You can now use all features!', 'success');
    window.location.reload();
  };

  const confirmLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setShowLogoutModal(false);
    
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    localStorage.removeItem('isAuthorized');
    
    showToast('Signed out successfully!', 'info');
    navigate('/');
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = mockProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.type.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8);

    setSearchResults(filteredResults);
  }, [searchQuery]);

  return (
    <>
      <div className="header1">
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="header__logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={i1} className='logo' alt="NAKED Optics Logo" />
        </div>

        <nav className="header2">
          <Link 
            className={`header__link ${isActive('/') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/', e)}
          >
            HOME
          </Link>
          <Link 
            className={`header__link ${isActive('/optics') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/optics', e)}
          >
            OPTICS
          </Link>
          <Link 
            className={`header__link ${isActive('/clothing') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/clothing', e)}
          >
            CLOTHING
          </Link>
          <Link 
            className={`header__link ${isActive('/heroes') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/heroes', e)}
          >
            NAKED HEROES
          </Link>
          <Link 
            className={`header__link ${isActive('/stories') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/stories', e)}
          >
            STORIES
          </Link>
        </nav>

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
                    name="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                    autoFocus
                    required
                  />
                  <button type="submit" className="search-submit">
                    <CiSearch />
                  </button>
                </form>
                
                {authError && (
                  <div className="search-error-message">
                    {authError}
                  </div>
                )}
                
                {searchResults.length > 0 && (
                  <div className="search-results">
                    <div className="search-results-header">
                      <span className="results-count">{searchResults.length} results found</span>
                    </div>
                    {searchResults.map(result => (
                      <div 
                        key={result.id} 
                        className="search-result-item"
                        onClick={() => handleSearchResultClick(result.id)}
                      >
                        <div className="result-image">
                          <img src={result.image} alt={result.name} loading="lazy" />
                        </div>
                        <div className="result-details">
                          <div className="result-name">{result.name}</div>
                          <div className="result-info">
                            <span className="result-category">{result.category}</span>
                            <span className="result-type">{result.type}</span>
                            <span className="result-price">{result.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {searchQuery && searchResults.length === 0 && !authError && (
                  <div className="no-results">
                    <div>No results found for "{searchQuery}"</div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="cart-container" style={{ position: 'relative' }}>
            <span 
              ref={cartIconRef}
              className="header__icon cart-icon" 
              onClick={handleCartClick}
              style={{ cursor: 'pointer' }}
            >
              <FiShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="cart-count">{totalCartItems}</span>
              )}
            </span>
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

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <img src={i1} className="mobile-logo" alt="NAKED Optics" />
          <FaTimes className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        
        <div className="mobile-menu-user">
          {isLoggedIn ? (
            <div className="mobile-user-info">
              <FaRegUserCircle size={32} />
              <div>
                <div className="mobile-user-name">{userName}</div>
                <div className="mobile-user-status">Signed in</div>
              </div>
            </div>
          ) : (
            <button 
              className="mobile-login-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setShowAuthModal(true);
              }}
            >
              <FaRegUserCircle />
              Sign In / Register
            </button>
          )}
        </div>
        
        <nav className="mobile-menu-links">
          <Link 
            className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/', e)}
          >
            HOME
          </Link>
          <Link 
            className={`mobile-menu-link ${isActive('/optics') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/optics', e)}
          >
            OPTICS
          </Link>
          <Link 
            className={`mobile-menu-link ${isActive('/clothing') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/clothing', e)}
          >
            CLOTHING
          </Link>
          <Link 
            className={`mobile-menu-link ${isActive('/heroes') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/heroes', e)}
          >
            NAKED HEROES
          </Link>
          <Link 
            className={`mobile-menu-link ${isActive('/stories') ? 'active' : ''}`}
            onClick={(e) => handleNavigation('/stories', e)}
          >
            STORIES
          </Link>
        </nav>
        
        {isLoggedIn && (
          <div className="mobile-menu-footer">
            <button 
              className="mobile-logout-btn"
              onClick={() => setShowLogoutModal(true)}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>

      {/* Корзина */}
      {showCart && isLoggedIn && (
        <>
          <div className="cart-overlay" onClick={() => setShowCart(false)} />
          <div className="cart-drawer open">
            <div className="cart-header">
              <h3>Your Cart ({totalCartItems} items)</h3>
              <FiX onClick={() => setShowCart(false)} style={{ cursor: 'pointer' }} size={24} />
            </div>

            <div className="shipping-progress">
              <div className="shipping-text">
                <span>Free shipping from {freeShippingThreshold}€</span>
                <span className="shipping-missing">
                  ONLY {missingAmount.toFixed(2).replace('.', ',')} € MISSING FROM FREE SHIPPING!
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="cart-items-container">
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-img">
                        {item.image ? (
                          <img src={item.image} alt={item.name} loading="lazy" />
                        ) : (
                          <div className="cart-img-placeholder bg-gray-300" />
                        )}
                      </div>
                      <div className="cart-info">
                        <div className="cart-title">
                          <span>{item.name}</span>
                          <FiTrash2 
                            onClick={() => removeItem(item.id)} 
                            style={{ cursor: 'pointer', color: '#ff4444' }} 
                            title="Remove item"
                            size={18}
                          />
                        </div>
                        <div className="cart-bottom">
                          <div className="qty">
                            <FiMinus 
                              onClick={() => updateQuantity(item.id, -1)} 
                              style={{ cursor: 'pointer' }} 
                              title="Decrease quantity"
                              size={16}
                            />
                            <span>{item.quantity}</span>
                            <FiPlus 
                              onClick={() => updateQuantity(item.id, 1)} 
                              style={{ cursor: 'pointer' }} 
                              title="Increase quantity"
                              size={16}
                            />
                          </div>
                          <span className="cart-price">{(item.price * item.quantity).toFixed(2).replace('.', ',')} €</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="frequently-bought">
                    <h3>Frequently purchased together</h3>
                    <div className="frequently-items">
                      {frequentlyBought.map(product => (
                        <div key={product.id} className="frequently-item">
                          <div className="frequently-item-info">
                            <div className="frequently-item-img">
                              <img src={product.image} alt={product.name} loading="lazy" />
                            </div>
                            <div>
                              <div className="frequently-item-name">{product.name}</div>
                              <div className="frequently-item-price">{product.price.toFixed(2).replace('.', ',')} €</div>
                            </div>
                          </div>
                          <button 
                            onClick={() => addFrequentlyBought(product.id)}
                            className="add-to-cart-btn-small"
                          >
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                  <button className="continue-shopping-btn" onClick={() => setShowCart(false)}>
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="discount-note">
                  You'll be able to add your discount code during the checkout
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>{total.toFixed(2).replace('.', ',')} €</span>
                </div>
                <button 
                  className="order-now-btn"
                  onClick={handleOrderNow}
                >
                  <FiMail style={{ marginRight: '8px' }} />
                  Place Order
                </button>
                <button className="checkout-btn">Go to checkout</button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Авторизация */}
      {showAuthModal && (
        <div className="auth-modal-overlay" onClick={() => setShowAuthModal(false)}>
          <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{isRegister ? "Register" : "Sign In"}</h2>
            
            {authError && (
              <div className="auth-error-message">
                {authError}
              </div>
            )}
            
            <form onSubmit={isRegister ? handleRegister : handleLogin}>
              {isRegister && (
                <div className="auth-form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required 
                  />
                  {formErrors.name && <div className="field-error">{formErrors.name}</div>}
                </div>
              )}
              
              <div className="auth-form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required 
                />
                {formErrors.email && <div className="field-error">{formErrors.email}</div>}
              </div>
              
              <div className="auth-form-group">
                <input 
                  type="password" 
                  name="password"
                  placeholder="Password" 
                    required 
                    minLength={isRegister ? "6" : undefined}
                  />
                  {formErrors.password && <div className="field-error">{formErrors.password}</div>}
                </div>
                
                {isRegister && (
                  <div className="auth-form-group">
                    <input 
                      type="password" 
                      name="confirmPassword"
                      placeholder="Confirm Password" 
                      required 
                    />
                    {formErrors.confirmPassword && <div className="field-error">{formErrors.confirmPassword}</div>}
                  </div>
                )}
                
                <button type="submit" className="auth-submit-btn">
                  {isRegister ? "Register" : "Sign In"}
                </button>
              </form>
              <div className="auth-switch">
                <span onClick={() => {
                  setIsRegister(!isRegister)
                  setFormErrors({})
                  setAuthError('')
                }}>
                  {isRegister ? "Already have an account? Sign In" : "Don't have an account? Register"}
                </span>
              </div>
              <button className="auth-close-btn" onClick={() => {
                setShowAuthModal(false)
                setFormErrors({})
                setAuthError('')
              }}>
                ×
              </button>
            </div>
          </div>
        )}
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
      </>
    )
  }

export default Prohed