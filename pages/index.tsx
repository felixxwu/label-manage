import Head from 'next/head'
import React from 'react'
import { consts } from '../utils/consts'
import { App } from '../components/App'
import { theme } from '../utils/theme'

export default function Home() {
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
                <App />
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
                    -webkit-tap-highlight-color: transparent;
                }

                main {
                    padding: ${consts.appEndSpace} 0;
                    text-align: center;
                    color: ${theme.palette.primary.main};
                }
            `}</style>
        </div>
    )
}
