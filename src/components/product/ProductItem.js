import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
    <Link to="/home/description" style={{height: '170px'}}>
      <img src={product.image} alt={product.name}/>
    </Link>
      <span>{product.name}</span>
    </div>
  );
};

export default ProductItem;