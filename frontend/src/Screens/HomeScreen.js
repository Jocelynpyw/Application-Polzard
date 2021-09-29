import React, {  useEffect, Fragment } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SectionNouveaute from '../Components/SectionNouveaute';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import Autre from '../Components/Autre';
import {listProducts} from '../actions/productActions.js';
//      Importation du module de carousel
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import NousProposonsPourVous from '../Components/NousProposonsPourVous';




function HomeScreen() {
  
  const dispatch = useDispatch();
  const productList=useSelector ((state)=>state.productList);
  var {loading,error,products}= productList;

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch]);
var products1;
var  x;



// var products1=products.slice(2,6);



    return ( 
      <Fragment>
        
      <Carousel/>
                  <div className="container-fluid">
                      {
                    loading? (<LoadingBox></LoadingBox>):
                  error? (<MessageBox>{error}</MessageBox>):(
                    <div className="row" >
                       <OwlCarousel
                    // className="owl-theme"
                    items="5"
                    autoplay
                   
                    
                    loop

                  >
                    {
                    //  ici je suis entrain d'extrare de faco aleatoire le tableau products1 de 6 element pour l'afficher dans ma section carourel
                   
                      products1 = products.slice( x=Math.floor(Math.random()*10),x+10),
                      
                      products1.map((product)=>(

                        <SectionNouveaute product={product} key={product._id} className="item"/>
                  
                      ))
                    }
                    </OwlCarousel>
                </div>  
                  )
                  }
                            
                    </div>  

                    <Categories/>
                    <NousProposonsPourVous/>
                    <Autre/>

           </Fragment>
    )
}

export default HomeScreen;
    