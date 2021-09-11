import React, { Fragment } from 'react';

function Autre (){
    return(
    <Fragment>
    <div id="nouveautes" style={{marginTop: '50px'}}>
          <p>Nous Proposons pour Vous</p>
          <a href="#!" style={{fontWeight: 'bold'}}>Parceque Vous Etes Unique!</a>
      </div> 
  
  
  
  
  
  
  
  
  
      <div id="swipper-nouveautes" >
          <div className="container-fluid">
              <div className="row">
                  <div className="article col-md-4 col-xs-6">
                      <div className="article-img">
                          <img src="img/pinterest/veste6.jpg" alt="Image d'un article"/>
                      </div>
                      <p className="article-name">Veste Bleu</p>
                      <p className="article-prix">12 000 Fcfa</p>
                      <div className="article-panier">
                          <img src="img/panier3.svg" alt="ajouter au panier"/>
                      </div>
      
                  </div>
      
                  <div className="article col-md-4 col-xs-6">
                    <div className="article-img">
                        <img src="img/pinterest/paire1.jpg" alt="Image d'un article"  style={{objectFit: 'contain'}}/>
                    </div>
                    <p className="article-name">Armanie Walk</p>
                    <p className="article-prix">90 000 Fcfa</p>
                    <div className="article-panier">
                        <img src="img/panier3.svg" alt="ajouter au panier"/>
                    </div>
      
                </div>
      
                <div className="article col-md-4 col-xs-6">
                    <div className="article-img">
                        <img src="img/pinterest/pan2.jpg" alt="Image d'un article"  style={{objectFit: 'contain'}}/>
                    </div>
                    <p className="article-name">Zentch scretch</p>
                    <p className="article-prix">7 500 Fcfa</p>
                    <div className="article-panier">
                        <img src="img/panier3.svg" alt="ajouter au panier"/>
                    </div>
      
                </div>
      
                <div className="article col-md-4 col-xs-6">
                    <div className="article-img">
                        <img src="img/2021-08-11_08-05-52-TSHIRTS-PSG-2j.jpg" alt="Image d'un article"  style={{objectFit:'contain'}}/>
                    </div>
                    <p className="article-name">TSHIRTS PSG</p>
                    <p className="article-prix">12 500 Fcfa</p>
                    <div className="article-panier">
                        <img src="img/panier3.svg" alt="ajouter au panier"/>
                    </div>
      
                </div>
      
                <div className="article col-md-4 col-xs-6" style={{position: 'relative' ,padding: 'normal'}}>
                    <div className="article-img">
                        <img src="img/pexels-pixabay-264547.jpg" alt="Image d'un article"/>
                    </div>
                    <p className="article-name">Decouvrez Plus</p>
                    <p className="article-prix">XX 000 Fcfa</p>
                    <div className="article-panier">
                        <img src="img/panier3.svg" alt="ajouter au panier"/>
                    </div>
      
                    <div className="article-cover">
                        <h1>Plus de Propositions 
                            
                            <i className="fas fa-chevron-right" style={{color: "00a0f0"}}></i>
                            <i className="fas fa-chevron-right"  style={{color: "00a0f0"}}></i>
                        </h1>
                    </div>
      
                </div>
              </div>
            
          </div>
      </div>




      <div className="container">
            <div className="row">
            <section id="market">
                <div className="col-md-6 market-img">
                    <img src="img/pinterest/cdecd0d1464e0adae448c10190a989c1.jpg" alt=""/>
                </div>
                <div className=" col-md-6 market-img">
                    <img src="img/pinterest/2017-10-19_09-34-25_boss.png" alt="" style={{objectFit: 'contain'}}/>
                </div>
            </section>
            <div id="nouveautes" >
                <p style={{transform: 'translate(30px,-20px)', color: 'blue', fontWeight: 'bold',fontFamily: 'roboto,sans-serif'}}>Shopping</p>
                <a href="#!" style={{fontWeight: 'bold',transform: 'translate(-30px,-20px)'}}>Layette</a>
            </div> 


        <div id="nouveautes" > 
            <p style={{fontWeight: 'bold', fontSize: '1.72rem'}}>Nos meilleures ventes</p>
            <a href="#!" style={{fontWeight: 'bold', visibility: 'hidden'}}>Layette</a>
        </div>

            </div>
      </div>






      </Fragment>
    )
}


export default Autre;