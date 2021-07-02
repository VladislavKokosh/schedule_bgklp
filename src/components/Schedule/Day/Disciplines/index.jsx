import React from 'react'
import Item from './Item'

const Disciplines = ({ disciplines }) => {
  console.log(disciplines);
  return(
    <div className='day__discipline'>
      {disciplines.map((discipline, index) =>(
        <Item
          discipline={discipline}
        />
      ))}
    </div>
  )
}

export default Disciplines
