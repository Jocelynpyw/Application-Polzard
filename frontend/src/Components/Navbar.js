import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    // window.addEventListener("scroll",()=>{
    //     var sidebar = document.querySelector('#sidebar')
    //     sidebar.classList.toggle("sticky",window.scrollY>-20);
    // })
    return (
        <Fragment>
          <div id="sidebar">
                <ul id="navbar">
                    <li className="navbar-item"> <Link to="/" data-content="Accueil">Accueil</Link ></li>
                    <li className="navbar-item"> <Link to="#!"data-content="Tendances">Tendances</Link ></li>
                    <li className="navbar-item"> <Link to="#!"data-content="Hommes">Hommes</Link ></li>
                    <li className="navbar-item"> <Link to="#!"data-content="Femmes">Femmes</Link ></li>
                    <li className="navbar-item"> <Link to="#!"data-content="Enfants">Enfants</Link ></li>
                    <li className="navbar-item"> <Link to="#!"data-content="Bebe">Bebe</Link ></li>
                    <li className="navbar-item"> <Link to="#!"data-content="Respo">Respo</Link ></li>
                    <li className="navbar-item"> <Link to="#!"data-content="Autres">Autres</Link ></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;
