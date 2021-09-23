import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';
import categorieData from './categorieData.js'

const app = express ();


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/polzard',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(()=>{
    console.log("Connexion successful");
    
}).catch((error)=>{
    console.log('Something Wrong '+error );
    
});



app.use('/api/users' ,userRouter);























app.get('/api/products/:id',(req,res)=>{
    const product = data.products.find(x =>x._id === req.params.id);

    if (product){
        res.send(product );

        
    }else{
        res.status(404).send({message:'Product not found'});
        
    }
})

app.get('/api/products',(req,res)=>{
    res.send(data.products);
});

app.get('/api/categories',(req,res)=>{
    res.send(categorieData.categories)
})

app.get('/',(req,res)=>{
    res.send('Votre serveur choco bio est pret pour la partouze du lundi soir');

});
const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
    
});