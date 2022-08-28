import React from 'react'

import DownArrowIcon from '../../common/DownArrowIcon/DownArrowIcon'
import UpArrowIcon from '../../common/UpArrowIcon/UpArrowIcon'

export default function ReadMoreReadLess({ readMoreReadLess, setReadMoreReadLess}) {

  function handleSetViewMore(){
    setReadMoreReadLess(prevReadMoreReadLess => !prevReadMoreReadLess)
  }

  return (
    <div onClick={handleSetViewMore} className='view-more-view-less-container'>
      { readMoreReadLess ? <p>VER MENOS<UpArrowIcon/> </p> : <p>VER MÁS<DownArrowIcon/></p>} 
    </div>
  )
}
