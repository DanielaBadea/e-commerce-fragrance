import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectorProducts, selectorTotalProd } from '../../../Redux/selectors';
import { fetchProducts } from '../../../Redux/operations';
import css from './PageCategory.module.css';
import { useParams, useSearchParams } from 'react-router-dom';
import SliderPrice from '../../../Components/SliderPrice/SliderPrice';
import CategoryProducts from '../../../Components/CategoryProducts/CategoryProducts';
import FilterByCategory from '../../../Components/FilterByCategory/FilterByCategory';
import FilterByBrands from '../../../Components/FilterByBrands/FilterByBrands';
import DropdownPrice from '../../../Components/DropdownPrice/DropdownPrice';
import SearchForm from '../../../Components/SearchForm/SearchForm';
import ProductPage from '../GlobalProducts/ProductsPage';


const PageCategory = () => {
    const {categoryName } = useParams();
    const [searchParams] = useSearchParams();
    const brandName = searchParams.get('brandName');
    
    const dispatch = useDispatch();
    const products = useSelector(selectorProducts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const [sliderValues, setSliderValues] = useState([0, 2000]);
    const [sortOption, setSortOption] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const totalProd = useSelector(selectorTotalProd);

    useEffect(() => {
        console.log('Fetching products with', {
            categoryName,
            brandName,
            priceMin: sliderValues[0],
            priceMax: sliderValues[1],
            sortBy: sortOption,
            limit: productsPerPage,
            page: currentPage,
        });
        dispatch(fetchProducts({
            categoryName,
            brandName,
            priceMin: sliderValues[0],
            priceMax: sliderValues[1],
            sortBy: sortOption,
            limit: productsPerPage,
            page: currentPage,

        }));
    }, [dispatch, categoryName, brandName, sliderValues, sortOption, productsPerPage, currentPage]);

    const handleSliderChange = (values) => {
        setSliderValues(values);
    };

    const handleSortOption = (key) => {
        setSortOption(key);
    };
    // const handleLoadMore = () => {
    //     setCurrentPage(prevPage => prevPage + 1 )
    // };


    const getBennerCategory = () => {
        switch(categoryName){
            case 'women' :
                return css.bennerWomen;
                case 'men' : 
                return css.bennerMen;
                case 'home' :
                    return css.bennerHome;
                    default:
                    return css.bennerDefault
        }
    };

    // const getBennerBrand = () => {
    //     switch(brandName){
    //         case 'Chloé':
    //             return css.bennerCloe;
    //             case 'Yves Saint Laurent':
    //                 return css.bennerYSL;
    //                 case 'Burberry':
    //                 return css.bennerBurberry;
    //                 case 'Narciso Rodriguez':
    //                     return css.bennerNR;
    //                     case 'Kayali':
    //                         return css.bennerKayali;
    //                         case 'Dior':
    //                             return css.bennerDior;
    //                             case 'TOM FORD':
    //                                 return css.bennerTF;
    //                                 case 'Armani':
    //                                     return css.bennerArmani;
    //                                     case 'Jean Paul Gaultier':
    //                                         return css.bennerJPG;
    //                                         case 'Azzaro':
    //                                             return css.bennerAzzaro;
    //                                             case 'Prada':
    //                                                 return css.bennerPrada;
    //                                                 case 'Boss':
    //                                                     return css.bennerBoss;
    //                                                     case 'Givenchy':
    //                                                     return css.bennerGivenchy;
    //                                                     case 'Carolina Herrera':
    //                                                         return css.bennerCH;
    //                                                         case 'Rituals...':
    //                                                         return css.bennerRituals
    //                                                         default:
    //                                                             return css.bennerDefault;
    //     }
    // };
 
    return (
        <>
            <div className={`${css.benner} ${getBennerCategory()}`}>
                <span>{`Produse ${categoryName || brandName || 'toate'}`}</span>
            </div>
            <div className={css.container}>
                <div className={css.containerLeft}>
                    <div className={css.filtersContainer}>
                        <div className={css.searchFormContainer}>
                            <SearchForm products ={products}/>
                        </div>
                        <div className={css.filterCategoryContainer}>
                            <FilterByCategory />
                        </div>
                        <div className={css.filterBrandContainer}>
                            <FilterByBrands />
                        </div>
                        <div className={css.sliderContainer}>
                            <SliderPrice
                                sliderValues={sliderValues}
                                onSliderChange={handleSliderChange}
                            />
                        </div>
                        <DropdownPrice onSortOption={handleSortOption} />
                    </div>
                </div>
                <div className={css.categoryContainer}>
                    {isLoading ? <div>Loading...</div> : <CategoryProducts
                        products={products}
                        isLoading={isLoading}
                        error={error}
                        categoryName={categoryName}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalProd={totalProd}
                    />}
                </div>
            </div>
            </>
    );
};

export default PageCategory;
