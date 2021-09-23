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
            _id:'1',
            name:'mallot PSG',
            categorie:'T-shirt',
            image:'img/2021-07-08_15-32-10-maillot-PSG-2022-SERGIO.jpg',
            price:12000,
            countInStock:2,
            brand:'Nike',
            rating:4.5,
            description:'qualite superieur'
        },
        {
            _id:'2',
            name:'Air Force New',
            categorie:'Chaussure',
            image:'img/pinterest/chaussure3.jpg',
            price:24000,
            countInStock:3,
            brand:'Air force',
            rating:5,
            description:'qualite superieur'
        },
        {
            _id:'3',
            name:'yeesus Pele',
            categorie:'Chaussure',
            image:'img/pinterest/chaussure5.jpg',
            price:60000,
            countInStock:20,
            brand:'Adidas',
            rating:4,
            description:'qualite superieur'
        },
        {
            _id:'4',
            name:'Shark BMW',
            categorie:'Chaussure',
            image:'img/pinterest/chaussure6.jpg',
            price:17000,
            countInStock:10,
            brand:'Adidas',
            rating:6,
            description:'qualite superieur'
        },
        {
            _id:'5',
            name:'Sur mesure',
            categorie:'Pantalon',
            image:'img/pinterest/pan1.jpg',
            price: 6000,
            countInStock:23,
            brand:'Sur Mesure',
            rating:4,
            description:'qualite moyene'
        },
        
    ]
}



export default data;







// {
//     _id:'6',
//     name:'Veste Bleu',
//     categorie:'veste',
//     image:'img/pinterest/veste6.jpg',
//     price:'12 000',
//     countInStock:9,
//     brand:'Amiri',
//     rating:6,
//     description:'qualite superieur'
// },