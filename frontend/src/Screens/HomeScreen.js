import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import SectionNouveaute from '../Components/SectionNouveaute';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Carousel from '../Components/Carousel';
import Categories from '../Components/Categories';


function HomeScreen() {
   const [products,setProducts]= useState([]);
   const [loading,setLoading]= useState(false)
   const [error,setError]= useState(false)

   useEffect(()=>{
     const fetchData = async ()=>{
       try{
           setLoading(true)
            const {data} = await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
       }catch(err){
          setError(err.message);
          setLoading(false);
       }
      

     };
     fetchData()
   },[]);

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

           </Fragment>
    )
}

export default HomeScreen;
    