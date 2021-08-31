import React from 'react';
import styled from 'styled-components';


const HeaderDiv = styled.div`
        display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 10px 50px;
    /* box-shadow: 0px 0px 5px #000; */
    width: 100%;
    height: 90px;
  position: static;
`;

const Logo = styled.div`
        color:#00a0f0 ;
    font-size: 2rem;
    padding: 5px 10px;
    font-weight: bold;
    height: 50px;
    width: 100px;
    /* font-family: Arial, Helvetica, sans-serif; */
    cursor: pointer;
    margin-top: -30px;
    margin-right: 40px ;

     span{
    color: rgb(27, 196, 27);
    font-size: 2.8rem;
    /* padding: 5px 10px; */
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma;
}
`;

const SearchBox = styled.div`
       position: relative;
    height: 40px;
    width: 400px;
    display: inline-block;

    input{
    width: 400px;
    height: 40px;
    border: none;
    outline: none;
    background-color: #00a0f0;
    color: white;
    border-radius: 10px;
    padding: 10px;
}

::placeholder{
    font-size: 1.2rem;
    padding:5px 10px ;
    color: white;
}


`;

const SearchInsiteBox = styled.div`
         width: auto;
    height: auto;
    padding: 0px;
    position: absolute;
    transform: translate(-40px,0px);
    background-color: rgb(27, 196, 27);
    /* padding: 10px 10px; */
    cursor: pointer;
    border-radius: 10px;
    
    img{
    height: 40px;
    width: 40px;
  position: absolute;
  transform: translate(-40px,0px);
  background-color: rgb(27, 196, 27);
  padding: 5px;
  /* padding: 10px 10px; */
  cursor: pointer;   border-radius: 10px;



 }
`;

const SignIn = styled.div`
        height: 90px;
    width: 100px;
    margin-top: 40px;

    img{
    width: 40px;
    height: 40px;
   transform: translateX(15px);
    cursor: pointer;
    &:hover{
        opacity: 0.8;

    }
}

p{
    /* text-align: center; */
    color:rgb(27, 196, 27) ;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .7rem;
}
`;

const Panier = styled.div`
        height: 90px;
    width: 100px;
    margin-top: 40px;
    img{
    width: 40px;
    height: 40px;
   transform: translateX(7px);
    cursor: pointer;
    &:hover{
        opacity: 0.8;

    }
}

p{
    /* text-align: center; */
    color:rgb(27, 196, 27) ;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: .7rem;
}
`;

const Contact = styled.div`
    position: relative;
    width: 100px;
    height: 40px;

    &:hover{
        opacity: 0.8;

    }

    button{
    position: absolute;
    height: inherit;
    width: inherit;
    padding: 5px 5px;
    border: none;
    outline: none;
    background-color: rgb(27, 196, 27);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.7rem;

    &:hover{
        opacity: 0.8;

    }
}`;



function Header() {
    return (
        <>
       <HeaderDiv> 
              <Logo> <span>Pol</span>zard</Logo>
              <SearchBox>
                  <SearchInsiteBox>
                      <input type="text" placeholder="Que Voulez Vous ..."/>
                      <img src="img/LOUPE-ICON.png" alt="rechercher un item"></img>
                      
                  </SearchInsiteBox>
              </SearchBox>
              <SignIn>
                  <img src="img/connexion.png" alt="se connecter"/>
                  <p>se connecter</p>
              </SignIn>
              <Panier>
                  <img src="img/panier3.png" alt=""/>
                  <p>mon panier</p>

              </Panier>
              <Contact>
                  <button className="btn-contact">Nous Contacter</button>

              </Contact>
          </HeaderDiv>
        </>
    )
}

export default Header



















// .header{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: row;
//     padding: 10px 50px;
//     /* box-shadow: 0px 0px 5px #000; */
//     width: 100%;
//     height: 90px;
//   position: static;

// }
// #logo{
//     color:#00a0f0 ;
//     font-size: 2rem;
//     padding: 5px 10px;
//     font-weight: bold;
//     height: 50px;
//     width: 100px;
//     /* font-family: Arial, Helvetica, sans-serif; */
//     cursor: pointer;
//     margin-top: -30px;
//     margin-right: 40px ;
    
// }
// #logo span{
//     color: rgb(27, 196, 27);
//     font-size: 2.8rem;
//     /* padding: 5px 10px; */
//     font-weight: bold;
//     font-family: Verdana, Geneva, Tahoma;
// }

// .search-insite-box{
//     position: relative;
//     height: 40px;
//     width: 400px;
//     display: inline-block;
// }
// .search-box input{
//     width: 400px;
//     height: 40px;
//     border: none;
//     outline: none;
//     background-color: #00a0f0;
//     color: white;
//     border-radius: 10px;
//     padding: 10px;
// }
// ::placeholder{
//     font-size: 1.2rem;
//     padding:5px 10px ;
//     color: white;
// }
// .search-insite-box img{
//     height: 40px;
//     width: 40px;
//     position: absolute;
//     transform: translate(-40px,0px);
//     background-color: rgb(27, 196, 27);
//     padding: 5px;
//     /* padding: 10px 10px; */
//     cursor: pointer;
//     border-radius: 10px;



// }
// .sign-in,.panier{
//     height: 90px;
//     width: 100px;
//     margin-top: 40px;
// }

// .sign-in img{
//     width: 40px;
//     height: 40px;
//    transform: translateX(15px);
//     cursor: pointer;
// }

// .panier img{
//     width: 40px;
//     height: 40px;
//    transform: translateX(7px);
//     cursor: pointer;
// }

// .sign-in img:hover,.panier img:hover,.btn-contact:hover,#contact:hover{
//     opacity: 0.8;
// }
// .sign-in p,.panier p{
//     /* text-align: center; */
//     color:rgb(27, 196, 27) ;
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//     font-size: .7rem;
// }
// #contact{
//     position: relative;
//     width: 100px;
//     height: 40px;
// }
// .btn-contact{
//     position: absolute;
//     height: inherit;
//     width: inherit;
//     padding: 5px 5px;
//     border: none;
//     outline: none;
//     background-color: rgb(27, 196, 27);
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 0.7rem;
// }