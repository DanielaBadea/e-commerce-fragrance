import React, { useEffect, useState } from 'react';
import css from './Products.module.css';
import { Link } from 'react-router-dom';
import { addToCart } from '../../Redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import LoadMoreButton from '../LoadMore/LoadMore';
import { fetchAddToCart } from '../../Redux/cart/operations';

const Products = ({ products }) => {
  const dispatch = useDispatch();
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  useEffect(() => {
    setVisibleProducts(products.slice(0, currentPage * productsPerPage));
  }, [products, currentPage]);

  const loadMoreProducts = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // const handleAddCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  // const handleAddCart = (product) => {
  //   dispatch(fetchAddToCart(product));
  // };
const handleAddCart = (productId)=> {
    console.log("Adding to cart:", productId);
    dispatch(fetchAddToCart(productId))
};

  if (!products.length) {
    return <div>No products found.</div>;
  }

  const productsLength = products.length

  return (
    <div className={css.wrapper}>
      <p>Afisez toate cele {productsPerPage} din {productsLength} rezultate</p>
      <div className={css.containerRight}>
        {visibleProducts.map((product) => (
          <div key={product._id} className={css.cart}>
            <Link to={`/products/${product._id}`} className={css.link}>
              <img src={product.image} alt={product.title} />
              <h4>{product.brand}</h4>
              <h3>{product.title}</h3>
              <p><strong>Price:</strong> {product.price.toFixed(2)} RON</p>
            </Link>
            <div className={css.addCard}>
              <button type='button' className={css.button} onClick={() => { handleAddCart(product._id)}}>Adaugă în coș</button>
            </div>
          </div>
        ))}
      </div>
      <LoadMoreButton
        onClick={loadMoreProducts}
        isVisible={visibleProducts.length < products.length}
      />
    </div>
  );
};

export default Products;
