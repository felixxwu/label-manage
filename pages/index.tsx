import Head from 'next/head'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'

import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { useInitDb } from './db'
import { getPassword } from './getPassword'

export default function Home() {
    const [list, setList] = useState<string[]>([])
    const input = useRef<HTMLInputElement>(null)
    const { db, error } = useInitDb()

    useEffect(() => {
        if (!db) return
        onSnapshot(collection(db, getPassword()), doc => {
            setList(doc.docs.map(doc => doc.data().name))
        })
    }, [db])

    if (error) return <>{error}</>
    if (!db) return <>loading...</>

    async function handleAdd() {
        if (input.current.value) {
            try {
                const docRef = await addDoc(collection(db, getPassword()), {
                    name: input.current.value,
                })
            } catch (e) {
                alert(e)
            }
        }
    }

    return (
        <>
            <main>
                <div className='inputArea'>
                    <input ref={input} type='url' name='Input URL' />
                    <button onClick={handleAdd}>add</button>
                </div>
                <div className='list'>
                    {list.map((li, i) => {
                        return (
                            <div className='listItem' key={i}>
                                {li}
                            </div>
                        )
                    })}
                </div>
            </main>

            <style jsx>{`
                main {
                     {
                        /* height: 100vh; */
                    }
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
                        Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }

                .inputArea {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                .list {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .listItem {
                    width: 300px;
                }
            `}</style>
        </>
    )
}
