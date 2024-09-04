import React, { useEffect, useState, useCallback } from "react";
import css from './SearchForm.module.css';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading, selectorProducts } from "../../Redux/selectors";
import { fetchProducts } from "../../Redux/operations";
import { useSearchParams } from "react-router-dom";
import debounce from 'lodash/debounce';

const SearchForm = ({products}) => {
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const brandName = searchParams.get('brandName');
    const [searchBrand, setSearchBrand] = useState(brandName || "");

    // Debounced function to fetch products
    const debouncedFetchProducts = useCallback(
        debounce((brand) => {
            dispatch(fetchProducts({ brandName: brand }));
        }, 300), // Adjust debounce delay as needed
        [dispatch]
    );

    useEffect(() => {
        if (searchBrand) {
            debouncedFetchProducts(searchBrand);
        }
    }, [searchBrand, debouncedFetchProducts]);

    const handleChange = (e) => {
        setSearchBrand(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ brandName: searchBrand });
        debouncedFetchProducts(searchBrand);
    };
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    placeholder="Cauta dupa brand"
                    value={searchBrand}
                    onChange={handleChange}
                    className={css.input}
                />
                <button type='submit' className={css.button}><CiSearch/></button>
            </form>
        </div>
    );
}

export default SearchForm;
