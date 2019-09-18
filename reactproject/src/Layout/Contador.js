import React from 'react';
import {connect} from "react-redux";
import {aumentarContador,disminuirContador,resetearContador} from "../api/actions";
import {bindActionCreators} from "redux";

class Contador extends React.Component
{
    render()
    {
        let {contador, aumentarContador, disminuirContador, resetearContador} = this.props;
        return(
            <>
            <button  onClick={aumentarContador}>+</button>
            <button onClick={resetearContador}>Reset</button>
            <button onClick={disminuirContador} >-</button>
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
        aumentarContador : bindActionCreators(aumentarContador,dispatch),
        disminuirContador : bindActionCreators(disminuirContador,dispatch),
        resetearContador : bindActionCreators(resetearContador,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Contador);