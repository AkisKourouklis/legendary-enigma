import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import AuthReducer from "./reducers/auth"
import ErrorReducer from "./reducers/error"
import { IUser } from "./actions/auth"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from "redux-logger"
import { MakeStore } from "next-redux-wrapper"
import { createWrapper } from "next-redux-wrapper"
import { persistReducer } from "redux-persist"

const storage = require("redux-persist/lib/storage").default
const logger = createLogger({ collapsed: true })

export interface State {
  auth: {
    isLoading: boolean
    token: string
    user: IUser | null
    isAuth: boolean
  }
  error: {
    message: string | null
    description: string | null
    type: "success" | "info" | "warning" | "error" | null
    isError: boolean
  }
}

const rootReducer = combineReducers({
  auth: AuthReducer,
  error: ErrorReducer,
})

const persistConfig = {
  key: "root",
  whitelist: ["auth"],
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState: State = {
  auth: {
    isLoading: false,
    token: "",
    user: null,
    isAuth: false,
  },
  error: {
    message: null,
    description: null,
    type: null,
    isError: false,
  },
}

// create a makeStore function
const makeStore: MakeStore<State> = () =>
  createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true })
