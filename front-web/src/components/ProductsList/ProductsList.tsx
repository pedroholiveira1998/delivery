import { checkIsSelected } from '../../Helpers/Helpers';
import { Product } from '../../pages/Orders/types';
import ProductCard from './../ProductCard/ProductCard'


type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductList({ products, selectedProducts, onSelectProduct }:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                        onSelectProduct = { onSelectProduct }
                        isSelected = { checkIsSelected(selectedProducts, product) }     
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList;