import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';


const userRouter= express.Router();

userRouter.get ('/seed', async(req,res)=>{
    console.log('telegram enerve ');
    await userRouter.remove({});
    
   const createdUsers = await User.insertMany(data.users);
   res.send({createdUsers});
   
    
})

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