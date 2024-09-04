import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectError, selectIsLoading, selectorProducts} from '../../../Redux/selectors'
import { fetchProducts } from '../../../Redux/operations';
import SliderPrice from '../../../Components/SliderPrice/SliderPrice';
import Products from '../../../Components/Products/Products';
import css from './ProductsPage.module.css';
import FilterByCategory from '../../../Components/FilterByCategory/FilterByCategory';
import DropdownPrice from '../../../Components/DropdownPrice/DropdownPrice';

const ProductPage = () => {
  const dispatch = useDispatch();
  // const price = useSelector(selectorPrice);
  // const isLoading = useSelector(selectorPriceIsLoading);
  // const error = useSelector(selectorPriceError);

  const productsbyPrice = useSelector(selectorProducts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [sliderValues, setSliderValues] = useState([0, 2000]);
  const [sortOption, setSortOption] = useState('asc');

  useEffect(() => {
    dispatch(fetchProducts({
      priceMin: sliderValues[0],
      priceMax: sliderValues[1],
      sortBy: sortOption,
    }));
  }, [dispatch, sliderValues, sortOption]);

  const handleSliderChange = (values) => {
    setSliderValues(values);
  };

  const handleSortOption = (key) =>{
    setSortOption(key)
};
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={css.container}>
      <div className={css.containerLeft}>
                    <div className={css.filtersContainer}> 
                    <div className={css.filterCategoryContainer}>
                    <FilterByCategory/>
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
      <div className={css.productsContainer}>
        
        {isLoading ? <div>Loading...</div> : <Products products={productsbyPrice} />}
      </div>
    </div>
  );
};

export default ProductPage;
