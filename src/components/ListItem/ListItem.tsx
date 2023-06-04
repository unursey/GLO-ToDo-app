import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = (props: { todo: ToDo, num: number} ) => {
  return (
    <ListItemLink 
      todo={props.todo.isDone}
      target="_blank"
      rel="noreferrer"
      href={`/list/${props.todo.id}`}>
        {`${props.num + 1}. ${props.todo.text}`}
      </ListItemLink>
  )
}