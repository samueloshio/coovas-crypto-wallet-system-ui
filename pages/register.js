import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next';
import { CgBriefcase, CgUser } from 'react-icons/cg';
import LanguageSwitch from '../components/LanguageSwitch';
import Loader from '../components/Loader';
import useSettings from '../data/useSettings';
import checkAuthAccess from '../hoc/checkAuthAccess';
import { signUpRequest } from '../../lib/authRequest';

const Register = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { data, loading: settingsLoading } = useSettings();

  const router = useRouter();
  const { refer } = router.query;

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const params = {
      name: name?.value,
      email: email?.value,
      password: password?.value,
      refferedBy: refer,
    };
    signUpRequest(params, setLoading, setSuccess);
  };

  if (settingsLoading) {
    return <Loader height='100vh' />;
  }

  return (
    <>
      <Head>
        <title>
          {t('Register')} - {data?.site?.param1}
        </title>
        <link
          rel='icon'
          href={`${data?.apiUrl?.param1}/public/${data?.logo?.param2}`}
        />
      </Head>
      <div>
        <div className='container'>
          <div className='row justify-content-center align-items-center vh-100'>
            <div className='col-xl-5 col-lg-5 col-md-6 col-12'>
              <div className='site-auth'>
                <div className='lng-switch-cont'>
                  <LanguageSwitch />
                </div>
                <div className='logo'>
                  <a href='/'>
                    <img
                      src={`${data?.apiUrl?.param1}/public/${data?.logo?.param1}`}
                      alt='sitename'
                    />
                  </a>
                </div>
                <h3>{t('Registration')}</h3>
                <div className='account-type-selector'>
                  <Link href='/register' className='selector-item active'>
                    <CgUser />
                    <p>{t('Individual')}</p>
                  </Link>
                  <Link href='/register-merchant' className='selector-item'>
                    <CgBriefcase />
                    <p>{t('Merchant')}</p>
                  </Link>
                </div>
                {success ? (
                  <Alert variant='success'>
                    <Alert.Heading>{t('Activation Link Sent')}</Alert.Heading>
                    <p className='mb-0'>
                      {t(
                        'A mail to activate your account has been sent your email address'
                      )}
                      .
                    </p>
                  </Alert>
                ) : (
                  <form onSubmit={handleRegister}>
                    <input
                      name='name'
                      className='box-input'
                      type='text'
                      placeholder={t('Full Name')}
                      required
                    />
                    <input
                      name='email'
                      className='box-input'
                      type='email'
                      placeholder={t('Email Address')}
                      required
                    />
                    <input
                      name='password'
                      className='box-input'
                      type='password'
                      placeholder={t('Password')}
                      required
                    />
                    <button
                      disabled={loading}
                      type='submit'
                      className='bttn-mid btn-ylo w-100'
                    >
                      {loading ? (
                        <Spinner animation='border' role='status' size='sm' />
                      ) : (
                        t('Register Now')
                      )}
                    </button>
                  </form>
                )}
                <div className='form-bottom mt-20'>
                  <Link href='/login'>{t('Already have account')}?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default checkAuthAccess(Register);
// export default Register;
