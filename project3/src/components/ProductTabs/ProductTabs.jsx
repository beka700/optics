import React, { useState } from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import LensesPage from '../LensesPage/LensesPage';
import GoggleAccessories from '../GoggleAccessories/GoggleAccessories';
import OtherProducts from '../OtherProducts/OtherProducts';
import './ProductTabs.css';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'lenses', label: 'Lenses (6)' },
    { id: 'accessories', label: 'Google Accessories (4)' },
    { id: 'other', label: 'Other Products (6)' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <ProductDescription />;
      case 'lenses':
        return <LensesPage />;
      case 'accessories':
        return <GoggleAccessories />;
      case 'other':
        return <OtherProducts />;
      default:
        return <ProductDescription />;
    }
  };

  return (
    <div className="product-tabs-container">
      <div className="product-tabs-header">
        <div className="tabs-wrapper">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="product-tabs-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;