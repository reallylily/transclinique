const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },  
  text: {
    type: String,
    // required: true
  },
  size: {
    type: Object,
    // properties: {},
  },
  finishes: {type: Object},
  length: {type: Object},
  shapes: {type: Object},
  colors: {type: Object},
  styles: {type: Object},
  listingstatus: {
    type: String,
    // required: false
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model('listing', ListingSchema);