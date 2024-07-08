import React from "react";
import css from './Hero.module.css'

const Hero = () => {
    return(
        <div className={css.background}>
           <p className={css.description}>Explorați magia parfumurilor care îmbracă fiecare moment într-o aură distinctivă. 
           La <span className={css.brandName}>Fragrance</span>, ne mândrim cu o selecție excepțională de parfumuri pentru femei,
            bărbați și accente parfumate pentru casă, aducând o armonie subtilă între natură și lux.</p>
        </div>
    )
}

export default Hero;