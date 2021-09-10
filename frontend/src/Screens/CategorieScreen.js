import React from 'react';
import dataCategorie from '../Data/CategorieData';


function  CategorieScreen (props){
    console.log(props);
    const data= dataCategorie.categorie.find((x)=>x._id===props.match.params.id);
    if(!data){
        return<div>Categorie Not Found</div>
    }
    
    
    return(
        <>
        <p>Tous se passe bien lorem CategorieScreenCategorieScreenCategorieScreenCategorieScreenCategorieScreen
        CategorieScreenCategorieScreenCategorieScreenCategorieScreenCategorieScreen
        </p>
        </>
        
    )

}

export default CategorieScreen;