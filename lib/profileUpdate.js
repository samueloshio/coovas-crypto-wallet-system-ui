import toast from 'react-hot-toast';
import { mutate } from 'swr';
import request from '../config/api';

export default async function profileUpdate(params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.put('/users/me', { ...params });
    setActionLoader(false);
    mutate('/users/me');
    toast.success(data.message, { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
export async function profileUpdateAdmin(id, params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.put(`/users/${id}`, { ...params });
    setActionLoader(false);
    mutate(`/users/${id}`);
    toast.success(data.message, { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
export async function userDelete(id, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.delete(`/users/${id}`);
    setActionLoader(false);
    window.location.href = '/admin/users';
    toast.success(data.message, { position: 'bottom-center' });
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
