import React from 'react';
import '../Style/Header.css';



function Header() {
    return (
    
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
            <img src="img/panier3.svg" alt=""/>
            <p>mon panier</p>

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



















