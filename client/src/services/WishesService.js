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

  newWish = (title, description, price, date, deadline, wishGranted) => {
    return this.service.post('/new', {title, description, price, date, deadline, wishGranted})
    .then(response => response.data)
  }


  getOneWish = (id) => {
    return this.service.get('/' + id)
    .then(response => response.data)
  }
}





export default Service;
