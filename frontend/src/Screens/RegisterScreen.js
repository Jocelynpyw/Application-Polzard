import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import '../Style/SigninScreen.css';
import { register } from '../actions/userActions';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox'; 
function RegisterScreen(props){
    const dispatch = useDispatch()
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');

    const redirect = props.location.search? props.location.search.split('=')[1]:'/';
     const userRegister = useSelector((state)=>state.userRegister)
    const {userInfo,loading,error} = userRegister;
    const submitHandler=(e)=>{

       
        
        e.preventDefault();

        if(password!==ConfirmPassword){
            alert('Votre mot de passe Ne correspond pas')
        }
        else{
                   dispatch(register(name,email,password));
 
        }
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[userInfo,props.history,redirect]);
    return(


            
        <div className="container" style={{marginTop:'2rem'}}>

            <div className="row content">

            <div className="col-md-6">
                <h3 className="signin-text mb-3"> Creer un Compte</h3>

                 <from >
                     {loading && <LoadingBox></LoadingBox>}
                     {error && <MessageBox variant="danger"> <div className="bg-dangerr">{error}</div> </MessageBox>}

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

                        <div className="form-group">
                            <label for='name'>Votre Nom</label>
                            <input  className="form-control"
                                type='text'
                                id='name'
                                required
                                onChange = {(e)=>setName(e.target.value)}
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
                        <div  className="form-group">
                            <label HtmFor='ConfirmPassword'>Comfirmer</label>
                            <input  className="form-control"
                                type='password'
                                id='ConfirmPassword'
                                required
                                onChange = {(e)=>setConfirmPassword(e.target.value)}
                            ></input>
                        </div>



                        <div>
                            <label/>
                            <button className='btn-class' type="sumit" onClick={submitHandler}>Inscription</button>
                        </div>

                        <div>
                            Nouveau ? {''}
                            <Link to={`/signin?redirect=${redirect}`} style={{textDecoration:'none',fontWeight:'bold'}}> Compte deja existant?</Link>
                        </div>
                                    </from>
                </div>


                <div className="col-md-6 mb-3" style={{position:'relative'}}>
                    <img src="../../img/check.svg" className="connexion-image"></img>
                </div>



            </div> 
            
        </div>
        
         
    )
}
export default RegisterScreen;
