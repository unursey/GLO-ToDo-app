import { ToDo } from '../../../models/todo-item'
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled'
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'
import { toast } from 'react-toastify';

export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemControls>
          <ToDoItemControl
            className="btn-trash"
            icon={trashIcon}
            onClick={() => {
              props.deleteToDo(props.toDoItem)
              toast.success("Задача успешно удалена!")
            }}
          ></ToDoItemControl>
          <ToDoItemControl 
            icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
            onClick={() => {
              props.updateToDo(props.toDoItem)
              props.toDoItem.isDone ?
              toast.success("Задача выполнена!") : toast.success("Задача активна!")
            }}
          ></ToDoItemControl>
      </ToDoItemControls>
    </ToDoItem>
  )
}