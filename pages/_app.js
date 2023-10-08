import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useTranslation } from 'react-i18next';
import 'react-toggle/style.css';
import { SWRConfig } from 'swr';
import '@/i18n/i18n';
import '@/styles/global.scss';
import request from '@/config/api';
import { Toaster } from 'react-hot-toast';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const fetcher = (url) =>
  request
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });

export default function App({ Component, pageProps }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang') || 'en');
  }, []);

  return (
    <SWRConfig value={{ fetcher }}>
      <Toaster />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
