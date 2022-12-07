import React from 'react'
import { Button } from '@mui/material'
import { useStore } from '../utils/store'
import { getAuth } from 'firebase/auth'
import { Google } from '@mui/icons-material'
import { useDb } from '../utils/db'
import { AppProvider } from '../components/views/AppProvider'
import { List } from '../components/views/List'

export default function App() {
    useStore()
    useDb()

    function signOut() {
        getAuth().signOut()
    }

    return (
        <AppProvider>
            <List />
            <Button startIcon={<Google />} onClick={signOut}>
                Sign out
            </Button>
        </AppProvider>
    )
}
