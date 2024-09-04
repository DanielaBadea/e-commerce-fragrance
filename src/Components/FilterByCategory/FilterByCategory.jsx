import React from "react";
import css from './FilterByCategory.module.css'
import { useSelector } from "react-redux";
import { selectError} from "../../Redux/selectors";
import { Link } from "react-router-dom";

const FilterByCategory = () => {
    
    const error = useSelector(selectError);

    if (error) {
        return <div>Error: {error}</div>;
      }

    return(
        <div className={css.categoryLinksContainer}>
            <p> <hr className={css.lineVeritcal}/> Categorii </p>
              <div className={css.linksCategory}>
            <Link to='/products/category/women' className={css.link}>Parfumuri pentru femei</Link>
            <Link to='/products/category/men' className={css.link}>Parfumuri pentru bărbați</Link>
            <Link to='/products/category/home' className={css.link}>Home</Link>

        </div>
        </div>
    )
}

export default FilterByCategory;