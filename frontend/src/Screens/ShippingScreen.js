import React, { Fragment, useState } from 'react';
import CheckoutSteps from '../Components/CheckoutSteps';
import '../Style/ShippingScreen.css'
import { useSelector } from 'react-redux';

function ShippingScreen(){
    const [fullName,setFullName]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [postalCode,setPostalCode]=useState('');
    const [quartier,setQuartier]=useState('');
    //   ici je vais recuperer les elements du cartItems depuis mon redux et afficher crtains details
    const cart =useSelector((state)=>state.cart);
   const  {cartItems} = cart;
    console.log(cartItems.length);
    
    const submitHandler =(e)=>{
        e.preventDefault()
            alert('machine Learning');
            
    }
    return(
        <Fragment>
           <div className="shippingContainer">
           <div>
                <CheckoutSteps step1 step2></CheckoutSteps>
            </div>
            <div className="container" >
                <div className="row">
                <div className="col-md-6 commande-form">
            <from methode="POST"  onSubmit={submitHandler}>
                    
                        <div><h1 className="title" style={{fontSize:'1.9rem'}}>Adresse de la Commande </h1></div>
                        <div className="form-group">
                            <label for='fullName'>Nom Complet</label>
                            <input  className="form-control"
                                type='text'
                                id='fullName'
                                value={fullName}
                                required
                                onChange={(e)=>setFullName(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label for='address'>Adresse</label>
                            <input  className="form-control "
                                type='text'
                                id='address'
                                required
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className="form-group">
                            <label for='city'>Votre Ville</label>
                            <input  className="form-control"
                                type='text'
                                id='city'
                                value={city}
                                required
                                onChange={(e)=>setCity(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className="form-group">
                            <label for='postalCode'>Code Postal</label>
                            <input  className="form-control"
                                type='text'
                                id='postalCode'
                                value={postalCode}
                                required
                                onChange={(e)=>setPostalCode(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <label for='quartier'>Votre Quartier</label>
                            <input  className="form-control"
                                type='text'
                                id='quartier'
                                value={quartier}
                                required
                                onChange={(e)=>setQuartier(e.target.value)}
                            >
                            </input>
                        </div>

                        

                        <div>
                            <label/>
                            <button className='btn-class btn-color' type="submit">Continuer</button>
                        </div>

                      
                                    </from>
                                    </div>
                                    

<div className="col-md-1"></div>
               <div className="col-md-5 " style={{backgroundColor:'rgba(0,0,0,0.001)',padding:'4%'}}>
                        
                           
                            <div >
                                <ul className="list-product">
                                    {
                                        cartItems.map(product=>(
                                             <li className="list-product-item">
                                        <p >{product.name}</p>
                                        <p>X{product.qte}</p>
                                    </li>
                                        ))
                                    }
                                   

                                </ul>
                            </div>
                            <div  className="details-products">
                                <p>Nombres de produits: {cartItems.reduce((a,c)=>a + c.qte,0)}</p>
                                <p>Merci D'acheter chez Nous {}</p>
                                <p >Total a Payer :<span className="title">{cartItems.reduce((a,c)=>a + c.price*c.qte,0)} Fcfa</span> </p>
                            </div>
                            
                      

                
            </div>
            </div>
            </div>

            {/*   Deuxiemmes conatiner  */}
          
           </div>
        </Fragment>
    )
}

export default ShippingScreen;