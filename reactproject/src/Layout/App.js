import React, {Component} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Contador from "./Contador";

//En caso de querer retornar mas de un elemento, usar contenedor o un array 
//ya que solo se puede retornar una sola cosa utilizando funcion LAMBDA

// let App = ( ) =>
//     <div>
//         <p>Hola Mundo</p>
//         <p>Hola Mundo</p>
//     </div>

//No define key el array, tira warning.
// let App = ( ) =>
//     [<p>Hola Mundo</p>,<p>Hola Mundo</p>]

//Utilizar fragmento
// let App = ( ) =>
//      <>
//          <p>Hola Mundo</p>
//          <p>Hola Mundo</p>
//      </>

// export default App
//CommonJS
//module-exports = App

class App extends Component
{
    constructor()
    {
        super();
        this.state ={
            links : ["perfil","portfolio","contacto"],
            texto : "Lorem ipsum dolor sit amet",
            contador: 0
        }
        this.cambiarTexto = this.cambiarTexto.bind(this);
        this.aumentarContador = this.aumentarContador.bind(this);
    }

    cambiarTexto()
    {
        this.setState({texto: "Ipsum Lorem"});
    }

    aumentarContador()
    {
        this.setState({contador: this.state.contador+=1})
    }

    render()
    {
        //asdfa
        let {links,texto,contador} = this.state;
        return (
            <>
                <Header links={links}/>
                <p>{texto}</p>
                <button onClick={this.cambiarTexto}>Click!</button>
                <Contador contador={contador} />
                <Main/>
                <Footer/>
            </>
            ); 
        
    }
}export default App