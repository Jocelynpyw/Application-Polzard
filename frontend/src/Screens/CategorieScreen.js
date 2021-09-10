import React, { Fragment } from 'react';
import dataCategorie from '../Data/CategorieData';
import '../Style/CategorieScreen.css';


function  CategorieScreen (props){
   
    const data= dataCategorie.categorie.find((x)=>x._id===props.match.params.id);
    const dataC=dataCategorie.categorie;
    if(!data){
        return<div>Categorie Not Found</div>
    }
    console.log(dataCategorie.categorie);
    console.log('le type de dataCategorie categorie et est de '+ typeof(dataCategorie.categorie));
    
    
    return(
        <Fragment>
            <h1 className="title">{data.name}</h1>
            <div className="container">
                <div className="row">
                    {
                       data.sousCategories.map((sousCategories,index)=>(
                           <div className="col-xs-12 col-md-3 box-categorie" key={index}>
                               <h1 className="title-sous-categories">{sousCategories}</h1>

                           </div>
                       ))
                    }
                 
                   

                </div>

            </div>
        </Fragment>
        
    )

}

export default CategorieScreen;