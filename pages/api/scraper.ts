export default async (req, res) => {
    console.warn(`req.body.url`, req.body.url)
    if (req.method === 'POST') {
        try {
            const response = await fetch(req.body.url)
            const htmlString = await response.text()
            res.statusCode = 200
            return res.json({
                html: htmlString,
            })
        } catch (e) {
            res.statusCode = 404
            console.warn(`e`, e)
            return res.json({
                error: `${e}`,
            })
        }
    }
}
