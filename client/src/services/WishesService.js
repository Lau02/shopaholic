import axios from 'axios';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API}/wishes`,//'http://localhost:5000/api/wishes',//???????????????????
      withCredentials: true
    });
  }
  getAllWishes =  () => {
    return this.service.get('/all')
    .then(response => response.data)
  }

  //wish is a parameter (a keyword) that this method received 
  getNewWish = (wish) => {
    return this.service.post('/new', wish)
    .then(response => response.data)
  }


  getOneWish = (id) => {
    return this.service.get('/' + id)
    .then(response => response.data)
  }

  updateOneWish = (id) => {
    return this.service.put('/:id')
    .then(response => response.data)
  }

  deleteOneWish = (id) => {
    return this.service.delete('/:id')
    .then(response => response.data)
  }
}

export default Service;
