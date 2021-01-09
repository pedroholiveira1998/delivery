import { useEffect, useState } from 'react';
import api from './../../services/api'
import { OrderLocationData, Product } from './types';
import StepsHeader from './../../components/StepsHeader/StepsHeader';
import ProductsList from './../../components/ProductsList/ProductsList';
import OrderLocation from './../../components/OrderLocation/OrderLocation';
import './styles.css';


function Orders() {

    const [products, setProducts] = useState <Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    useEffect(() => {
        api.get('/products').then((response) => {
            setProducts(response.data);
        }).catch(error => console.log(error));
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products = { products } />
            <OrderLocation onChangeLocation = { location => setOrderLocation(location) } />
        </div>
    )
};

export default Orders;