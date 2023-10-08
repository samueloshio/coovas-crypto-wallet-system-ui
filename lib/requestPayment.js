import toast from 'react-hot-toast';
import { mutate } from 'swr';
import request from '../config/api';

export default async function requestPayment(params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.post('/requests', { ...params });
    setActionLoader(false);
    mutate('/users/me');
    mutate('/requests?sort_by=createdAt.desc&offset=0&limit=10');
    toast.success('Payment Request has been sent to the specified email', { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
