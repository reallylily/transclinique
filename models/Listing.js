const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  listingstatus: {type: String},
  title: {
    type: String,
    required: true
  },  
  text: {type: String},
  price: {
    type: Number,
    required: true
  },
  size: {type: Object},
  finishes: {type: Object},
  length: {type: Object},
  shapes: {type: Object},
  colors: {type: Object},
  styles: {type: Object},

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model('listing', ListingSchema);