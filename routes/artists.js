const express = require('express')
const router = express.Router()

const {
    getAllArtists, 
    getArtist, 
    createArtist, 
    updateArtist, 
    deleteArtist,
} = require('../controllers/artists')

router.route('/').post(createArtist).get(getAllArtists)
router.route('/:id').get(getArtist).delete(deleteArtist).patch(updateArtist)

module.exports = router
