import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Inter } from 'next/font/google';
import ComponentPicker from '@/components/ui/editor/ComponentPicker';
import SiteHeader from '@/components/ui/SiteHeader';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home({
  pageData,
  logo,
  site,
  mainMenu,
  footerMenu,
  apiUrl,
  info,
}) {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>
          {pageData?.name || t('404 Not Found')} - {site?.param1}
        </title>
        Organie
        <link rel='icon' href={`${apiUrl.param1}/public/${logo.param2}`} />
      </Head>
      <SiteHeader />
      <SiteHeader logo={logo} apiUrl={apiUrl} mainMenu={mainMenu} />
      {pageData?.content?.map((comp, index) => (
        <ComponentPicker
          key={String(index)}
          type={comp?.component}
          data={comp?.data}
          info={info}
        />
      ))}
      <Footer site={site} footerMenu={footerMenu} />
    </div>
  );
}

export async function getServerSideProps() {
  const { data: pageData } = await axios.get(
    'http://localhost:8888/home'
  );
  const { data } = await axios.get('http://localhost:8888/info');
  return {
    props: {
      pageData,
      logo: data?.logo,
      site: data?.site,
      apiUrl: data?.apiUrl,
      mainMenu: JSON.parse(data.mainMenu.param1),
      footerMenu: JSON.parse(data.footerMenu.param1),
      info: data,
    },
  };
}
