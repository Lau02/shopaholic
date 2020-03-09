const express = require('express');
const router  = express.Router();
const Finance = require('../../models/Finance');

outer.get('/all', (req, res, next) => {
  Finance.find({user:req.user._id})
     .then(allFinances => {
       console.log(allFinces)
       res.json(allFinances)
     })
     .catch(err => next(err))
   console.log('error');
 })
 
