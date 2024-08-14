
//Banner
function Banner () {
    const title = "la maison jungle"
    return ( 
        <h1>{title.toUpperCase()}</h1>   
    )
}

//Cart 
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

// injection des composants dans le DOM
ReactDOM.render(<React.Fragment><Banner/><Cart/></React.Fragment>, document.getElementById("root"))