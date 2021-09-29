import React from 'react'
import dataCategorie from '../Data/CategorieData';
import { Link } from 'react-router-dom';


function Categories() {
    const data = dataCategorie.categorie;
    
    return (
        
    <>
    
     <div id="nouveautes"> 
        <p>Categories</p>
        <a href="#!" style={{fontWeight: 'bold'}} ></a>
    </div>

      <div id="categorie">
          

          <div className="container-categorie">
                <div className="container-fluid">
                    <div className="row">
                        {
                            data.map((data,index)=>(
                                    <div className="categorie col-sm-12 col-xs-12" style={{marginBottom:'80px'}} key={index}>
                    
                                <div className="categorie-img">
                                    <Link to={`/categorie/${data._id}`}>
                                             <img src={data.image} alt=""/>
                                    </Link>
                                </div>
                                <h1 className="categorie-title"></h1>
                                    <ol className="categorie-list">
                                        
                                      
                                        <li className="categorie-list-item">{data.sousCategories[0]}</li>
                                        <li className="categorie-list-item">{data.sousCategories[1]}</li>
                                        <li className="categorie-list-item">{data.sousCategories[2]}</li>
                                        <li className="categorie-list-item">{data.sousCategories[3]}</li>
                               
                
                                    </ol>
                                    <Link style={{textDecoration:'none'}} to={`/categorie/${data._id}`}>
                                         <p>{data.lienConsul}</p>
                                    </Link>
                                
                            </div>
                            ))
                        }
                        
        
                         
        
        
                           
                    </div>
                </div>

          </div>
      </div>

      </>
    )
}

export default Categories
