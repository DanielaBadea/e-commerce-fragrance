import React, { useState } from 'react';
import css from './PriceFilter.module.css';

const PriceFilter = ({ onFilterChange }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilterChange = () => {
        onFilterChange(minPrice, maxPrice);
    };

    return (
        <div className={css.priceFilter}>
            <input 
                type="number" 
                placeholder="Min Price" 
                value={minPrice} 
                onChange={(e) => setMinPrice(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Max Price" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(e.target.value)} 
            />
            <button onClick={handleFilterChange}>Filter</button>
        </div>
    );
};

export default PriceFilter;
