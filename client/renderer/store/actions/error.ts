import { CLEAR_ERROR, CREATE_ERROR } from "../types"
interface INotification {
  message: string
  description: string
  type: "success" | "info" | "warning" | "error"
}

export const createNewError = ({
  message,
  description,
  type,
}: INotification) => ({
  type: CREATE_ERROR,
  payload: {
    message,
    description,
    type,
  },
})

export const clearNewError = () => ({
  type: CLEAR_ERROR,
})

export const createError = ({ message, description, type }: INotification) => {
  return (dispatch) => {
    dispatch(createNewError({ message, description, type }))
  }
}

export const clearError = () => {
  return (dispatch) => {
    dispatch(clearNewError())
  }
}
