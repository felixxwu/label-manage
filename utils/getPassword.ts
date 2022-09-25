export function getPassword() {
    return new URLSearchParams(window.location.search).get('p')
}
