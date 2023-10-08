import toast from 'react-hot-toast';
import { mutate } from 'swr';
import request from '../config/api';

export default async function methodUpdate(id, params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.put(`/methods/${id}`, { ...params });
    setActionLoader(false);
    mutate(`/methods/${id}`);
    toast.success(data.message, { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
export async function methodCreate(params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.post('/methods', { ...params });
    setActionLoader(false);
    mutate('/methods');
    toast.success('New Method Added', { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
export async function methodDelete(id) {
  try {
    const { data } = await request.delete(`/methods/${id}`);
    mutate('/methods');
    mutate('/methods/admin');
    toast.success('Method Deleted Successfully', { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
