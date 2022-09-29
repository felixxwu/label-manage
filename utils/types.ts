import { Firestore } from 'firebase/firestore'
import { Item } from '../components/ListItem'

export interface Store {
    db: Firestore
    error: string
    list: Item[]
    selectedLabelId: string
}
