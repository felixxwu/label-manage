import { AppProvider } from '../../components/views/AppProvider'
import { Music } from '../../components/views/Music'
import { useDb } from '../../utils/db'
import { useStore } from '../../utils/store'

export default () => {
    useStore()
    useDb()

    return (
        <AppProvider>
            <Music />
        </AppProvider>
    )
}
