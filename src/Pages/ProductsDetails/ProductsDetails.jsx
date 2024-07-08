import React, { useEffect } from 'react';
import css from './ProductsDetails.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {fetchProductsDetails } from '../../Redux/operations';
import { selectorProductsDetails, selectIsLoading, selectError } from '../../Redux/selectors';
import { addToCart } from '../../Redux/cartSlice';

const ProductsDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector(selectorProductsDetails);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProductsDetails(productId));
    }, [dispatch, productId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!productDetails) {
        return <div>No product found.</div>;
    }

    const isHomeCategory = productDetails.name === 'Home';
    const isOtherCategory = productDetails.name === 'Women' || productDetails.name === 'Men';

    const handleAddCard = () => {
        if (productDetails && productDetails.id) {
            dispatch(addToCart(productDetails));
        } else {
            console.error("Invalid product data");
        }
    };
    return (
        <div className={css.wrapper}>
            <div className={css.containerProd}>
                <div>
                    <img src={productDetails.image} alt={productDetails.title} className={css.img} />
                </div>
                <div className={css.containerRight}>
                    <div className={css.wrappRightTop}>
                        <div>
                             <h3>{productDetails.brand}</h3>
                            <h2 className={css.title}>{productDetails.title}</h2>
                            
                        </div>
                        <div className={css.descrProd}>
                            <p>{productDetails.short_description}</p>
                            {isHomeCategory ? (
                                <>
                                    <p><span>Cantitate:</span>{productDetails.can_in_g} g</p>
                                    <p><span>Material:</span>{productDetails.material}</p>
                                </>
                            ) : isOtherCategory ? (
                                <p><span>Cantitate:</span>{productDetails.can_in_ml} ml</p>
                            ) : null}
                            <p><span>Note olfactive:</span>{productDetails.olfactory_note}</p>
                        </div>
                    </div>
                    <div className={css.shopProd}>
                        <p><span>Preț:</span>{productDetails.price.toFixed(2)} RON</p>
                        <button type='button' className={css.button} onClick={handleAddCard}>Adaugă în coș</button>
                    </div>
                </div>
            </div>
            <div className={css.containerLongDescr}>
                <h2>Descriere</h2>
                <p className={css.longDescr}>{productDetails.long_description}</p>
            </div>
        </div>
    );
};

export default ProductsDetails;
