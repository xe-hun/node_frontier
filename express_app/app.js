const express = require('express');
const path = require('path')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)
// const authorize = require('./authorize')

const morgan = require('morgan')




// app.use(morgan('tiny'))

// app.get('/', (req, res)=>{
//     res.send('Home')
// })

// app.get('/About', (req, res)=>{
//     res.send('About')
// })

// app.get('/api/products', (req, res)=>{
//     res.send('products')
// })

// app.get('/api/items', (req, res)=>{
//     res.send('items')
// })

app.listen(5001, ()=>{
    console.log('server is listening on port 5001')
})






// app.get('/api/products', (req, res)=>{
//     const newProduct = products.map((product)=>{
//         const {id, title} = product;
//         return {id, title}
//     })
//     res.json(newProduct)
// })

// app.get('/api/products/:productId', (req, res)=>{
//     const {productId} = req.params;
//    const singleProduct = products.find((product)=> product.id === Number(productId))
//    if(!singleProduct){
//     return res.status(404).send('Product does not Exist')
//    }
//    res.json(singleProduct)
// })

// app.get('/api/v1/query', (req, res)=>{

//     let sortedProducts = [...products]
//     const {search, limit} = req.query



//     if(search){
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.title.startsWith(search)
//         })
//     }

//     if(limit){
//         sortedProducts = sortedProducts.slice(0, Number(limit))
//     }

//     if(sortedProducts.length < 1){
//         return res.status(200).json({success: true, body: []})
//     }else{

//         res.status(200).json(sortedProducts)
//     }


//     const {productId} = req.params;
//    const singleProduct = products.find((product)=> product.id === Number(productId))
//    if(!singleProduct){
//     return res.status(404).send('Product does not Exist')
//    }
//    res.json(singleProduct)
// })

// app.all('*', (req, res)=>{
//     res.status(404).send('resource not found')
// })


// app.listen(5001, ()=>{
//     console.log('app is listeninig in port 5001')
// })


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.get
// app.get






// app.get('/', (req, res)=>{
//     res.status(200).send('Home Page')
// })

// app.get('/about', (req, res)=>{
//     res.status(200).send('About Page')
// })

// app.all('*', (req, res)=>{
//     res.status(404).send('<h1> resources not found</h1>')
// })



