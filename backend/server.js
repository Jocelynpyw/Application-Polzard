import express from 'express';
import data from './data.js';

const app = express ();
app.get('/api/products',(req,res)=>{
    res.send(data.products);
});
app.get('/',(req,res)=>{
    res.send('Votre serveur choco bio est pret pour la partouze du lundi soir');

});
const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`);
    
});