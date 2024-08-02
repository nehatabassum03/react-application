import "./product.css"
import ProductGrid from "./ProductGrid"

export default function Product() {
  return (
    <div class="productcontainer">
        <div class="featureddiv">
            <span>Featured Product</span>
        </div>
        <div class="featuredproducts">
            <ProductGrid/>
        </div>
    </div>
  )
}
