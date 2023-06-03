import { createAction  } from "../../feature/todoList"
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { setTextAction, delTextAction } from '../../feature/todoText'

import plusIcon from '../../assets/images/plus.png'
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from "./Form.styled"

export const Form = () => {
  const text = useSelector((state: RootState) => state.todoText.text)
  const dispatch = useDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setTextAction(value));
  };

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text) {
      dispatch(createAction(text));
      dispatch(delTextAction());
    }
  }

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
          <FormLabel>
              <FormField 
                value={text} 
                type="text"
                onChange={handleInputChange}
              />
              <FormControl icon={plusIcon}/>
          </FormLabel>
      </FormBlock>
    </FormWrapper>
  )
}
