import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectorProducts } from '../../../Redux/selectors';
import { fetchProducts } from '../../../Redux/operations';
import css from './Products.module.css';
import { Link } from 'react-router-dom';
import ProductsList from '../../../Components/ProductList/ProductList';
import LoadMoreButton from '../../../Components/LoadMore/LoadMore';
import { addToCart } from '../../../Redux/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectorProducts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (data) {
            setVisibleProducts(data.slice(0, currentPage * productsPerPage));
        }
    }, [data, currentPage]);

    const loadMoreProducts = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handleAddCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!data.length) {
        return <div>No products found.</div>;
    }

    return (
        <div className={css.wrapper}>
            <div className={css.containerLeft}>
                <span>FilterBar</span>
                {/* <ProductsList/> */}
            </div>
            <div className={css.wrapperRight}>
            <div className={css.containerRight}>
                {visibleProducts.map((product) => (
                    <div key={product.id} className={css.cart}>
                        <Link to={`/products/${product.id}`} className={css.link}>
                            <img src={product.image} alt={product.title} />
                            <h4>{product.brand}</h4>
                            <h3>{product.title}</h3>
                            <p><strong>Price:</strong> {product.price.toFixed(2)} RON</p>
                        </Link>
                        <div className={css.addCard}>
                            <button type='button' className={css.button} onClick={() => handleAddCart(product)}>Adaugă în coș</button>
                        </div>
                    </div>
                ))}
               
            </div>
            <LoadMoreButton
                onClick={loadMoreProducts}
                isVisible={visibleProducts.length < data.length}
            />
            </div>
        </div>
    );
}

export default Products;
