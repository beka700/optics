import "./filter.css";
import { useState, useEffect } from "react";

export default function FilterPanel({ onClose, onApplyFilters, onResetFilters, initialFilters = {} }) {
  const [filters, setFilters] = useState({
    size: [],
    system: [],
    features: []
  });

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const newCategory = prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value];
      
      return { ...prev, [category]: newCategory };
    });
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  const handleReset = () => {
    setFilters({
      size: [],
      system: [],
      features: []
    });
    onResetFilters();
  };

  return (
    <div className="filter-overlay">
      <div className="filter-panel">
        <div className="filter-head">
          <h3>Filter & Sort</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="filter-section">
          <h4>Size</h4>
          <div className="filter-options">
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.size.includes("S")}
                onChange={() => handleCheckboxChange("size", "S")}
              /> 
              Size S
            </label>
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.size.includes("M")}
                onChange={() => handleCheckboxChange("size", "M")}
              /> 
              Size M
            </label>
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.size.includes("L")}
                onChange={() => handleCheckboxChange("size", "L")}
              /> 
              Size L
            </label>
          </div>
        </div>

        <div className="filter-section">
          <h4>Glass replacement system</h4>
          <div className="filter-options">
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.system.includes("SnapTech")}
                onChange={() => handleCheckboxChange("system", "SnapTech")}
              /> 
              SnapTech magnet system [2]
            </label>
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.system.includes("Pin Plugin")}
                onChange={() => handleCheckboxChange("system", "Pin Plugin")}
              /> 
              Pin Plugin System [1]
            </label>
          </div>
        </div>

        <div className="filter-section">
          <h4>Features</h4>
          <div className="filter-options">
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.features.includes("Anti-Fog")}
                onChange={() => handleCheckboxChange("features", "Anti-Fog")}
              /> 
              Anti-Fog [2]
            </label>
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.features.includes("Super Anti-Fog")}
                onChange={() => handleCheckboxChange("features", "Super Anti-Fog")}
              /> 
              Super Anti-Fog [2]
            </label>
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.features.includes("Lenslock System")}
                onChange={() => handleCheckboxChange("features", "Lenslock System")}
              /> 
              Lenslock System [2]
            </label>
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={filters.features.includes("Interchangeable Straps")}
                onChange={() => handleCheckboxChange("features", "Interchangeable Straps")}
              /> 
              Interchangeable Straps [2]
            </label>
          </div>
        </div>

        <div className="filter-actions">
          <button className="apply-btn" onClick={handleApply}>
            Apply filters
          </button>
          <button className="reset-btn" onClick={handleReset}>
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}