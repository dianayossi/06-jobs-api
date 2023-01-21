const Artist = require('../models/Artist')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')



const getAllArtists = async (req, res) => {
    res.send('Get all artists')
}
const getArtist = async (req, res) => {
    res.send('Get artist')
}
const createArtist = async (req, res) => {
    req.body.createdBy = req.user.userId
    const artist = await Artist.create(req.body)
    res.status(StatusCodes.CREATED).json({artist})
}
const updateArtist = async (req, res) => {
    res.send('Update artist')
}
const deleteArtist = async (req, res) => {
    res.send('Delete artist')
}

module.exports = {
    getAllArtists,
    getArtist,
    createArtist,
    updateArtist,
    deleteArtist,
}   