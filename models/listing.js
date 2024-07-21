// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title:{
//         type: String,
//         required: true
//     }, 
//     description: String,
//     price: Number,
//     image:{
//         type: String,
//         default:
//             "https://unsplash.com/photos/a-green-and-blue-sky-filled-with-stars-a6a0aJfzxBQ",
//         set: (v) => v==="" ? "https://unsplash.com/photos/a-green-and-blue-sky-filled-with-stars-a6a0aJfzxBQ"
//         : v,

//     } ,
//     price:Number,
//     location: String,
//     country: String,
//     reviews:[
//         {
//             type: Schema.Types.ObjectId,
//             ref:"Review",
//         },
//     ],
// }) ;
// const Listing = mongoose.model('Listing',listingSchema);
// module.exports = Listing;



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    image: {
        url:String,
        filename:String,
    },
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry:{
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
    }
});

listingSchema.post("findOneAndDelete",async (listing) =>{
    if(listing){
     await Review.deleteMany({_id: {$in: listing.reviews}});
}
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
