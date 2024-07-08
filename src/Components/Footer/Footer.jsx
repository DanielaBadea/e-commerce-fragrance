import React from "react";
import css from './Footer.module.css'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { MdSmartphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
    return(
        <div className={css.wrapper}>
            <div className={css.gridWrapper}>
            <div className={css.descripStore}>
            <img src={logo} alt="Logo"/>
            <p className={css.description}>
            Fragrance este unul dintre cei mai importanți distribuitori de parfumuri de pe piață, oferind o mare varietate de parfumuri pentru bărbați și femei.
            Produsele noastre provin de la producători și furnizori de top, asigurând cea mai bună calitate posibilă a parfumurilor.
            </p>
            <div className={css.location}>
                <span>FRAGRANCE PARF DOC SRL</span>
                <span>RO70326518 - J55/161/2015</span>
                <span>Sediu social - Mun. Alexandria</span>
                <span>Str. Libertatii, nr. 22, ap. 4</span>
            </div>
            </div>
            

        <div className={css.info}>
            <h2>Informații utile</h2>
            <ul className={css.list}>
                <li>
                    <Link to="/terms-and-conditions">Termeni și condiții</Link>
                </li>
                <li>
                    <Link to="/confidentiality">Politica de confidențialitate</Link>
                </li>
                <li>
                    <Link to="/refunds-and-returns">Politică de rambursări și returnări</Link>
                </li>
            </ul>
            </div>

            <div className={css.info}>
                <h2>Contact</h2>
                <div className={css.containerContact}>
                <span><MdSmartphone className={css.icon}/></span>
                <span>+40 767 366 776</span>
                </div>
                <div className={css.containerContact}>
                <span><MdEmail className={css.icon}/></span>
                <span>comenzi@fragrance.ro</span>
                </div>
                <div className={css.socialMedia}>
                    <a href="https://www.facebook.com/?locale=ro_RO"><FaFacebook className={`${css.icon} ${css.styleSocial}`}/></a>
                    <a href="https://www.instagram.com/"><FaInstagram className={`${css.icon} ${css.styleSocial}`}/></a>
                    <a href="https://ro.pinterest.com/"><FaPinterest className={`${css.icon} ${css.styleSocial}`}/></a>
                </div>
            </div>
            </div>
            <div className={css.descriptionTerms}>
                    <p>După plasarea comenzii, parfumul va fi livrat în termen de 1-3 zile lucrătoare prin serviciul de curierat Cargus.
                        Ne asigurăm că produsele noastre ajung la tine în cel mai scurt timp posibil, pentru ca tu să te poți bucura de ele fără întârziere.</p>
                </div>

        <div className={css.copyright}>
            <div>
                <span>© 2024 FRAGRANCE. Toate drepturile rezervate.</span>
            </div>
        <div>
            <span>Made by Daniela Badea Web Design</span>
        </div>
        </div>
    </div>

    )
}
export default Footer;