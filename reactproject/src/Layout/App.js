import React, {Component} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
    render()
    {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
            ); 
        
    }
}export default App