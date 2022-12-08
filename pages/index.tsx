import React from 'react'
import { useStore } from '../utils/store'
import { useDb } from '../utils/db'
import { AppProvider } from '../components/views/AppProvider'
import { List } from '../components/views/List'

export default function App() {
    useStore()
    useDb()

    return (
        <AppProvider>
            <List />
        </AppProvider>
    )
}
