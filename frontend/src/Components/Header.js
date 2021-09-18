import React from 'react';
import '../Style/Header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Header() {
    const cart =useSelector(state=>state.cart);
    const {cartItems}= cart;
    return (
    // ce composant n'est pas du tout termine , mais je veux utiliser le panier pour la fin de la nouvelle fonctionnalite addToCart
     <div className ="container">
         <div className="row">
                <div class="header "> 
        <div id="bars"><i class="fas fa-bars fa-2x" style={{width: '40px', height:'40px'}}></i></div>

        <div id="logo" className="col-md-2" > <span>Pol</span>zard</div>
        <div class="search-box ">
            <div class="search-insite-box">
                <input type="text" placeholder="Que Voulez Vous ..."/>
                <img src="img/LOUPE-ICON.png" alt="rechercher un item"/>
                
            </div>
        </div>
        <div class="sign-in">
            <img src="img/connexion.png" alt="se connecter"/>
            <p>se connecter</p>
        </div>
        <div class="panier">
            <Link to="/cart" style={{textDecoration:'none'}}>            <img src="img/panier3.svg" alt=""/>

                    {
                        cartItems.length>0 && (
                        <span className="badge">{cartItems.length}</span>
                        )
                    }

                    <p >mon panier</p>
            </Link>

        </div>
        <div id="contact">
            <button class="btn-contact">Nous Contacter</button>

        </div>
    </div>
         </div>

     </div>

   
    
                
           
       
    )
}

export default Header



















