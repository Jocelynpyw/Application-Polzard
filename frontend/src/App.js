import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
        

          
          <Header/>
          <Navbar/>
          <Carousel/>

         <main>   
              <Route path="/product/:id" component={ProductScreen}></Route>
              <Route path="/" component={HomeScreen} exact></Route>
          </main> 
            {/* <div className="container-fluid">
                  <div className="row" >
                    {

                      data.products.map((product)=>(

                        <SectionNouveaute product={product} key={product._id}/>
                  
                      ))
                    }
                 </div>  
           </div>   */}




    
 </BrowserRouter>
  );
}

export default App;
