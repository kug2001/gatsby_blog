import React from 'react';
import { Header, Footer } from './';
import * as styles from '../../styles/components/layout/layout.module.css';
import '../../styles/reset.css';

type ReactChild = { children : React.ReactNode };

const Layout: React.FC<ReactChild> = ( { children }) => {
  return (
    <div className={styles.containerDoc}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;