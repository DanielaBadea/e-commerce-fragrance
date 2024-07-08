import React from "react";
import { selectorDropdown } from "../../Redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropdown } from "../../Redux/dropDownSlice";
import { NavLink, Link } from "react-router-dom";
import woman from '../../assets/woman.webp';
import men from '../../assets/men.webp';
import candles from '../../assets/candles.jpg'
import css from './Dropdown.module.css'

const Dropdown = () =>{
    const dispatch = useDispatch();
    const isDropdownOpen = useSelector(selectorDropdown);
    return(
        <div className={css.products} onMouseEnter={() => dispatch(toggleDropdown())} onMouseLeave={() => dispatch(toggleDropdown())}>
            <NavLink to="/products" className={css.linkNav}>Products</NavLink>
        <div className={isDropdownOpen ? `${css.dropdown} ${css.show}` : css.dropdown}>
            <div className={css.containerItems}>
                <div className={css.itemsFlex}>
                    <img src={woman} alt="Woman picture" className={css.img}/>
                    <Link to="/products/women" className={css.dropdownItem}>Parfumuri pentru femei</Link>
                    </div>
                    <div className={css.itemsFlex}>
                        <img src={men} alt="Men picture" className={css.img} />
                        <Link to="/products/men" className={css.dropdownItem}>Parfumuri pentru bărbați</Link>
                        </div>
                        <div className={css.itemsFlex}>
                            <img src={candles} alt="Candles picture" className={css.img} />
                            <Link to="/products/home" className={css.dropdownItem}>Home</Link>
                            </div>
                            </div>
                        </div>
                        </div>
    )
}

export default Dropdown;