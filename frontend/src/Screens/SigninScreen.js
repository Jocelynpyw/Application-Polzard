import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import '../Style/SigninScreen.css';
import { signin } from '../actions/userActions';

function SigninScreen(){
    const dispatch = useDispatch()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const submitHandler=(e)=>{
        console.log(email);
        console.log(password);
        
        e.preventDefault();
        dispatch(signin(email,password));
    }
    return(


            
        <div className="container" style={{marginTop:'2rem'}}>

            <div className="row content">
                <div className="col-md-6 mb-3" style={{position:'relative'}}>
                    <img src="../../img/connexion.svg" className="connexion-image"></img>
                </div>

                <div className="col-md-6">
                <h3 className="signin-text mb-3"> Se connecter</h3>

                 <from >

                        <div className="form-group">
                            <label for='email'>adresse Email</label>
                            <input  className="form-control"
                                type='email'
                                id='email'
                                required
                                onChange = {(e)=>setEmail(e.target.value)}
                            >
                            </input>
                        </div>

                        <div  className="form-group">
                            <label HtmFor='password'>Mot de Passe</label>
                            <input  className="form-control"
                                type='password'
                                id='password'
                                required
                                onChange = {(e)=>setPassword(e.target.value)}
                            ></input>
                        </div>

                        <div>
                            <label/>
                            <button className='btn-class' onClick={submitHandler}>Connexion</button>
                        </div>

                        <div>
                            Nouveau ? {''}
                            <Link to='/register' style={{textDecoration:'none',fontWeight:'bold'}}>Creer un nouveau Compte</Link>
                        </div>
                                    </from>
                </div>

            </div> 
            
        </div>
        
        
    )
}
export default SigninScreen;
