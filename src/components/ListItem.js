import React from 'react'


export const ListItem = ({item, onDone, onRemoveItem}) => {
  return (
    <div className="item">
      <div className="icon" />   
      <div className="title">{item.text}</div>
      {item.done? <span>V</span>: <span>X</span>}
      <button onClick={()=> onDone(item)}>Toggle Done</button>
      <button onClick={() =>onRemoveItem(item)}>Remove</button>
      
    </div>
  )

}