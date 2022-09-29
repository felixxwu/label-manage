import Head from 'next/head'
import React, { useState } from 'react'

import { useInitDb } from '../utils/db'
import { Input } from '../components/Input'
import { List } from '../components/List'
import { consts } from '../utils/consts'
import { useLabelList } from '../utils/labelList'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../utils/theme'

export default function Home() {
    const { db, error } = useInitDb()
    const list = useLabelList(db)

    if (error) return <>{error}</>
    if (!db) return <>loading...</>

    return (
        <div>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap' rel='stylesheet' />
                <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
                <link rel='shortcut icon' href='/favicon.svg' />
                <title>Label Manager</title>
            </Head>

            <main>
                <ThemeProvider theme={theme}>
                    <Input db={db} />
                    <List list={list} />
                </ThemeProvider>
            </main>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    background-color: #222;
                }

                * {
                    box-sizing: border-box;
                    font-family: 'Lexend Deca', sans-serif;
                    user-select: none;
                }

                main {
                    padding: ${consts.appEndSpace} 0;
                }
            `}</style>
        </div>
    )
}
