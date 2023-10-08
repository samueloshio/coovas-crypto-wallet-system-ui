import toast from 'react-hot-toast';
import { mutate } from 'swr';
import request from '../config/api';

export default async function withdrawUpdate(id, type, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.put(`/withdraws/${id}/${type}`);
    setActionLoader(false);
    mutate(`/withdraws/${id}/admin`);
    toast.success(data.message, { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
