// base config for axios
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
});

export default instance;