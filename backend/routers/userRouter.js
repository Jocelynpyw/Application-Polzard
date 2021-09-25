import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'


const userRouter= express.Router();

userRouter.get ('/seed', async(req,res)=>{
    // await userRouter.remove({});
    
   const createdUsers = await User.insertMany(data.users);
   res.send({createdUsers});
   
    
})

//   ici je vais creer la route qui menera a a la connexion d'un utilisattion

userRouter.post('/signin',expressAsyncHandler(async(req,res)=>{
    const user = await User.findOne({email: req.body.email});
    if(user){
        if (bcrypt.compareSync(req.body.password,user.password)){
            res.send({
                _id: user._id,
                name: user.name, 
                email: user.email,      
             token: generateToken(user)
            });
            return;
        }
    }
    res.status(401).send({message: 'mot de passe ou email incorrect'})
} )
)

export default userRouter;


























// import express from 'express';
// import data from '../data.js';
// import User from '../models/userModel.js';


// const userRouter= express.Router();

// userRouter.get ('/seed', async(req,res)=>{
//     console.log('telegram enerve ');
    
    
//     try {
//         const createdUsers =  await  User.create(data.users);

//         res.send({createdUsers})
//         console.log(createdUsers);
//     } catch (error) {
//         console.log(error);
        
//     }
   
    
// })

// export default userRouter;