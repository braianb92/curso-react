import React from 'react';
import {connect} from "react-redux";

class Contador extends React.Component
{
    render()
    {
        let {contador} = this.props;
        return(
            <>
            <button >+</button>
            <button >Reset</button>
            <button  >-</button>
            <p>{contador}</p>
            </>)
    }
}


let mapStateToProps = store =>  {
    return {
        contador : store.contador
    }
};

let mapDispatchToProps = dispatch => {
    return{
        aumentarContador : null,
        disminuirContador : null,
        resetearContador : null
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Contador);