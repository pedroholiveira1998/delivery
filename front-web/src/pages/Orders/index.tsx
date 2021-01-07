import './styles.css';
import StepsHeader from './../../components/StepsHeader/StepsHeader'
import ProductsList from './../../components/ProductsList/ProductsList'

function Orders() {
    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList/>
        </div>
    )
}

export default Orders;