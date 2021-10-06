import React, { Fragment } from 'react';
import dataCategorie from '../Data/CategorieData';
import '../Style/CategorieScreen.css';
import SectionNouveaute from '../Components/SectionNouveaute';
import { useDispatch, useSelector } from 'react-redux';



function  CategorieScreen (props){
   
    const dispatch =  useDispatch();
    const productList=useSelector((state)=>state.productList);
    const data= dataCategorie.categorie.find((x)=>x._id===props.match.params.id);
    var {loading,error,products} = productList;
    if(!data){
        return<div>Categorie Not Found</div>
    }

    const product = products.filter((x)=>x.categorie===data.categorie || x.type===data.categorie )
    
    
    
    
    
    return(
        <Fragment>
            <div>
            <h1 className="title">{data.name}</h1>
            <div className="container" style={{marginTop:'4rem'}}>
                <div className="row">
                    {
                       data.sousCategories.map((sousCategories,index)=>(
                        //    <div  key={sousCategories._id} className="col-xs-2 col-md-2 box-categorie">
                           <div  key={index} className="col-xs-2 col-md-2 box-categorie">
                               <div className=" box-categorie-cover"  >
                               <h1 className="title-sous-categories">{sousCategories}</h1>
                               {/* <h1 className="title-sous-categories" >{sousCategories.title}</h1> */}

                               </div>
                               {/* <img className="image-sous-categories"   src={`../${sousCategories.image}`}></img> */}
                              
                               
                               

                           </div>
                       ))
                    }
                 
                   

                </div>
                <h4 style={{margin:'10px',marginBottom:'-3.4rem'}}>Produits disponible de cette Categorie</h4>



            </div>
            <br/>
            <br/>
            <br/>
            <div className="container-fluid">
                            <div className="row">
                          
                                   {
                                       product.map((product)=>(
                                           <SectionNouveaute product={product} key={product._id}/>
                                       ))
                                   }
          </div>
            </div>

                           
                        
            </div>

           
        </Fragment>
        
    )

}

export default CategorieScreen;