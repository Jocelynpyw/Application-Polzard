import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import data from './data';

function App() {
  return (
    <div className="App">

      
      <Header/>
      <Navbar/>
      <Carousel/>

              <div id="nouveautes">
                  <p>Nouveautes</p>
                  <a href="#!">Toutes les Nouveautes > ></a>
              </div>

        <div className="container-fluid">
              <div className="row" >
                {
                  
                  data.products.map((product,index)=>(
                    <div className="article col-md-2 col-xs-6" key={index}>
                    <div className="article-img">
                        <img src={product.image} alt="Image d'un article"/>
                    </div>
                    <p className="article-name">{product.name} </p>
                    <p className="article-prix">{product.price}</p>
                    <div className="article-panier">
                        <img src="img/panier3.svg" alt="ajouter au panier"/>
                    </div>
  
                </div>
                  ))
                }



             </div>

       </div>               
 </div>
  );
}

export default App;
