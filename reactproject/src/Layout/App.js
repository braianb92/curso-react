import React, {Component} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Contador from "./Contador";
import Formulario from "../Widgets/Formulario";

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
            contador: 0,
            visible: true,
            nombre: "",
            apellido: "",
            usuarios: []
        }
        this.cambiarTexto = this.cambiarTexto.bind(this);
        this.aumentarContador = this.aumentarContador.bind(this);
        this.disminuirContador = this.disminuirContador.bind(this);
        this.resetContador = this.resetContador.bind(this);
        this.toogleVisibility=this.toogleVisibility.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit(e)
    {
        e.preventDefault();
        //1)Selectores
        //let nombre = document.querySelector("input").value;

        //2)Prop "ref"
        // <form onSubmit={e=>handleSubmit(this.ref.nombre.value)}>
        // <input ref="nombre"/>
        // </form>

        //3)Con target(referencia a quien dispara el evento)
        // let nombre = e.target[0].value;
        // console.dir(nombre);

        //4)EFICIENTE - Controlar el cambio del input y a cada
        //cambio de valor, guardarlo en el state de un padre. Usar
        //este valor para retroalimentar el mismo input.
       
        // let user = {[this.state.nombre]:this.state.apellido};
        // this.state.usuarios.push(user);
        // console.log(this.state.usuarios);

        this.setState({
            usuarios: [
                ...this.state.usuarios,
                {
                   nombre: this.state.nombre,
                    apellido: this.state.apellido
                }
            ],
            nombre: "",
            apellido: ""
        });
        
        
        

    }

    handleChange(e)
    {
        // let id = e.target.id;
        // let value = e.target.value;
        // let campo={};
        // campo[id]=value;
        //console.log (`${id} : ${value});
        //this.setState(campo)
        //console.log(campo);

        this.setState({[e.target.id]:e.target.value});
       
        
        
        
    }

    cambiarTexto()
    {
        this.setState({texto: "Ipsum Lorem"});
    }

    aumentarContador()
    {
        this.setState({contador: this.state.contador+1})
    }

    disminuirContador()
    {
        this.setState({contador: this.state.contador-1})
    }

    resetContador()
    {
        this.setState({contador: 0})
    }

    toogleVisibility()
    {
        this.setState({visible:!this.state.visible})
    }

    render()
    {   console.clear();
        console.table(this.state.usuarios);
        let {links,contador,visible,nombre,apellido,usuarios} = this.state;
        return (
            <>
                <Header links={links}/>
                <Contador contador={contador} aumentarCont={this.aumentarContador}
                disminuirContador={this.disminuirContador} resetContador={this.resetContador}/>
                <Formulario toogleVisibility={this.toogleVisibility} visible={visible} handleSubmit={this.handleSubmit}
                handleChange={this.handleChange} nombre={nombre} apellido={apellido} usuarios={usuarios}/>
                <Main/>
                <Footer/>
            </>
            ); 
        
    }
}export default App