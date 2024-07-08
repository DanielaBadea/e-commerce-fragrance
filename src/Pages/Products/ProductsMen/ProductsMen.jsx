import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectorProducts } from '../../../Redux/selectors';
import { fetchProducts } from '../../../Redux/operations';
import css from './ProductsMen.module.css';
import { Link } from 'react-router-dom';

const ProductsMen = () => {
    const dispatch = useDispatch();
    const productsMen = useSelector(selectorProducts);
    const isLoading =useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (!productsMen || isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {productsData.error}</div>;
    }
    if (!productsMen) {
        return <div>No products found.</div>;
    }

    const homeCategory = productsMen.filter(product => product.name === 'Men');
    if (homeCategory.length === 0) {
        return <div>No products found for the 'Home' category.</div>;
    }
    return (
        <>
        <div className={css.benner}>
           <span>Parmumuri pentru bărbați</span>
        </div>
        <div className={css.wrapper}>
            <div className={css.containerLeft}>
            <span>FilterBar</span>
            </div>
            <div className={css.containerRight}>
            {homeCategory.map((product) => (
                <div key={product.id} className={css.cart}>
                    <Link to={`/products/${product.id}`} className={css.link}>
                    <img src={product.image} alt={product.title} />
                    <h4>{product.brand}</h4>
                    <h3>{product.title}</h3>
                    <p><strong>Price:</strong> {product.price.toFixed(2)} RON</p>
                    <div className={css.addCard}>
                    <button type='button' className={css.button}>Adaugă în coș</button>
                </div>
                </Link>
                </div>
            ))}
            </div>
        </div>
        </>
    );
}

export default ProductsMen;
