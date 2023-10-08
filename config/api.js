import { publicRuntimeConfig } from '@/next.config';
import axios from 'axios';

const request = axios.create({
  baseURL: publicRuntimeConfig.apiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default request;
