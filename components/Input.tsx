import { addDoc, collection, Firestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { getPassword } from '../utils/getPassword'
import { Button } from './Button'

export function Input(props: { db: Firestore }) {
    const [text, setText] = useState('')

    return (
        <div className='inputArea'>
            <input
                value={text}
                onChange={handleChange}
                type='url'
                name='Input URL'
                placeholder='Type label name...'
                autoFocus
                autoComplete='off'
            />
            <Button text='ADD' onClick={handleAdd} disabled={text.length === 0} />

            <style jsx>{`
                .inputArea {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    padding-top: 30vh;
                    flex-direction: column;
                    gap: 20px;
                }

                input {
                    font-size: 30px;
                    outline: none;
                    border: none;
                    text-align: center;
                    color: white;
                    background-color: transparent;
                }
            `}</style>
        </div>
    )

    async function handleAdd() {
        if (text) {
            try {
                await addDoc(collection(props.db, getPassword()), {
                    name: text,
                })
                setText('')
            } catch (e) {
                alert(e)
            }
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }
}
