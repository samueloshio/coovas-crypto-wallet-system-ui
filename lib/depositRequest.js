import toast from 'react-hot-toast';
import request from '../config/api';

export default async function depositRequest(params, setActionLoader) {
  setActionLoader(true);
  try {
    const { data } = await request.post('/deposits', { ...params });
    setActionLoader(false);
    window.location.href = data.redirect;
    return data;
  } catch (error) {
    const { data } = error.response;
    setActionLoader(false);
    toast.error(data.message, { position: 'bottom-center' });
  }
  return null;
}
