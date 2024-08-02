import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { products } from '../../data';
import Pagination from './Pagination';

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="productcontainer">
    <div className="product-grid">
      {currentProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
    <div>
    <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={products.length} 
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
    </div>
  );
};

export default ProductGrid;