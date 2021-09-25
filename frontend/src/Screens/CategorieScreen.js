import React, { Fragment } from 'react';
import dataCategorie from '../Data/CategorieData';
import '../Style/CategorieScreen.css';


function  CategorieScreen (props){
   
    const data= dataCategorie.categorie.find((x)=>x._id===props.match.params.id);
    if(!data){
        return<div>Categorie Not Found</div>
    }
    
    
    
    return(
        <Fragment>
            <h1 className="title">{data.name}</h1>
            <div className="container" style={{marginTop:'4rem'}}>
                <div className="row">
                    {
                       data.sousCategories.map((sousCategories,index)=>(
                           <div  key={index} className="col-xs-2 col-md-2 box-categorie">
                               <div className=" box-categorie-cover"  >
                               <h1 className="title-sous-categories" >{sousCategories}</h1>

                               </div>
                               {/* <img className="image-sous-categories"   src={`../${sousCategories.image}`}></img> */}
                              
                               
                               

                           </div>
                       ))
                    }
                 
                   

                </div>

            </div>
            <br/>
            <br/>
            <br/>
        </Fragment>
        
    )

}

export default CategorieScreen;