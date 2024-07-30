// "composant fonction" React (nom commence obligatoireemnt par une lettre majuscule). Fonction qui retourne un élément React. Avant les composants React était des classes mais ce n'est plus le cas aujourd'hui
function MyComponent() {
    return <div>Mon 1er composant</div>
}

//composant Header
const Header = () => {
    return <h1>La maison jungle</h1>
}

// injection d'un composant dans le DOM
ReactDOM.render(<Header/>, document.getElementById("root"))