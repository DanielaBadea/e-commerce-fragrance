import React from 'react';
import { Pagination } from 'antd';

const PaginationProducts = ({currentPage, setCurrentPage,totalProd}) => {
return(
    <>
    
    <Pagination align="center" 
    // defaultCurrent={1}
    current ={currentPage}
    onChange = {value => setCurrentPage(value)}
     total={totalProd} 
     />
  </>

)};
export default PaginationProducts;