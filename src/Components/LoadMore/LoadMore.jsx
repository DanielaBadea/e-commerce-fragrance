// LoadMoreButton.js
import React from 'react';
import css from './LoadMore.module.css';

const LoadMoreButton = ({ onClick}) => {
    // if (!isVisible) return null;

    return (
        <div className={css.containerLoad}>
            <button onClick={onClick} className={css.loadMoreButton}>Load More</button>
        </div>
    );
};

export default LoadMoreButton;
