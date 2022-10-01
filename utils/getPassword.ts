import { consts } from './consts'

export function getPassword() {
    return new URLSearchParams(window.location.search).get(consts.urlPasswordParam)
}
