import { useSelector } from "react-redux"
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/todo-item"
import { RootState } from "../store"

export const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos)
  
  return (
    <div className="container">
        {
          todoList.map((todo: ToDo, i: number) => {
            return (<ListItem todo={todo} num={i} key={todo.id} />)
          })
        }        
    </div>
  )
}