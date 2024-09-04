import React from "react";
import css from './CategoryProducts.module.css'
import { addToCart } from "../../Redux/cart/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoadMoreButton from "../LoadMore/LoadMore";
// import { Pagination } from "antd";
import PaginationProducts from "../Paginaton/Paginaton";
import { fetchAddToCart } from "../../Redux/cart/operations";



const CategoryProducts = ({ products, isLoading, error, categoryName, currentPage, setCurrentPage, totalProd }) => {
    const dispatch = useDispatch();

    const handleAddCart = (productId) => {
        dispatch(fetchAddToCart(productId));
    };


      if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!products || products.length === 0) {
        return <div>No products found for the '{categoryName}' category.</div>;
    }

    return(
        <div className={css.wrapper}>
            <p>Afisez toate cele {totalProd} rezultate</p>
            <div className={css.containerRight}>
        {products.products.map(product => (
            <div key={product._id} className={css.cart}>
                <Link to={`/products/${product._id}`} className={css.link}>
                    <img src={product.image} alt={product.title} />
                    <h4>{product.brand}</h4>
                    <h3>{product.title}</h3>
                    <p><strong>Price:</strong> {product.price.toFixed(2)} RON</p>
                </Link>
                <button type='button' className={css.button} onClick={() => handleAddCart(product._id)}>Adaugă în coș</button>
            </div>
        ))}
    </div>
    {/* <LoadMoreButton onClick={handleLoadMore} /> */}
    <PaginationProducts currentPage={currentPage} setCurrentPage = {setCurrentPage} totalProd={totalProd} />
        </div>
        
)
};

export default CategoryProducts;