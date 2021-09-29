import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{type:String,required:true },
    type:{type:String,require:true},
    image: {type:String ,require:true},
    brand: {type:String ,require:true},
    description: {type:String ,require:true},
    categorie: {type:String ,require:true},
    price: {type:Number ,require:true},
    countInStock: {type:Number ,require:true},

},{
    timestamps:true
});

const Product = mongoose.model('Product',productSchema);
export default Product; 