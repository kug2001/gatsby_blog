import React from 'react';
import { Header, Footer } from '@components/layout';
import * as styles from '@styles/components/layout/layout.module.css';
import '@styles/reset.css';
import useSome from '@common/util/customComponent';

type ReactChild = { children : React.ReactNode };

const Some = () => {
  return (
    <Footer />
  )
}

const Layout: React.FC<ReactChild> = ( { children }) => {

  const boolean = useSome(true, true, false);

  return (
    <div className={styles.containerDoc}>
      {boolean && <Header />}
      {children}
      <Some></Some>
    </div>
  )
}

export default Layout;