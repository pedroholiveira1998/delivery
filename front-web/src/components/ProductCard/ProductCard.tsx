function ProductCard() {
    return (
        <div className="order-card-container">
            <h3 className="order-card-title">
                Pizza
            </h3>
            <img className="order-card-image" src="https://raw.githubusercontent.com/devsuperior/sds2/master/assets/pizza_bacon.jpg" alt="order-card-image"></img>
            <h3 className="order-card-price">
                R$ 35,90
            </h3>
            <div className="order-card description">
                <h3>Descrição</h3>
                <p>
                    Descrição Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
                </p>
            </div>
        </div>
    )
}

export default ProductCard;