import React from 'react';
import SectionNouveaute from './SectionNouveaute';
import '../Style/NousProposonsPourVous.css'

function NousProposonsPourVous(){

    return(
     <>
        <div id="nouveautes" style={{marginTop: '50px'}}>
        <p>Vos Marques du Moment</p>
        <a href="#!" style={{fontWeight: 'bold'}}>Retrouver plus . . .</a>
    </div> 
    <br/>
    <br/>
    <br/>
    
    <div className="container color" >
            <div className="row">
                    <div className="col-md-4 list-marque">
                        <div className="row"  >
                            <div className="list-marque-items">
                                        <div className="col-md-12 items">
                                        <img src="../../img/gucci.png" alt=""></img>
                                    </div>
                                    <div className="col-md-12 items">
                                    <img src="../../img/nike.png" alt=""></img>

                                    </div>
                                    <div className="col-md-12 items">
                                    <img src="../../img/amiri.png" alt=""></img>

                                    </div>
                                    <div className="col-md-12 items">
                                    <img src="../../img/vortex.png" alt=""></img>

                                    </div>
                            </div>
                           
                        </div>
                    </div>
                            
                                <div className="col-md-4 small">
                                    <img src="../../img/unkunt.png" alt="image de " className="image1"></img>
                                    <img src="../../img/tommy.png" alt="image de " className="image2"></img>
                                    <img src="../../img/puma.jpg" alt="image de " className="image3"></img>
                                </div>
                                <div className="col-md-4 small">
                                    <img src="../../img/moschino.png" alt="image de " className="image1"></img>
                                    <img src="../../img/offer.jpg" alt="image de " className="image2"></img>
                                    <img src="../../img/essentielle.png" alt="image de " className="image3"></img>
                                </div>
                                <div className="col-md-4 small">
                                    <img src="../../img/adidas.png" alt="image de "  className="image1"></img>
                                    <img src="../../img/dior.png" alt="image de " className="image2"></img>
                                    <img src="../../img/telechargement.png" alt="image de " className="image3"></img>
                                </div>
                                
                            {/* <SectionNouveaute/>
                            <SectionNouveaute/> */}
                    

            </div>
    </div>
</>
    
    )
}

export default NousProposonsPourVous;