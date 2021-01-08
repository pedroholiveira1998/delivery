import { useEffect, useState } from 'react';
import api from './../../services/api'
import { Product } from './types';
import StepsHeader from './../../components/StepsHeader/StepsHeader'
import ProductsList from './../../components/ProductsList/ProductsList'
import './styles.css';


function Orders() {

    const [products, setProducts] = useState <Product[]>([]);
    
    useEffect(() => {
        api.get('/products').then((response) => {
            setProducts(response.data);
        }).catch(error => console.log(error));
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products = { products } />
        </div>
    )
};

export default Orders;