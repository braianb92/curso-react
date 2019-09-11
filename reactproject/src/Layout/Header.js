import React from 'react';

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
                    {links.map(link => <a href="#">{link}</a>)}
                </nav>
            </header>
            </>
        )
    }
}export default Header