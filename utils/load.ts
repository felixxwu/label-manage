import { store } from './store'

export async function load<T extends Array<any>, U>(fn: (...args: T) => U, ...args: T) {
  store().loading = true
  const res = await fn(...args)
  store().loading = false
  return res
}
