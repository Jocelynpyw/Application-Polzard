import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
// Importation des Taost

import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




function SectionNouveaute( props) {
    const {product} = props
    const [qte,setQte]=useState(1)
  
    const dispatch = useDispatch()
    const toaste=()=>{
        toast.success(` ${product.name} a bien ete ajoute  la Liste des Souhait   :)`,{
            className:'custom-toast',
            draggable:true,
            position: toast.POSITION.BOTTOM_LEFT,
            })

    }
    const toastePanier=()=>{
        toast.success(` ${product.name} Ajouter Au Panier`,{
            className:'custom-toast',
            draggable:true,
            position: toast.POSITION.BOTTOM_LEFT,
            })

    }
        
      

    return (
        
        <Fragment>
             <div className="article col-md-2 col-xs-6">
                 <div className="article-cover">
                        <ul className="article-items-3">
                                   {/* <li><img src="../../img/pinterest/cart.svg" onClick={addToCartHandler}></img></li> */}
                                   <li onClick={toastePanier}><img src="../../img/pinterest/cart.svg" onClick={()=>dispatch(addToCart(product._id,1))}></img></li>
                            <li onClick={toaste}><img src="../../img/pinterest/heart.svg"  ></img></li>

                            <Link to={`/product/${product._id}`}>   
                              <li > <img src="../../img/pinterest/eye.svg"></img></li>

                            </Link> 
                        </ul>

                 </div>
                    <div className="article-img">
                        <Link to={`/product/${product._id}`}><img src={`../../${product.image}`} alt={`image ${product.name}`}/></Link>
                    </div>
                    <p className="article-name">{product.name} </p>
                    <p className="article-prix">{product.price}</p>

                    
                    <ToastContainer 
                        draggable={false} transition={Zoom} autoClose={1000} hideProgressBar
                        />
                </div>

        </Fragment> 
    )
}

export default SectionNouveaute
