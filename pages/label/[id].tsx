import { useRouter } from 'next/router'
import { AppProvider } from '../../components/views/AppProvider'
import { Label } from '../../components/views/Label'
import { useDb } from '../../utils/db'
import { store, useStore } from '../../utils/store'

export default () => {
    useStore()
    useDb()
    const router = useRouter()
    const {
        query: { id },
    } = router
    if (!id || Array.isArray(id)) return null
    const label = store().labels.find(l => l.id === id)
    if (!label) return null
    return (
        <AppProvider>
            <Label label={label} />
        </AppProvider>
    )
}
