import React from 'react';
import {connect} from "react-redux";
import store from '../api/store';

class Header extends React.Component
{
    render()
    {
        //Aca recibo lo que inyecte en el App siempre con "props"
        let {links} = this.props;
        return(
            <>
            <header>
                <h1>Header</h1>
                <nav>
                    {links.map(link => <a href="#" key={link}>{link}</a>)}
                </nav>
            </header>
            </>
        )
    }   
}

let mapStateToProps = store =>  {
    return {
        links : store.links
    }
}
//funcion
export default connect(mapStateToProps,null)(Header);