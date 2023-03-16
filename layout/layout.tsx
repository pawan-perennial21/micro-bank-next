/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/layout.module.css';
import authLogin from '../assets/images/authLogin.jpg';
import authRegister from '../assets/images/authRegister.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';
interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <div className={styles.layout_container}>
      <div className={styles.banner_container}>
        {router.pathname === '/login' ? (
          <Image src={authLogin} alt="image" />
        ) : (
          ''
        )}
        {router.pathname === '/register' ? (
          <Image src={authRegister} alt="image" />
        ) : (
          ''
        )}
      </div>
      <div className={styles.form_container}>
        <div className={styles.form}>{children}</div>
      </div>
    </div>
  );
}
