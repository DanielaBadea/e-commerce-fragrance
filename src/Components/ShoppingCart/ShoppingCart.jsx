import React from "react";
import css from './ShoppingCart.module.css';
import { FaShoppingCart } from "react-icons/fa";
import useModal from "../../hooks/useModal";
import ModalShoppingCart from "../ModalShoppingCart/ModalShoppingCart";
import { useSelector } from "react-redux";

const ShoppingCart =() => {
    const { isOpen, openModal, closeModal }=useModal();
    const totalQuanity = useSelector((state) => state.cart.cartTotalQuantity)
    return(
        <>
        <FaShoppingCart onClick={openModal}/><span className={css.counter}>{totalQuanity}</span>
        {isOpen && <ModalShoppingCart isOpen={isOpen} close={closeModal} />}
        </>
    )
}

export default ShoppingCart;