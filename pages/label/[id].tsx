import { useRouter } from 'next/router'
import { Label } from '../../components/views/Label'
import { store, useStore } from '../../utils/store'

export default () => {
    const router = useRouter()
    const {
        query: { id },
    } = router
    if (!id || Array.isArray(id)) return null
    const label = store().labels.find(l => l.id === id)
    if (!label) return null
    return <Label label={label} />
}
