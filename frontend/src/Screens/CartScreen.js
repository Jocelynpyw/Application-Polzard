import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../Components/MessageBox'
import {Link} from 'react-router-dom'
import panier_vide from './panier_vide.png';


export default function CartScreen(props){
    const productId = props.match.params.id;
    const qte = props.location.search? Number(props.location.search.split('=')[1]):1;
    const cart = useSelector(state=>state.cart);
    const {cartItems} = cart
    const dispatch= useDispatch()
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qte));
        }
    },[dispatch,productId,qte]);
    const removeFromCartHandler=(id)=>{
        dispatch(removeFromCart(id));
    }

    const checkoutHandler =()=>{
        props.history.push('/signin?redirect=shipping')
    }
    return(
      <div className="container-fluid">
         {
           cartItems.length===0?(
               <MessageBox>
                   <div id="message-box">
                       <h1 className="message-box-title">Votre Panier est vide pour le moment</h1>
                       <img className="message-box-image" src={panier_vide}/>
                       <Link to="/" ><button className="message-button">Allez a la boutique</button></Link>
                   </div>
                  
                  
               </MessageBox>
           ):(
               <Fragment>
                   <h1 className="cart-item-title">Mon Panier</h1>
               <ul>
                   {
                       cartItems.map((item)=>(
                        //    console.log(item.name);
                           
                           <li key={item.product}  className="cart-item">
                              <div className="row" style={{display:'flex' }}>
                                 <div className="col-md-2 col-xs-12 item-image">
                                        
                                              <img src={`../../${item.image}`} className="smalle"/>
                                         
                                 </div>
                                 <div className="col-md-5 col-xs-12 item-name-box">
                                     <Link to={`/product/${item.product}`} className="item-name">{item.name}</Link>
                                 </div>
                                 <div className="col-md-1 col-xs-12 item-select-box">
                                     <select value={item.qte} onChange={e=>dispatch(addToCart(item.product,Number(e.target.value))) } >
                                          {
                                                    
                                                    ([...Array(item.countInStock).keys()]).map(x=>(
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                           ))
                                            }
                                     </select>
                                 </div>
                                 <div  className="col-md-2 col-xs-12 item-price">
                                     {item.price} Fcfa
                                 </div>
                                 <div className="col-md-2 col-xs-12 item-button">
                                     <button type="button" onClick={()=>removeFromCartHandler(item.product)}>Supprimer</button>
                                 </div>
                               </div>
                           </li>
                       ))
                   }
               </ul>
               <div className="cart ">
                   <ul>
                       <li style={{listStyle:'none'}}>
                          <div className="panier-info">
                                <h5 className="panier-total-item">
                                    Total Produit :  {cartItems.reduce((a,c)=>a + c.qte,0)}  
                                </h5>
                                <h4 className="panier-total-prix"> Total Prix : {cartItems.reduce((a, c)=> a + c.price * c.qte,0)} Fcfa</h4>
                          </div>

                       </li>
                       <li style={{listStyle:'none'}}>
                           <div className="cart-button row">
                                <Link to="/" className="col-md-2" style={{textDecoration:'none'}}> <p className="para-home">Continuer les Achats</p></Link>
                                <p className="col-md-7"></p>
                                <div className="col-md-3" style={{textDecoration:'none'}}><button className="button-commande" onClick={checkoutHandler}>Passer la Commande</button></div>
                           </div>
                       </li>
                   </ul>

               </div>
               </Fragment>
           )
         }
      </div>
    )
}