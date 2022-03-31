import React from 'react';
import {
  docFooter,
  titFooter,
} from '../../styles/components/layout/footer.module.css';

type Props = {};

const Footer: React.FC<Props> = ( props ) => {

  return (
    <footer className={docFooter}>
      <strong className={titFooter}> Blog created by Jayden | Designed by Jayden</strong>
    </footer>
  )
}

export default Footer;