const express = require('express');
const router  = express.Router();
const wishes = require('../models/Wish')

// router.get('/wishes', (req, res, next) => {
//   res.render('/wishes')
// });


//Mostrar todos
router.get('/all', (req, res, next) => {
 wishes.find()
    .then(allWishes => {
      res.json(allWishes)
    })
    .catch(err => next(err))
  console.log('error');
})

router.get('/:id', (req, res, next) => {
  console.log(req.params.id)
  Wish.findById(req.params.id)
  .then(oneWish => {
    res.json(oneWish)
  })
  .catch(err => next(err))
  console.log('error')
})


//Actualizar
router.put('/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Wish.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Wish with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})



//Crear
router.post('/new', (req, res, next)=>{
  // const {title, description, price, date, deadline, wishGranted} = req.body;

  Wish.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    date: req.body.date,
    deadline: req.body.deadline,
    image: req.body.image
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

//Eliminar
router.delete('/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Wish.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Wish with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})

module.exports = router;


/////////////////////////////////////////////////////////////////
router.get('/celebrities/new', (req, res, next) => {
  res.render('celebrities/new')
})

router.post('/celebrities/new', (req, res, next) => {
  Celebrity.create(req.body).then(_ => {
    res.redirect('/celebrities')
  })
})

  

router.get('/celebrities/:id', (req, res, next) => {

  const id = req.params.id
  console.log(req.params)

  Celebrity.findById(id)
    .then(oneCelebrity => {
      res.render('celebrities/show', oneCelebrity);
    })
    .catch(err => console.log('err'))
});

router.get("/celebrities/edit/:id", (req, res) => {
  const id = req.params.id

  Celebrity.findById(id)
    .then(data => res.render('celebrities/edit', data))

});

router.post('/celebrities/:id/', (req, res, next) => {
  Celebrity
    .findByIdAndUpdate({
      _id: req.params.id
    }, req.body)
    .then(updatedCeleb => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      next();
      console.log(`There has been an error creating the new celeb: \n ${err}`);
    })
})

router.post('/celebrities/delete/:id', (req, res, next) => {
  const id = req.params.id

  Celebrity.findByIdAndDelete(id)
    .then(_ => res.redirect('/celebrities'))
})



module.exports = router;