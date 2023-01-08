import axios from 'axios'
import store from '../store/index.js'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});

//ユーザーログイン時に使用
const authApi = Object.assign({}, api);
authApi.interceptors.request.use(config => {
  config.headers = {
    'Authorization': 'Bearer ' + store.getters.getAccessToken
  }
  return config;
});

export { authApi };