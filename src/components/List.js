import React ,{useState} from 'react';
import { ListItem } from "./ListItem";
import { higherOrderComponent } from "./WithStorage";


export const ListComp = ({saveToStorage, getFromStorage}) => {
  const savedItems = getFromStorage()
  const [items, setItems] = useState(savedItems);
  const [todo, setTodo] = useState('');

  const onInputChange = (event) => {
    setTodo(event.target.value)
  } 
  
  const onDoneClick = ( changedItem ) => {
    const newItems = items.map(item => item === changedItem? {text:item.text, done:!item.done}: item);
    setItems(newItems);
  }

  const onAddItem = () => {
    const newItems = [...items,{text:todo, done:false} ]
    saveToStorage(newItems)
    setItems(newItems);
    setTodo('');
    
  }
   
   const onRemoveItem = (item) => {
    setItems(items => items.filter(listItems => item!== listItems));
   }

  return (
    <>
      <h1>ToDo App</h1>

      <div>
        <input  data-testid="todo-text" value={todo} onChange={(e) => onInputChange(e)}/>
        <button onClick={onAddItem} >Add</button>
        <ul>
          {
            items.map(item => <li key={item.text}> <ListItem item={item} onDone={onDoneClick} onRemoveItem={onRemoveItem}/> </li>)
          }
        </ul>

      </div>
    </> 
  )

}

export const List = higherOrderComponent(ListComp);