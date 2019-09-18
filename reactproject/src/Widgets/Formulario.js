import React, {Component} from 'react';
import ListadoUsuarios from "./ListadoUsuarios";


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
}export default Formulario