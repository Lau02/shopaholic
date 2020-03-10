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


 router.post("/new", (req, res, next) => {
 
   const newSaving = {
   saving: req.body.saving,
   user: req.user._id
   }
   return Finance.create(newSaving)
   .then(createdSaving => {
     console.log(createdSaving)
     res.json(createdSaving)
   });
 });

router.get('/all', (req, res, next) => {
  Finance.find({user:user.req._id})
  .select(req.body.saving)
  .then(allSavings => {
    res.json(allSavings)
})
  .catch(err => next(err))
})
 
 module.exports = router;
