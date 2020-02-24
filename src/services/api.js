import axios from 'axios';

const api = axios.create({
  // everytime ngrok starts, copy here first forwarding url
  baseURL: 'http://f8087b3b.ngrok.io',
});

export default api;
