import React, { useState } from "react";
import css from './NavBar.module.css';
import logo from '../../assets/logo1.png';
import { Link, NavLink } from "react-router-dom";
import { IoPersonAdd } from "react-icons/io5";
// import woman from "../../assets/woman.webp";
// import men from "../../assets/men.webp";
// import candles from "../../assets/candles.jpg"
import Dropdown from "../Dropdown/Dropdown";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const NavBar = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const handleDropdownToggle = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    // const handleDropdownClose = () => {
    //     setIsDropdownOpen(false);
    // };
    return (
        <div className={css.wrapperNav}>
            <div className={css.navigation}>
                <Link to='/'><img src={logo} alt="Logo"/></Link>
                <ul className={css.linksCenter}>
                    <li>
                        <NavLink to="/" className={css.linkNav}>Home</NavLink>
                    </li>
                    <li> <Dropdown/>
                    {/* <li className={css.products} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownClose}>
                        <NavLink to="/products" className={css.linkNav}>Products</NavLink> */}
                        {/* <div className={isDropdownOpen ? `${css.dropdown} ${css.show}` : css.dropdown}>
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
                        </div> */}
                    </li>
                    <li>
                        <NavLink to="/about" className={css.linkNav}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={css.linkNav}>Contacts</NavLink>
                    </li>
                </ul>
                <div className={css.linksEnd}>
                    <NavLink to="/login" className={css.linkNav}><IoPersonAdd/></NavLink>
                    <span to="/cart" className={`${css.linkNav} ${css.iconCart}`}><ShoppingCart/></span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
