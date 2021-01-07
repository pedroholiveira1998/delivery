import { Link } from "react-router-dom";
import  main  from './../../assets/images/main.svg'
import './styles.css'

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br/> que entregamos <br/> pra você!!!
                    </h1>
                    <h3 className="home-subtitle">
                        Escolha o seu pedido e em poucos minutos <br/> levaremoss na sua porta
                    </h3>
                    <Link className="home-btn-order" to={{pathname: "/orders"}}>
                        FAZER PEDIDO
                    </Link>
                </div>
                <div className="home-image">
                    <img src={ main } alt="main"></img>
                </div>
            </div>
        </div>
    )
}

export default Home;