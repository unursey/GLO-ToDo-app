import { ToDo } from '../../models/todo-item'
import { ToDoListBlock, ToDoListContainer } from './ToDoList.styled'
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
  
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem 
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo} 
            deleteToDo={props.deleteToDo} 
          />
        )
      })
  }

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, idx) => {
        return (
          <ToDoListItem 
            toDoItem={item}
            key={idx}
            updateToDo={props.updateToDo} 
            deleteToDo={props.deleteToDo} 
          />
        )
      })
  }

  return (
    <ToDoListContainer>
      <ToDoListBlock className="failed">
        {checkedList()}
      </ToDoListBlock>
      <ToDoListBlock className="completed">
      {unCheckedList()}
      </ToDoListBlock>
    </ToDoListContainer>
  )
}