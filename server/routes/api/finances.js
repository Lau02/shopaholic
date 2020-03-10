const express = require('express');
const router  = express.Router();
const Finance = require('../../models/Finance');

// router.get('/all', (req, res, next) => {
//   Finance.find({user:req.user._id})
//   .select(req.body.import)
//      .then(()=> {
//        console.log(allFinces)
//        res.json(allFinances)
//      })
//      .catch(err => next(err))
//    console.log('error');
//  })


 router.post("/newSaving", (req, res, next) => {
   console.log(req.user._id)
   const newSaving = {
   moneybox: req.body.moneybox,
   user: req.user._id
   }
   return Finance.create(newSaving)
   .then(createdSaving => {
     res.json(createdSaving)
   });
 });

router.get('/all', (req, res, next) => {
  Finance.find({user:user.req._id})
  .select(req.body.moneybox)
  .then(allFinances => {
    res.json(allFinances)
})
  .catch(err => next(err))
})
 
 module.exports = router;
