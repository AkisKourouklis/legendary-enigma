import axios from "axios"
import { apiUrl } from "../config/vars"

interface IError {
  message: string
  uuid: string
}

export const createError = async ({ message, uuid }: IError) => {
  try {
    axios.post(`${apiUrl.uri}/errors`, {
      message,
      uuid,
    })
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error)
  }
}
