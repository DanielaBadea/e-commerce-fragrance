import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PriceFilter from '../PriceFilter/PriceFilter';
import css from './ProductList.module.css';
import { selectError, selectIsLoading, selectorFilterPrice, selectorProducts } from '../../Redux/selectors';
import { filterByPrice, setItems } from '../../Redux/filterSlice';
import { fetchProducts } from '../../Redux/operations';

const ProductsList = () => {
    const dispatch = useDispatch();
    const filteredProducts = useSelector(selectorFilterPrice);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProducts()).then(response => {
            dispatch(setItems(response.payload));
        });
    }, [dispatch]);

    const handleFilterChange = (minPrice, maxPrice) => {
        dispatch(filterByPrice({ minPrice, maxPrice }));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <PriceFilter onFilterChange={handleFilterChange} />
            <div className={css.productList}>
                {filteredProducts.map(product => (
                    <Link to={`/products/${product.id}`} className={css.link} key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p><strong>Price:</strong> {product.price.toFixed(2)} RON</p>
                        <div className={css.addCard}>
                            <button type='button' className={css.button}>Adaugă în coș</button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
