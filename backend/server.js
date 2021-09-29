import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import categorieData from './categorieData.js'
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';


dotenv.config();

const app = express ();
app.use(express.json());
app.use(express.urlencoded({extended : true}));


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/polzard',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connexion successful");
    
}).catch((error)=>{
    console.log('Something Wrong '+error );
    
});


app.use('/api/users' ,userRouter);
app.use('/api/products',productRouter);


app.use((err,req,res,next)=>{
    res.status(500).send({message : err.message})
})




app.get('/api/categories',(req,res)=>{
    res.send(categorieData.categories)
})

app.get('/',(req,res)=>{
    res.send('Votre serveur est pret');

});
const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
    
});



























// import express from 'express';
// import mongoose from 'mongoose';
// import userRouter from './routers/userRouter.js';
// import categorieData from './categorieData.js'
// import productRouter from './routers/productRouter.js'

// const app = express ();


// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/polzard',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>{
//     console.log("Connexion successful");
    
// }).catch((error)=>{
//     console.log('Something Wrong '+error );
    
// });



// app.use('/api/users' ,userRouter);
// app.use('/api/products',ProductRouter);


// app.use((err,req,res,next)=>{
//     res.status(500).send({message : err.message})
// })




















// app.get('/api/products/:id',(req,res)=>{
//     const product = data.products.find(x =>x._id === req.params.id);

//     if (product){
//         res.send(product );

        
//     }else{
//         res.status(404).send({message:'Product not found'});
        
//     }
// })

// app.get('/api/products',(req,res)=>{
//     res.send(data.products);
// });

// app.get('/api/categories',(req,res)=>{
//     res.send(categorieData.categories)
// })

// app.get('/',(req,res)=>{
//     res.send('Votre serveur choco bio est pret pour la partouze du lundi soir');

// });
// const port =process.env.PORT || 5000;
// app.listen(port,()=>{
//     console.log(`serve at http://localhost:${port}`);
    
// });