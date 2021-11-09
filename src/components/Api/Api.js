import axios from 'axios';

const Api = axios.create({ baseURL: 'https://www.superheroapi.com/api.php/10160703143844316' });

export default Api;