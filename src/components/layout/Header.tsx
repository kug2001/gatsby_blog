import React from 'react';
import { Link } from "gatsby"
import * as styles from '../../styles/components/layout/header.module.css';

type Props = {};

const Header: React.FC<Props> = ( props ) => {
  return (
    <header className={styles.docHeader}>
      <h1>
        <Link to="/">Bridge Builder의 블로그</Link>
      </h1>
      <nav className={styles.navBar}>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
        </ul>
        {/* <div>
          <span>클릭</span>
          <span>클릭</span>
        </div> */}
      </nav>
    </header>
  )
}

export default Header;