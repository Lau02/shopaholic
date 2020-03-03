import axios from 'axios';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/api/index',//???????????????????
      withCredentials: true
    });
  }

//   singlewish = () => {
//     return this.service.get('/currentUser',)
//     .then(response => response.data)
//   }
}

export default Service;
