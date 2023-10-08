import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiCheck, BiX } from 'react-icons/bi';
// import { useDepositAll } from '../data/useDeposits';
// import useLinkeds from '../data/useLinkeds';
import Loader from './Loader';

const Welcome = ({ userData, settings }) => {
  // const { data, loading } = useDepositAll(1, 10);
  // const { data: linkedAcc, loading: linkedLoading } = useLinkeds();
  const { t } = useTranslation();

  // if (loading || linkedLoading) {
  //   return <Loader height="225px" />;
  // }

  return (
    <>
      <div className='welcome-status'>
        <h4 className='box-title'>
          {t('Welcome')} {/* {userData?.name} */} Dede !
        </h4>
        <p>
          {t('To')}{' '}
          {/* {t('To')} {settings?.site?.param1}.{' '} */}
          {t('You can deposit money to your wallet and start exchanging.')}
        </p>
        <ul>
          <li>
            <Link href='/settings?tab=1'>
              {/* {userData?.kyc ? (
                  <BiCheck className="check" />
                ) : (
                  <BiX className="cross" />
                  )} */}
              <BiX className='cross' />
              {t('KYC Verified')}
            </Link>
          </li>
          <li>
            <Link href='/add-money'>
              {/* {data?.count ? (
                  <BiCheck className="check" />
                ) : (
                  <BiX className="cross" />
                  )} */}
              <BiX className='cross' />
              {t('Deposit Money')}
            </Link>
          </li>
          <li>
            <Link href='/settings?tab=2'>
              {/* {linkedAcc?.count ? (
                <BiCheck className='check' />
              ) : (
                <BiX className='cross' />
                )} */}
                <BiX className='cross' />
              {t('Connect Withdrawal Method')}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Welcome;
