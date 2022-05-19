import React, { Children, useState } from 'react';
import * as styles from '@styles/common/md-components/counter.module.css';

type Props = {
  init?: number | null;
}

const Counter: React.FC<Props> = (props) => {

  const { init, children } = props;

  console.log(init);

  const [ counter, setCounter ] = useState<number>(init || 0);

  const handleIncrement = () => {
    setCounter(counter => {
      if(typeof counter !== 'number'){
        return parseInt(counter) + 1;
      }
      return counter + 1;
    });
  }

  const handleDecrement = () => {
    setCounter(counter => {
      return counter - 1;
    });
  }

  return (
    <span className={styles.areaCounter}>
      <button className={styles.btn} onClick={handleDecrement}>-1</button>
      <strong className={styles.tit}>{counter}</strong>
      {/* {children} */}
      <button className={styles.btn} onClick={handleIncrement}>+1</button>
    </span>
  )
}

export default Counter;