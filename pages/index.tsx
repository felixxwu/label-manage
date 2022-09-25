import Head from 'next/head'
import React from 'react'

import { useInitDb } from '../utils/db'
import { Input } from '../components/Input'
import { List } from '../components/List'

export default function Home() {
    const { db, error } = useInitDb()

    if (error) return <>{error}</>
    if (!db) return <>loading...</>

    return (
        <div>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap' rel='stylesheet' />
            </Head>

            <main>
                <Input db={db} />
                <List db={db} />
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
            `}</style>
        </div>
    )
}
