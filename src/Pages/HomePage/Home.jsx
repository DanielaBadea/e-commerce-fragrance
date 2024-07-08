import React, { useState, useEffect } from 'react';
import css from './Home.module.css';
import Hero from '../../Components/Hero/Hero';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectorProducts } from '../../Redux/selectors';
import { fetchProducts } from '../../Redux/operations';
import armani from '../../assets/Armani_benner.webp';
import azzaro from '../../assets/azzaro_benner.jpg';
import boss from '../../assets/boss_benner.webp';
import burberry from '../../assets/BURBERRY_benner.avif';
import carolina_hr from '../../assets/Carolina_HR_banner.webp';
import chloe from '../../assets/Chloe_benner.png';
import dior from '../../assets/Dior_benner.webp';
import giv from '../../assets/GIV_banner.avif';
import jean_paul from '../../assets/jean_paul_gauliter_benner.jpg';
import kayali from '../../assets/kayali_benner.webp';
import narciso_rodriguez from '../../assets/narcisorodriguez_benner.jpg';
import prada from '../../assets/Prada_benner.jpg';
import rituals from '../../assets/rituals_benner.jpg';
import tom_ford from '../../assets/TomFord_benner.webp';
import ysl from '../../assets/YSL_benner.avif';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(selectorProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productsState || productsState.length === 0) {
    return <div>No products found.</div>;
  }

  const groupedByBrand = productsState.reduce((group, product) => {
    const { brand } = product;
    if (!group[brand]) {
        group[brand] = [];
    }
    group[brand].push(product);
    return group;
  }, {});

  const brandBanners = {
    "Chloé": chloe,
    "Yves Saint Laurent": ysl,
    "Burberry": burberry,
    "Narciso Rodriguez": narciso_rodriguez,
    "Kayali": kayali,
    "Dior": dior,
    "TOM FORD": tom_ford,
    "Armani": armani,
    "Jean Paul Gaultier": jean_paul,
    "Azzaro": azzaro,
    "Prada": prada,
    "Boss": boss,
    "Givenchy": giv,
    "Carolina Herrera": carolina_hr,
    "Rituals...": rituals,
  };

  console.log(groupedByBrand);

  return (
    <>
      <Hero />
      <div className={css.container}>
        {Object.entries(groupedByBrand).map(([brand, products]) => (
          <div key={brand} className={`${css.brandSection} ${css.brandSectionWithBanner}`}>
            {brandBanners[brand] && <img src={brandBanners[brand]} alt={`${brand} banner`} className={css.bannerImage} />}
            <div className={css.producsList}>
            {products.map(product => (
                <div key={product.id} className={css.productItem}>
                  <Link to={`/products/${product.id}`} className={css.link}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.types}</p>
                  <p><strong>Price:</strong> {product.price.toFixed(2)} RON</p>
                  </Link>
                </div>
              ))}
            </div>
            </div>
        ))}
      </div>
    </>
  );
}

export default Home;
