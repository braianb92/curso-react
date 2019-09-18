import React, {Component} from 'react';
import ListadoUsuarios from "./ListadoUsuarios";
import {connect} from "react-redux";
import {toogleVisibility,handleChange,handleSubmit} from "../api/actions";
import {bindActionCreators} from "redux";

class Formulario extends Component{
    render(){
        let {toogleVisibility,visible,handleSubmit,handleChange,
        nombre,apellido,usuarios}=this.props;
        return(
            <div>
                
                {visible?
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nombre" id="nombre" onChange={handleChange} value={nombre}/>
                        <input type="text" placeholder="Apellido" id="apellido" onChange={handleChange} value={apellido}/>
                        <button>Agregar!</button>
                    </form>
                : null}
                <button onClick={toogleVisibility}>
                    {visible ? "Ocultar" : "Mostrar"}
                </button>
                <ListadoUsuarios usuarios={usuarios}/>
            </div>
        )
    }
}
let mapStateToProps = store =>  {
    return {
        visible : store.visible,
        nombre : store.nombre,
        apellido : store.apellido
    }
};

let mapDispatchToProps = dispatch => {
    return{
        toogleVisibility : bindActionCreators(toogleVisibility,dispatch),
        handleChange : bindActionCreators(handleChange,dispatch),
        handleSubmit : bindActionCreators(handleSubmit,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Formulario)