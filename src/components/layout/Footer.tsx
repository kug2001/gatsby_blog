import React from 'react';
import * as styles from '../../styles/components/layout/footer.module.css';

type Props = {};

const Footer: React.FC<Props> = ( props ) => {

  return (
    <footer className={styles.docFooter}>
      <strong className={styles.titFooter}> Blog created by Jayden | Designed by Jayden</strong>
    </footer>
  )
}

export default Footer;