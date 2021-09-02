import React from 'react'
import data from '../data';

 function ProductScreen(props) {
     const product = data.products.find((x)=>x._id===props.match.params.id);
     if(!product){
         return<div>Product Not Found</div>
     }
     console.log(product.image);
     
    return (
        
        <div>
            <div className="container">

                     <div className="row">
                <div className="col-md-6" >
                    <img src={`${product.image} `} alt={`image de ${product.name} : ${product.image}`}></img>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li>{product.brand}</li>
                        <li> prix : {product.price} Fcfa</li>
                        <li>Description: {product.description}</li>
                        
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>
                                 <div className="row">
                                        <div>Price : </div>
                                        <div >{product.price}</div>
                                 </div>

                        </li>

                        <li>
                            <div className="row">
                                <div>Status :</div>
                                                <div style={{display:'inline-block'}}>
                                        {
                                            product.countInStock>0?(<span className="success">
                                                In Stock
                                            </span>):(<span className="danger">Unavaiible</span>)
                                        }
                                  </div>
                            </div>
                        </li>
                        <li>
                            <button className="btn btn-success">Ajouter au panier</button>
                        </li>
                    </ul>
                    
                   
                    
                </div>
            </div>
           
            </div>
           Product Screen 
        </div>
    )
}

export default ProductScreen;
