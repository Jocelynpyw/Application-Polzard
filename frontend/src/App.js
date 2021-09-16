import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CategorieScreen from './Screens/CategorieScreen';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
        
          
          <Header/>
          <Navbar/>
          
         

         <main>   
              <Route path="/product/:id" component={ProductScreen} ></Route>
              <Route path="/" component={HomeScreen} exact></Route>
              <Route path="/categorie/:id" component={CategorieScreen}></Route>
          </main> 

          
      
          <Footer/>
 </BrowserRouter>
 
  );
}

export default App;
