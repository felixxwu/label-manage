import Head from 'next/head'
import React, { MouseEventHandler, useRef, useState } from 'react'

export default function Home() {
    const [list, setList] = useState([])
    const input = useRef<HTMLInputElement>(null)

    function handleAdd() {
        console.log('add', input.current.value)
        if (input.current.value) {
            setList(list.concat(input.current.value))
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
                        return <div className='listItem' key={i}>{li}</div>
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
