const {products, people} = require('../product')

const getPeople = (req, res)=>{
    res.status(200).json({success: true, data: people})
}

const putPeople = (req, res)=>{
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)
    res.send('done')
}

module.exports = {
    getPeople,
    putPeople,
}