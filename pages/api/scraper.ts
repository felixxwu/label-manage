export default async (req, res) => {
    if (req.method === 'POST') {
        console.log(`req.body.url`, req.body.url)
        try {
            const response = await fetch(req.body.url)
            const htmlString = await response.text()
            res.statusCode = 200
            return res.json({
                html: htmlString,
            })
        } catch (e) {
            res.statusCode = 404
            console.log(`e`, e)
            return res.json({
                error: `${e}`,
            })
        }
    }
}
