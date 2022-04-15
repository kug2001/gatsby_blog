import React from 'react';
import { Link } from "gatsby"
import {
  docHeader,
  list,
  navBar,
} from '../../styles/components/layout/header.module.css';

type Props = {};

const Header: React.FC<Props> = ( props ) => {
  return (
    <header className={docHeader}>
      <h1>
        <Link to="/">Bridge Builder의 블로그</Link>
      </h1>
      <nav className={navBar}>
        <ul className={list}>
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