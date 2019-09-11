import React from 'react';

class Contador extends React.Component
{
    render()
    {
        let {contador} = this.props;
        return(
            <>
            <button onClick={}>Aumentar Contador!</button>
            
            {contador}
            </>)
    }
}export default Contador