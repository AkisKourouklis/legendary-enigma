import update from 'immutability-helper'
import { AnyAction } from 'redux'
import { CREATE_ERROR, CLEAR_ERROR } from '../types'

export interface State {
  message: string | null
  description: string | null
  type: 'success' | 'info' | 'warning' | 'error' | null
  isError: boolean
}

const initialState: State = {
  message: null,
  description: null,
  type: null,
  isError: false,
}

const createError = (state: State, action: AnyAction) => {
  return update(state, {
    message: { $set: action.payload.message },
    description: { $set: action.payload.description },
    type: { $set: action.payload.type },
    isError: { $set: true },
  })
}

const clearError = (state: State) => {
  return update(state, {
    message: { $set: null },
    description: { $set: null },
    type: { $set: null },
    isError: { $set: false },
  })
}

const reducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_ERROR:
      return createError(state, action)
    case CLEAR_ERROR:
      return clearError(state)
    default:
      return state
  }
}

export default reducer
