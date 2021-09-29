import bcrypt from 'bcryptjs'
const data={
    users:[
        {
            name: 'jocelyn Pyw',
            email:'jocelynWotcheu@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:true
        },
        {
            name: 'Gros Naza',
            email:'Caustatin@tintih.com',
            password:bcrypt.hashSync('4444',8),
            isAdmin:false
        },
        {
            name: 'Gros Goba',
            email:'Caustatiintih.com',
            password:bcrypt.hashSync('444',8),
            isAdmin:false
        }
    ],
    products:[
        {
            
            name:'mallot PSG',
            categorie:'T-shirt',
            type:'Homme',

            image:'img/2021-07-08_15-32-10-maillot-PSG-2022-SERGIO.jpg',
            price:12000,
            countInStock:2,
            brand:'Nike',
            rating:4.5,
            description:'qualite superieur'
        },
        {
           
            name:'Air Force New',
            categorie:'Chaussure',
            type:'Homme',

            image:'img/pinterest/chaussure3.jpg',
            price:24000,
            countInStock:3,
            brand:'Air force',
            rating:5,
            description:'qualite superieur'
        },
        {
           
            name:'yeesus Pele',
            categorie:'Chaussure',
            type:'Homme',

            image:'img/pinterest/chaussure5.jpg',
            price:60000,
            countInStock:20,
            brand:'Adidas',
            rating:4,
            description:'qualite superieur'
        },
        {
            
            name:'Shark BMW',
            categorie:'Chaussure',
            type:'Homme',

            image:'img/pinterest/chaussure6.jpg',
            price:17000,
            countInStock:10,
            brand:'Adidas',
            rating:6,
            description:'qualite superieur'
        },
        {
           
            name:'Sur mesure',
            categorie:'Pantalon',
            type:'Homme',

            image:'img/pinterest/pan1.jpg',
            price: 6000,
            countInStock:23,
            brand:'Sur Mesure',
            rating:4,
            description:'qualite moyene'
        },
        {
            name:'mallot de Baim',
            categorie:'T-shirt',
            type:'Femme',
            image:'img/pinterest/images(1).jpg',
            price:12500,
            countInStock:20,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'Demembre',
            categorie:'T-shirt',
            type:'Homme',
            image:'img/pinterest/images(2).jpg',
            price:1500,
            countInStock:4,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'mallot de Baim',
            categorie:'Ensemble',
            type:'Femme',
            image:'img/pinterest/images(3).jpg',
            price:6500,
            countInStock:10,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'Pull Over',
            categorie:'T-shirt',
            type:'Mixte',
            image:'img/pinterest/images(4).jpg',
            price:7500,
            countInStock:9,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
                
            name:'Moulan Blanc',
            categorie:'T-shirt',
            type:'Femme',
            image:'img/pinterest/images(5).jpg',
            price:8500,
            countInStock:11,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'mallot de Baim',
            categorie:'Ensemble',
            type:'Femme',
            image:'img/pinterest/images(6).jpg',
            price:14500,
            countInStock:40,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
               
            name:'Prador env',
            categorie:'Chaussure',
            type:'Mixte',
            image:'img/pinterest/images(7).jpg',
            price:20500,
            countInStock:29,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
               
            name:'Godas Noir',
            categorie:'Chaussure',
            type:'Homme',
            image:'img/pinterest/godas3.jpg',
            price:9500,
            countInStock:9,
            brand:'Nike',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Godas Watt',
            categorie:'Chaussure',
            type:'Homme',
            image:'img/pinterest/godas1.jpg',
            price:17000,
            countInStock:2,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
             
            name:'T-shirt Fendi',
            categorie:'T-shirt',
            type:'Femme',
            image:'img/pinterest/images(8).jpg',
            price:2500,
            countInStock:4,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'Gris Over',
            categorie:'T-shirt',
            type:'Mixte',
            image:'img/pinterest/images(10).jpg',
            price:1300,
            countInStock:0,
            brand:'Nike',
            rating:4.5,
            description:'qualite superieur'
        },
        {
               
            name:'Noir A+',
            categorie:'T-shirt',
            type:'Homme',
            image:'img/pinterest/images(11).jpg',
            price:5000,
            countInStock:11,
            brand:'Amiri',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'Cullote A+',
            categorie:'Pantalon',
            type:'Homme',
            image:'img/pinterest/images(12).jpg',
            price:4500,
            countInStock:10,
            brand:'Amiri',
            rating:4.5,
            description:'qualite superieur'
        },
        {
               
            name:'mallot de Baim',
            categorie:'veste',
            type:'Respo Homme',
            image:'img/pinterest/images(13).jpg',
            price:70500,
            countInStock:4,
            brand:'Amiri',
            rating:4.5,
            description:'qualite superieur'
        },
        {
               
            name:'Veste baim',
            categorie:'veste',
            type:'Respo Homme',
            image:'img/pinterest/veste1.jpg',
            price:70500,
            countInStock:4,
            brand:'Next Team',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Veste',
            categorie:'veste',
            type:'Respo Homme',
            image:'img/pinterest/veste2.jpg',
            price:70500,
            countInStock:4,
            brand:'Sur Mesure',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Veste Djin',
            categorie:'T-shirt',
            type:'Homme',
            image:'img/pinterest/images(14).jpg',
            price:8500,
            countInStock:0,
            brand:'Puma',
            rating:4.5,
            description:'qualite superieur'
        },
        {
                
            name:'Pant Sable',
            categorie:'Pantalon',
            type:'Homme',
            image:'img/pinterest/images(15).jpg',
            price:10500,
            countInStock:50,
            brand:'Amiri',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'jogging Noir',
            categorie:'pantalon',
            type:'Mixte',
            image:'img/pinterest/images(16).jpg',
            price:12500,
            countInStock:31,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
               
            name:'Pijama',
            categorie:'Ensemble',
            type:'Mixte',
            image:'img/pinterest/images(17).jpg',
            price:25000,
            countInStock:7,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Blousson',
            categorie:'T-shirt',
            type:'Mixte',
            image:'img/pinterest/images(18).jpg',
            price:12300,
            countInStock:20,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Combinaison',
            categorie:'Ensemble',
            type:'Femme',
            image:'img/pinterest/images(19).jpg',
            price:18000,
            countInStock:4,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'mallot de Baim',
            categorie:'Ensemble',
            type:'Femme',
            image:'img/pinterest/images(20).jpg',
            price:8500,
            countInStock:9,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
               
            name:'Couvert femme',
            categorie:'Ensemble',
            type:'Femme',
            image:'img/pinterest/images(21).jpg',
            price:12500,
            countInStock:2,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Ensemble Rest',
            categorie:'T-shirt',
            type:'Miste Homme',
            image:'img/pinterest/images(22).jpg',
            price:40000,
            countInStock:8,
            brand:'Rebook',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Pull Over',
            categorie:'T-shirt',
            type:'Mixte',
            image:'img/pinterest/images(23).jpg',
            price:4000,
            countInStock:2,
            brand:'Amiri',
            rating:4.5,
            description:'qualite superieur'
        },
        {
                
            name:'T-shirt NB',
            categorie:'T-shirt',
            type:'Mixte',
            image:'img/pinterest/images(24).jpg',
            price:6500,
            countInStock:7,
            brand:'New Balance',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Pull Over',
            categorie:'T-shirt',
            type:'Mixte',
            image:'img/pinterest/images(25).jpg',
            price:12500,
            countInStock:2,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'jogging Blanc',
            categorie:'Pantalon',
            type:'Femme',
            image:'img/pinterest/images(26).jpg',
            price:7000,
            countInStock:20,
            brand:'Kappa',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Ens NY',
            categorie:'Ensemble',
            type:'Femme',
            image:'img/pinterest/images(27).jpg',
            price:22500,
            countInStock:5,
            brand:'New York',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Pantalon Noir',
            categorie:'pantalon',
            type:'Homme',
            image:'img/pinterest/images(28).jpg',
            price:9500,
            countInStock:2,
            brand:'Tommy Jean',
            rating:4.5,
            description:'qualite superieur'
        },
        {
              
            name:'Chemise carre',
            categorie:'T-shirt',
            type:'Homme',
            image:'img/pinterest/images(29).jpg',
            price:12500,
            countInStock:3,
            brand:'Armani',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'Longue Manche',
            categorie:'T-shirt',
            type:'Femme',
            image:'img/pinterest/images(30).jpg',
            price:2500,
            countInStock:0,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'Tiger',
            categorie:'T-shirt',
            type:'Mixte Homme',
            image:'img/pinterest/images(31).jpg',
            price:4500,
            countInStock:4,
            brand:'Super',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            name:'Moulan Cm',
            categorie:'T-shirt',
            type:'Femme',
            image:'img/pinterest/images(32).jpg',
            price:12500,
            countInStock:0,
            brand:'Fendi',
            rating:4.5,
            description:'qualite superieur'
        },
        
        
    ]
}



