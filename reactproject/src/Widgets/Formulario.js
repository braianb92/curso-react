import React, {Component} from 'react';


class Formulario extends Component{
    render(){
        let {toogleVisibility,visible,handleSubmit}=this.props;
        return(
            <div>
                
                {visible?
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nombre"/>
                        <button>Agregar!</button>
                    </form>
                : null}
                <button onClick={toogleVisibility}>
                    {visible ? "Ocultar" : "Mostrar"}
                </button>
            </div>
        )
    }
}export default Formulario