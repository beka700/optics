// import { useState } from "react";
// import { FiShoppingCart, FiX, FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

// export default function CartDrawer() {
//   const [open, setOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([
//     { 
//       id: 1, 
//       name: "The FALCON", 
//       variant: "Black (pgl. - Cat. 4)", 
//       price: 79.99, 
//       quantity: 1,
//       imageColor: "bg-gray-800"
//     },
//     { 
//       id: 2, 
//       name: "FALCON Goggle-Upgrade", 
//       variant: "Black", 
//       price: 9.99, 
//       quantity: 1,
//       imageColor: "bg-gray-600"
//     }
//   ]);
//   const [frequentlyBought, setFrequentlyBought] = useState([
//     { id: 3, name: "The FALCON Lens", price: 29.99 }
//   ]);

//   const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//   const freeShippingThreshold = 150;
//   const currentTotal = total;
//   const missingAmount = Math.max(0, freeShippingThreshold - currentTotal);
//   const progressPercentage = Math.min(100, (currentTotal / freeShippingThreshold) * 100);

//   const updateQuantity = (id, change) => {
//     setCartItems(prev => prev.map(item => {
//       if (item.id === id) {
//         const newQuantity = Math.max(1, item.quantity + change);
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     }));
//   };

//   const removeItem = (id) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   const addFrequentlyBought = (id) => {
//     const product = frequentlyBought.find(item => item.id === id);
//     if (product) {
//       const existingItem = cartItems.find(item => item.name === product.name);
//       if (existingItem) {
//         updateQuantity(existingItem.id, 1);
//       } else {
//         setCartItems(prev => [...prev, {
//           id: Date.now(),
//           name: product.name,
//           variant: "",
//           price: product.price,
//           quantity: 1,
//           imageColor: "bg-gray-400"
//         }]);
//       }
//     }
//   };

//   return (
//     <>
//       <span className="header__icon cart-icon" onClick={() => setOpen(true)}>
//         <FiShoppingCart size={20} />
//         <span className="cart-count">{cartItems.length}</span>
//       </span>

//       {open && (
//         <div
//           className="cart-overlay"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       <div className={`cart-drawer ${open ? 'open' : ''}`}>
//         <div className="cart-header">
//           <h3>Your Cart ({cartItems.length})</h3>
//           <FiX onClick={() => setOpen(false)} style={{ cursor: 'pointer' }} />
//         </div>

//         <div className="shipping-progress">
//           <div className="shipping-text">
//             <span>Free shipping from {freeShippingThreshold}€</span>
//             <span className="shipping-missing">
//               ONLY {missingAmount.toFixed(2).replace('.', ',')} € MISSING FROM FREE SHIPPING!
//             </span>
//           </div>
//           <div className="progress-bar">
//             <div 
//               className="progress-fill"
//               style={{ width: `${progressPercentage}%` }}
//             />
//           </div>
//         </div>

//         <div className="cart-items-container">
//           {cartItems.map(item => (
//             <CartItem 
//               key={item.id}
//               item={item}
//               onUpdateQuantity={updateQuantity}
//               onRemove={removeItem}
//             />
//           ))}

//           <div className="frequently-bought">
//             <h3>Frequently purchased together</h3>
//             <div className="frequently-items">
//               {frequentlyBought.map(product => (
//                 <div key={product.id} className="frequently-item">
//                   <div className="frequently-item-info">
//                     <div className={`frequently-item-img ${product.imageColor || 'bg-gray-300'}`}></div>
//                     <div>
//                       <div className="frequently-item-name">{product.name}</div>
//                       <div className="frequently-item-price">{product.price.toFixed(2).replace('.', ',')} €</div>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={() => addFrequentlyBought(product.id)}
//                     className="add-to-cart-btn"
//                   >
//                     Add
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="cart-footer">
//           <div className="discount-note">
//             You'll be able to add your discount code during the checkout
//           </div>
//           <div className="total">
//             <span>Total</span>
//             <span>{total.toFixed(2).replace('.', ',')} €</span>
//           </div>
//           <button className="checkout-btn">Go to checkout</button>
//         </div>
//       </div>
//     </>
//   );
// }

// function CartItem({ item, onUpdateQuantity, onRemove }) {
//   return (
//     <div className="cart-item">
//       <div className={`cart-img ${item.imageColor}`}></div>
//       <div className="cart-info">
//         <div className="cart-title">
//           <span>{item.name}</span>
//           <FiTrash2 onClick={() => onRemove(item.id)} style={{ cursor: 'pointer' }} />
//         </div>
//         <p className="cart-variant">{item.variant}</p>
//         <div className="cart-bottom">
//           <div className="qty">
//             <FiMinus onClick={() => onUpdateQuantity(item.id, -1)} style={{ cursor: 'pointer' }} />
//             <span>{item.quantity}</span>
//             <FiPlus onClick={() => onUpdateQuantity(item.id, 1)} style={{ cursor: 'pointer' }} />
//           </div>
//           <span className="cart-price">{(item.price * item.quantity).toFixed(2).replace('.', ',')} €</span>
//         </div>
//       </div>
//     </div>
//   );
// }