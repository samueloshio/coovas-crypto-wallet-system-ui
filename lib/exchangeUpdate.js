import toast from 'react-hot-toast';
import { mutate } from 'swr';
import request from '../config/api';

export default async function exchangeUpdate(id, type, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.put(`/exchanges/${id}/${type}`);
    setActionLoader(false);
    mutate(`/exchanges/${id}/admin`);
    toast.success(data.message, { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
