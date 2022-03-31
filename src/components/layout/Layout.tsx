import React from 'react';
import { Header, Footer } from './';
import {
  containerDoc,
} from '../../styles/components/layout/layout.module.css';
import '../../styles/reset.css';

type ReactChild = { children : React.ReactNode };

const Layout: React.FC<ReactChild> = ( { children }) => {
  return (
    <div className={containerDoc}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;