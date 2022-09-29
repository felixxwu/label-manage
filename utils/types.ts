import { Firestore } from 'firebase/firestore'

export interface Store {
    db: Firestore
    error: string
    labels: Label[]
    selectedLabelId: string
}

export interface Label {
    id: string
    name: string
    link: string
}
