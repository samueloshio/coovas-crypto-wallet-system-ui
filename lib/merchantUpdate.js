import toast from 'react-hot-toast';
import { mutate } from 'swr';
import request from '../config/api';

export default async function merchantUpdate(id, params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.put(`/merchants/${id}`, { ...params });
    setActionLoader(false);
    mutate(`/merchants/${id}`);
    toast.success('Merchant Updated', { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
export async function merchantDelete(id, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.delete(`/merchants/${id}`);
    setActionLoader(false);
    window.location.href = '/admin/merchants';
    toast.success('Merchant Removed', { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
export async function merchantDeleteFromUser(userId, id, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.delete(`/merchants/${id}`);
    setActionLoader(false);
    window.location.href = `/admin/users/${userId}`;
    toast.success('Merchant Removed', { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
export async function merchantCreate(params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.post('/merchants', { ...params });
    setActionLoader(false);
    mutate(`/users/${params?.userId}`);
    toast.success('User Converted To Merchant', { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
