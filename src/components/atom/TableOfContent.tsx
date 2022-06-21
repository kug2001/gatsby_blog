import React from 'react'

type Props = {
  content: string;
}

export const TableOfContent:React.FC<Props> = ({content}) => {

  return (
    <>
      <div 
        className='tableOfContent'
        dangerouslySetInnerHTML={ {__html:content }}
      />
    </>
  )
}
