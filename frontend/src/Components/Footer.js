import React from 'react'

function Footer(){
    return(
            
<footer>
    <div className="container-footer-item">
        <div className="footer-item">
            <h1>A PROPOS DE POLZARD</h1>
            <p>A propos de nous</p>
            <p>Politique de confidentialité</p>
            <p>Nous contacter</p>
        </div> 
    
        <div className="footer-item">
            <h1>ACHETER CHEZ POLZARD</h1>
            <p>Etat de nos articles</p>
            <p>Mode de livraison</p>
            <p>Politique de retour</p>
        </div>
    
        <div className="footer-item">
            <h1>MODE DE PAIEMENT</h1>
            <p>Paiement à la livraison</p>
            <p>Paiement mobile</p>
            <p>Autres</p>
        </div>
    
        <div className="footer-item">
            <h1>PLUS D'INFORMATIONS</h1>
            <p>Service Client</p>
            <p>Mails</p>
           
        </div>
    </div>
    <div className="footer-search">
        <h1>INSCRIVEZ VOUS A LA NEWLETTER </h1>
        <div className="input-box-footer">
            <input type="text" className="footer-search-input"/><div className="spane"><p>Enregistrer</p></div>

        </div>
       <div className="container-fluid">
            <div className="row " >
            <div className="menu-link">
            <img src="img/pinterest/icon-facebook.svg" alt=""/>
            <img src="img/pinterest/icon-instagram.svg" alt=""/>
            <img src="img/pinterest/icon-twitter.svg" alt=""/>
            <img src="img/pinterest/icon-youtube.svg" alt=""/>

        </div>
            </div>
       </div>

        <p> 2021 polzard.com - &copy Tous droits Réservés</p>
    </div>
</footer>
    )
}

export default Footer;