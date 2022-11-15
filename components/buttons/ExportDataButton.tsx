import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { store } from '../../utils/store'

export function ExportDataButton() {
    function handleExport() {
        const filename = 'data.json'
        const jsonStr = JSON.stringify(store().labels.map(label => ({ ...label, image: '' })))

        let element = document.createElement('a')
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr))
        element.setAttribute('download', filename)

        element.style.display = 'none'
        document.body.appendChild(element)

        element.click()

        document.body.removeChild(element)
    }
    return (
        <Button onClick={handleExport} startIcon={<DownloadIcon />}>
            Export Data
        </Button>
    )
}
