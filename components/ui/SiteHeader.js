import useCheckAuth from '@/data/useCheckAuth';
import Link from 'next/link';
import React, { useState } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { BiMenu, BiUserPlus } from 'react-icons/bi';
import { RiDashboardLine } from 'react-icons/ri';

const SiteHeader = () => {
  const { data, loading } = useCheckAuth();
  const [show, setShow] = useState(false);
  return (
    <>
      <header className='site-header'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-12'>
              <Navbar expand='lg'>
                <Link href={'/'}>
                  <Link className='site-logo navbar-brand'>
                    {/* <Image
                      src={`${apiUrl?.param1}/public/${logo?.param1}`}
                      alt='Logo'
                    /> */}
                    Organie
                  </Link>
                </Link>
                <button
                  type='button'
                  onClick={() => setShow(!show)}
                  aria-label='Toggle navigation'
                  className='navbar-toggler collapsed'
                >
                  <span className='navbar-toggler-svg'>
                    <BiMenu />
                  </span>
                </button>
                <div
                  className={`navbar-collapse collapse ${
                    show ? 'show' : 'hide'
                  }`}
                >
                  <Nav className='ml-auto mainmenu'>
                    {/* {mainMenu?.map((item) => (
                      <div key={item.id}>{item.url} </div>
                      // <Link href={`item.url`} key={item.id}>
                      //   <Link className='nav-link'>{item.name}</Link>
                      // </Link>
                    ))} */}
                    {loading ? (
                      <Link href={'/'}>
                        <Link
                          className='bttn-small btn-ylo header-btn'
                          style={{ minWidth: '140px', textAlign: 'center' }}
                        >
                          <Spinner animation='border' role='status' size='sm'>
                            <span className='visually-hidden'>Loading...</span>
                          </Spinner>
                        </Link>
                      </Link>
                    ) : (
                      // <Link href={data ? '/dashboard' : '/login'}>
                      <div className='bttn-small btn-ylo header-btn'>
                        {data ? <RiDashboardLine /> : <BiUserPlus />}
                        {data ? 'Dashboard' : 'Login/Register'}
                      </div>
                      // </Link>
                    )}
                  </Nav>
                </div>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SiteHeader;
