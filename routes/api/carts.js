const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Cart = require('../../models/Cart');
const validateCartInput = require('../../validation/carts');

// router.get('/', (req, res) => {
//     Cart.find()
//         .sort({ date: -1 })
//         .then(carts => res.json(carts))
//         .catch(err => res.status(404).json({ nocartsfound: 'No carts found' }));
// });

router.get('/user/:user_id', (req, res) => {
    Cart.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(carts => res.json(carts))
        .catch(err =>
            res.status(404).json({ nocartsfound: 'No cart found for that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Cart.findById(req.params.id)
        .then(cart => res.json(cart))
        .catch(err =>
            res.status(404).json({ nocartfound: 'No cart found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateCartInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }

      console.log(req)
  
      const newCart = new Cart({
        cartItems: {},
        user: req.user.id,
      });
  
      newCart.save().then(cart => res.json(cart));
    }
  );

  module.exports = router;