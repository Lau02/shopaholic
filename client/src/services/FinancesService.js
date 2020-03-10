import axios from 'axios';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API}/finances`,//'http://localhost:5000/api/finances',//???????????????????
      withCredentials: true
    });
  }

  getAllSavings = () => {
    return this.service.get('/all')
    .then(response => response.data)
  }

  getNewSaving = (saving) => {
    return this.service.post('/new', saving)
    .then(response => response.data)
  }



  deleteFinance = (id) => {
    return this.service.delete('/:id')
    .then(response => response.data)
  }
}
export default Service;