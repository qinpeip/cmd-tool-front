import Axios from 'axios';
const service = Axios.create({
  baseURL: 'http://localhost:1010'
});

export default service;