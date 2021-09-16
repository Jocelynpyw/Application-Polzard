import React, {  useEffect, Fragment } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SectionNouveaute from '../Components/SectionNouveaute';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';
import Autre from '../Components/Autre';
import {listProducts} from '../actions/productActions.js';




function HomeScreen() {
  const dispatch = useDispatch();
  const productList=useSelector ((state)=>state.productList);
  const {loading,error,products}= productList;
  console.log(productList);

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch]);


    return ( 
      <Fragment>
        
      <Carousel/>
                  <div className="container-fluid">
                      {
                    loading? (<LoadingBox></LoadingBox>):
                  error? (<MessageBox>{error}</MessageBox>):(
                    <div className="row" >
                    {

                      products.map((product)=>(

                        <SectionNouveaute product={product} key={product._id}/>
                  
                      ))
                    }
                </div>  
                  )
                  }
                            
                    </div>  

                    <Categories/>
                    <Autre/>

           </Fragment>
    )
}

export default HomeScreen;
    