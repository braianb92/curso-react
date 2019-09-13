import React from 'react';

class Contador extends React.Component
{
    render()
    {
        return(
            <>
            <button onClick={this.props.aumentarCont} >+</button>
            <button onClick={this.props.resetContador} >Reset</button>
            <button onClick={this.props.disminuirContador} >-</button>
            <p>{this.props.contador}</p>
            </>)
    }
}export default Contador