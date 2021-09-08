import React from 'react'

function Categories() {
    return (
    <>
     <div id="nouveautes"> 
        <p>Categories</p>
        <a href="#!" style={{fontWeight: 'bold'}} ></a>
    </div>


      <div id="categorie">
          <div className="container-categorie">
                <div className="container-fluid">
                    <div className="row">
                        <div className="categorie col-sm-12 col-xs-12">
                  
                            <div className="categorie-img">
                                  <img src="img/pexels-terje-sollie-298863.jpg" alt=""/>
            
                              </div>
                              <h1 className="categorie-title">Monsieur</h1>
                                  <ol className="categorie-list">
                                      <li className="categorie-list-item">Chemise</li>
                                      <li className="categorie-list-item">Super 100</li>
                                      <li className="categorie-list-item">jackette</li>
                                      <li className="categorie-list-item">Chaussure Monsieur</li>
            
                                  </ol>
                                  <p>Voir Tous les Sous ca . . .</p>
                              
                            </div>
        
                            <div className="categorie col-xs-6 col-md-4">
                          
                                <div className="categorie-img">
                                      <img src="img/2021-04-09_11-17-01-MMA-1site-A.jpg" alt=""/>
                
                                  </div>
                                  <h1 className="categorie-title">Ensemble</h1>
                                      <ol className="categorie-list">
                                          <li className="categorie-list-item">Survette</li>
                                          <li className="categorie-list-item">Jogging</li>
                                          <li className="categorie-list-item">Veste</li>
                                          <li className="categorie-list-item">salopette</li>
                
                                      </ol>
                                      <p>Voir Tous les Sous ca . . .</p>
                                  
                                </div>
        
        
                            <div className="categorie col-md-4 col-xs-6">
                          
                                <div className="categorie-img">
                                      <img src="img/pexels-melvin-buezo-2529148.jpg" alt=""/>
                
                                  </div>
                                  <h1 className="categorie-title">Chaussures</h1>
                                      <ol className="categorie-list">
                                          <li className="categorie-list-item">Marques</li>
                                          <li className="categorie-list-item">Tennis</li>
                                          <li className="categorie-list-item">Moquassin</li>
                                          <li className="categorie-list-item">Docksailds</li>
                
                                      </ol>
                                      <p>Voir Tous les Sous ca . . .</p>
                                  
                                </div>
                    </div>
                </div>

          </div>
      </div>

      </>
    )
}

export default Categories
