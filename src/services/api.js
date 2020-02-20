import axios from 'axios';

const api = axios.create({
  // everytime ngrok starts, copy here first forwarding url
  baseURL: 'http://d2727b29.ngrok.io',
});

export default api;