export default data;

 
// import bcrypt from 'bcryptjs'
// const data={
//     users:[
//         {
//             name: 'jocelyn Pyw',
//             email:'jocelynWotcheu@example.com',
//             password:bcrypt.hashSync('1234',8),
//             isAdmin:true
//         },
//         {
//             name: 'Gros Naza',
//             email:'Caustatin@tintih.com',
//             password:bcrypt.hashSync('4444',8),
//             isAdmin:false
//         },
//         {
//             name: 'Gros Goba',
//             email:'Caustatiintih.com',
//             password:bcrypt.hashSync('444',8),
//             isAdmin:false
//         }
//     ],
//     products:[
//         {
            
//             name:'mallot PSG',
//             categorie:'T-shirt',
//             image:'img/2021-07-08_15-32-10-maillot-PSG-2022-SERGIO.jpg',
//             price:12000,
//             countInStock:2,
//             brand:'Nike',
//             rating:4.5,
//             description:'qualite superieur'
//         },
//         {
           
//             name:'Air Force New',
//             categorie:'Chaussure',
//             image:'img/pinterest/chaussure3.jpg',
//             price:24000,
//             countInStock:3,
//             brand:'Air force',
//             rating:5,
//             description:'qualite superieur'
//         },
//         {
           
//             name:'yeesus Pele',
//             categorie:'Chaussure',
//             image:'img/pinterest/chaussure5.jpg',
//             price:60000,
//             countInStock:20,
//             brand:'Adidas',
//             rating:4,
//             description:'qualite superieur'
//         },
//         {
            
//             name:'Shark BMW',
//             categorie:'Chaussure',
//             image:'img/pinterest/chaussure6.jpg',
//             price:17000,
//             countInStock:10,
//             brand:'Adidas',
//             rating:6,
//             description:'qualite superieur'
//         },
//         {
           
//             name:'Sur mesure',
//             categorie:'Pantalon',
//             image:'img/pinterest/pan1.jpg',
//             price: 6000,
//             countInStock:23,
//             brand:'Sur Mesure',
//             rating:4,
//             description:'qualite moyene'
//         },
        
        
//     ]
// }



// export default data;







