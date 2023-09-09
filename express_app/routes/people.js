const express = require('express')

const router = express.Router()

const {
    getPeople, putPeople
} = require('../controllers/people')




// router.get('/', getPeople)

// router.put('/:id',  putPeople)

router.route('/').get(getPeople)
router.route('/:id').put(putPeople)

module.exports = router
