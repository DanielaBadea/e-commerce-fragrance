import React from "react";
import css from './FilterByBrands.module.css';
import { Link } from "react-router-dom";

const FilterByBrands = () => {
    return (
        <div className={css.brandLinksContainer}>
            <p><hr className={css.lineVertical} /> Branduri </p>
            <div className={css.linksBrand}>
                <Link to='/products?brandName=Chloé' className={css.link}>Chloé</Link>
                <Link to='/products?brandName=Yves Saint Laurent' className={css.link}>Yves Saint Laurent</Link>
                <Link to='/products?brandName=Burberry' className={css.link}>Burberry</Link>
                <Link to='/products?brandName=Narciso Rodriguez' className={css.link}>Narciso Rodriguez</Link>
                <Link to='/products?brandName=Kayali' className={css.link}>Kayali</Link>
                <Link to='/products?brandName=Dior' className={css.link}>Dior</Link>
                <Link to='/products?brandName=TOM FORD' className={css.link}>TOM FORD</Link>
                <Link to='/products?brandName=Jean Paul Gaultier' className={css.link}>Jean Paul Gaultier</Link>
                <Link to='/products?brandName=Azzaro' className={css.link}>Azzaro</Link>
                <Link to='/products?brandName=Prada' className={css.link}>Prada</Link>
                <Link to='/products?brandName=Boss' className={css.link}>Boss</Link>
                <Link to='/products?brandName=Givenchy' className={css.link}>Givenchy</Link>
                <Link to='/products?brandName=Carolina Herrera' className={css.link}>Carolina Herrera</Link>
                <Link to='/products?brandName=Rituals...' className={css.link}>Rituals...</Link>
            </div>
        </div>
    );
}

export default FilterByBrands;