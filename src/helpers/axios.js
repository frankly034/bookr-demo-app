import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bookrr-app.herokuapp.com/api/',
  headers: {
    'x-auth': localStorage.getItem('bookrToken'),
  },
});

export default instance;
