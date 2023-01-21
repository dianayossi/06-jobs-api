const mongoose = require('mongoose')

const ArtistSchema = new mongoose.Schema({
    artist:{
        type:String,
        required:[true, 'Please provide artist name'],
        maxlength: 50
    },
    album:{
        type:String,
        required:[true, 'Please provide album name'],
        maxlength: 100,
    },
    ranking:{
        type:String,
        // enum:['One-Star', 'Two-Stars', 'Three-Stars', 'Four-Stars', 'Five-Stars'],
        enum: ['low', 'medium', 'high'],
        default: 'pending',
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required: [true, 'Please provide artist'],
    }
    //tying model to user;

}, {timestamps: true})

module.exports = mongoose.model('Artist', ArtistSchema)