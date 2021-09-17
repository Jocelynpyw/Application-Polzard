import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { detailsProducts } from '../actions/productActions';
// import {Link} from 'react-router-dom';


 function ProductScreen(props) {
    //  const product = data.products.find((x)=>x._id===props.match.params.id);
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails =useSelector((state)=>state.productDetails)
    const {loading,error,product} = productDetails;

    useEffect(()=>{
        dispatch(detailsProducts(productId));
    },[dispatch,productId])

   
     console.log(product);
     
    return (
        
        <div>

            {
                 loading? (<LoadingBox></LoadingBox>):
                  error? (<MessageBox>{error}</MessageBox>):(
                    <div className="container description-sections" style={{marginTop:'50px'}}>

                    <div className="row">
               <div className="col-md-6  product-screen-box">
                   {/* ici il y'a un petit souci je recois mes donees depuis mon backend seulement l'image non qui elle est toujours statique */}
                   <img className='img-product-screen' src={require(`../../public/${product.image}`).default} alt={`image de ${product.name} : ${product.image}`}/>
                   {/* <img className='img-product-screen' src={product.image} alt={`image de ${product.name} : ${product.image}`}/> */}
               </div>
               <div className="col-md-3">
                   <ul className="ul">
                       <li><h1 className="product-title">{product.name}</h1></li>
                       <li className="product-brand">Frabricant : {product.brand}</li>
                       <li className="procuct-description">Description: {product.description}</li>
                       <li className="product-price"> prix : {product.price} Fcfa</li>
                       <br/>
                        <button className="btn btn-success w-40" style={{width:'220px'}}>Ajouter au Panier</button>


                       
                   </ul>
               </div>
               <div className="col-md-3">
                   <ul className="ul">
                       <li>
                                <div className="row">
                                       <div>Price : </div>
                                       <div  className="product-price">{product.price}</div>
                                </div>

                       </li>

                       <li>
                           <div className="row">
                               <div className="product-status">Status :</div>
                                               <div style={{display:'inline-block'}}>
                                       {
                                           product.countInStock>0?(<span className="success">
                                               In Stock
                                           </span>):(<span className="error">Unavaiible</span>)
                                       }
                                 </div>
                           </div>
                       </li>
                       <li>
                           <button className="btn btn-success">Ajouter au panier</button><br/>
                           <button className="btn btn-success " style={{width:'220px'}}>Acheter</button>

                       
                       <br/>
                       </li>
                       
                   </ul>
                   
                  
                   
                       
               </div>

           </div>
          
           </div>
                  )
                  }

            {/* <Link to='/'>Allez a l'Accueil</Link> */}

          
        </div>
    )
}

export default ProductScreen;
