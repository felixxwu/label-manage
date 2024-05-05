import { store } from './store'

export async function snackError(message: string) {
  store().snackbar = ''
  await new Promise(r => setTimeout(r))
  store().snackbar = message
}

export function snackErrorReturn<T>(message: string, returnValue: T) {
  snackError(message)
  return returnValue
}
