const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Listing = require('../../models/Listing');
const validateListingInput = require('../../validation/listings');

router.get('/', (req, res) => {
    Listing.find()
        .sort({ date: -1 })
        .then(listings => res.json(listings))
        .catch(err => res.status(404).json({ nolistingsfound: 'No listings found' }));
});

router.get('/user/:user_id', (req, res) => {
    Listing.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(listings => res.json(listings))
        .catch(err =>
            res.status(404).json({ nolistingsfound: 'No listings found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Listing.findById(req.params.id)
        .then(listing => res.json(listing))
        .catch(err =>
            res.status(404).json({ nolistingfound: 'No listing found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateListingInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }

      console.log(req)
  
      const newListing = new Listing({
        listingstatus: req.body.listingstatus,
        title: req.body.title,
        text: req.body.text,
        price: req.body.price,
        size: req.body.size,
        finishes: req.body.finishes,
        length: req.body.length,
        shapes: req.body.shapes,
        colors: req.body.colors,
        styles: req.body.styles,
        user: req.user.id,
      });
  
      newListing.save().then(listing => res.json(listing));
    }
  );

  module.exports = router;