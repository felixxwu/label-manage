import { Firestore } from 'firebase/firestore'

export interface Store {
    db: Firestore
    error: string
    list: Item[]
    selectedLabelId: string
}

export interface Item {
    id: string
    name: string
    link: string
}
