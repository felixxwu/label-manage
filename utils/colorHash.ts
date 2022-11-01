export const getColorHash = (text: string) => {
    let count = 0
    for (const c of text.split('')) {
        count += c.toLowerCase().charCodeAt(0)
    }
    const hue = Math.round(count * 69420.69) % 360
    return `hsl(${hue}, 50%, 40%)`
}
