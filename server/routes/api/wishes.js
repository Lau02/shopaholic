const express = require('express');
const router  = express.Router();
const Wish = require('../../models/Wish')

//Mostrar todos 🆗
router.get('/all', (req, res, next) => {
 Wish.find({user:req.user._id})
    .then(allWishes => {
      
      res.json(allWishes)
    })
    .catch(err => next(err))
})

//Mostrar uno 🆗
router.get('/:id', (req, res, next) => {

  Wish.findById(req.params.id)
    .then(oneWish => {
      res.json(oneWish)
    })
    .catch(err => console.log(err))
})

//Actualizar 🆗

router.put("/:id", (req, res, next) => {
  Wish.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedWish =>
    res.json(updatedWish)
  );
});



//Crear 🆗

router.post("/new", (req, res, next) => {
  
  const newWish = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    date: req.body.date,
    deadline: req.body.deadline,
    image: req.body.image,
    wishGranted: req.body.wishGranted,
    user: req.user._id
  }


  return Wish.create(newWish)
  .then(createdWish => {
    res.json(createdWish)
  });
});


//Eliminar 🆗

router.delete("/:id", (req, res, next) => {
  Wish.findByIdAndDelete(req.params.id).then(deletedWish =>
    res.json({ deleted: true, deletedWish })
  );
});

module.exports = router;


