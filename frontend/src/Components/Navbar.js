import React, { Fragment } from 'react'

function Navbar() {
    return (
        <Fragment>
          <div id="sidebar">
                <ul id="navbar">
                    <li className="navbar-item"> <a href="#!" data-content="Accueil">Accueil</a></li>
                    <li className="navbar-item"> <a href="#!"data-content="Mode">Mode</a></li>
                    <li className="navbar-item"> <a href="#!"data-content="Hommes">Hommes</a></li>
                    <li className="navbar-item"> <a href="#!"data-content="Femmes">Femmes</a></li>
                    <li className="navbar-item"> <a href="#!"data-content="Enfants">Enfants</a></li>
                    <li className="navbar-item"> <a href="#!"data-content="Bebe">Bebe</a></li>
                    <li className="navbar-item"> <a href="#!"data-content="Respo">Respo</a></li>
                    <li className="navbar-item"> <a href="#!"data-content="Autres">Autres</a></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;
