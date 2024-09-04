import React from 'react';
import css from './ModalShoppingCart.module.css';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import shoppingCart from '../../assets/shopping-cart-add.svg';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotalAmount } from '../../Redux/cart/selectors';
import { fetchAddToCart, fetchDecrementQuantity, fetchDeleteItem } from '../../Redux/cart/operations';

const ModalShoppingCart = ({ close }) => {
    const products = useSelector(selectCartItems);
    console.log("Prod from card", products);
    const totalAmount = useSelector(selectCartTotalAmount);
    const hasProducts = products && products.length > 0;
    const dispatch = useDispatch();

    const handleDeleteProduct = (productId) => {
        dispatch(fetchDeleteItem(productId));
    }  

    const handleDecrement = (productId) => {
        dispatch(fetchDecrementQuantity(productId))
    };

   const handleIncrement = (product) => {
    console.log("Adding to cart:", product);
    dispatch(fetchAddToCart(product));
};

    return (
        <div className={css.overlay} onClick={close}>
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
                <div className={css.header}>
                    <button type='button' className={css.close} onClick={close}><IoMdClose /></button>
                </div>
                {hasProducts ? (
                    <>
                    <div className={css.content}>
                        {products.map((product) => (
                            <div key={product._id} className={css.addProd}>
                                <div className={css.infoProd}>
                                    <Link to ={`/products/${product.productId}`} onClick={close}>
                                    <img src={product.image} alt={product.title} />
                                    </Link>
                                    <Link to ={`/products/${product.productId}`} onClick={close}>
                                    <p>{product.brand}</p>
                                    <p>{product.title}</p>
                                    </Link>
                                </div>
                                <div className={css.quantity}>
                                    <div className={css.setQuanity}>
                                        <button type='button' onClick={() => handleDecrement(product.productId)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button type='button' onClick={() => handleIncrement(product.productId)}>+</button>
                                    </div>
                                    <span>Price: {product.price.toFixed(2)} RON</span>
                                </div>
                                <button type='button' className={css.deleteIcon} onClick={() => handleDeleteProduct(product.productId)}>
                                    <MdDelete className={css.svgDelete} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className={css.footer}>
                    <span>Total: {totalAmount.toFixed(2)} RON</span>
                </div>
                    </>
                    
                ) : (
                    <div className={css.infoCart}>
                         <img src = {shoppingCart} alt = "Icon shopping cart"/>
                         <p className={css.info}>Your shopping cart is empty!</p>
                    </div>
                   
                )}
            </div>
        </div>
    );
}

export default ModalShoppingCart;
