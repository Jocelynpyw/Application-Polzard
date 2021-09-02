import React from 'react'
import data from '../data' ;
import styled from 'styled-components'
import SectionNouveaute from '../Components/SectionNouveaute';
 function HomeScreen() {

    return (
         <div className="container-fluid">
                  <div className="row" >
                    {

                      data.products.map((product)=>(

                        <SectionNouveaute product={product} key={product._id}/>
                  
                      ))
                    }
                 </div>  
           </div>  
    )
}

export default HomeScreen;
    