import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import * as styles from '@styles/components/atom/pagination.module.css'

type Props = {
  total : number;
  currentPage : number;
  perPage : number;
  target(page:number|null):void;
}

const Pagination:React.FC<Props> = (props) => {

  const { total, currentPage, perPage, target } = props;

  const [ pageNumber, setPageNumber ] = useState<(number|null)[]>([]);

  useEffect(()=> {
    renderNumber();
  }, [currentPage])

  const maxPage = Math.ceil(total/perPage);
  const quotient = Math.floor(currentPage / perPage);
  const remainder = currentPage % perPage;
  const quotientPerPage = quotient * perPage;

  const startPage = ():number => {
    const startPage = remainder !== 0 ? currentPage - remainder + 1 : currentPage - quotientPerPage + 1;
    return startPage;
  }

  const endPage = ():number => {
    const endPage = remainder !== 0 ? currentPage - remainder + perPage : currentPage - quotientPerPage + perPage;
    return (maxPage < endPage) ? maxPage : endPage;
  }


  const renderNumber = ():void => {
    const pageLangth = endPage() - startPage() + 1;
    const arr:(number|null)[] = Array(pageLangth).fill(0);
    const data = arr.map((item,index) => startPage()+index);
    setPageNumber([...data]);
  }
  
  const handleTargetPage = (item:number|null):void => {
    target(item);
  }

  const handlePrevPage = ():void => {
    startPage() - 1 === 0 ? target(1) : target(startPage() - 1);
  }

  const handleNextPage = ():void => {
    endPage() < maxPage ? target(endPage() + 1) : null;
  }

  const handlePerPrevPage = ():void => {
    target(1);
  }

  const handlePerNextPage = ():void => {
    target(maxPage);
  }

  return (
    <div className={styles.itemPaging}>
      <em className='screen_out'>페이지 이동하기</em>
      <a className={styles.linkPrev} href="#" onClick={handlePerPrevPage}>&lt;&lt;</a>
      <a className={styles.linkPrev} href="#" onClick={handlePrevPage}>&lt;</a>
      {
        pageNumber.map((item:number|null, index:number)=> {
          return(
            <a className={`${styles.linkPage} ${item === currentPage ? styles.active : ''}`} onClick={()=>handleTargetPage(item)} key={item}>
              {item}
            </a>
          )
        })
      }
      <a className={styles.linkNext} href="#" onClick={handleNextPage}>&gt;</a>
      <a className={styles.linkNext} href="#" onClick={handlePerNextPage}>&gt;&gt;</a>
    </div>
  )
}

export default Pagination