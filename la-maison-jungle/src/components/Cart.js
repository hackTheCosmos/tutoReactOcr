function Cart() {
    let monsteraPrice = 8
    let lierrePrice = 10
    let bouquetPrice = 15
    let cartTotal = monsteraPrice + lierrePrice + bouquetPrice
    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <li>monstera {monsteraPrice}€</li>
                <li>lierre {lierrePrice}€</li>
                <li>bouquet {bouquetPrice}€</li>
            </ul>
            <p>Total : {cartTotal}€</p>
        </div>
    )
}

export default Cart