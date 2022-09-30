import React from 'react'
import { updateDocTyped } from '../utils/db'
import { theme } from '../utils/theme'
import { Label, Store } from '../utils/types'

export function NameForm(props: { label: Label; store: Store }) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        updateDocTyped(props.store.db, props.label.id, { name: e.target.value })
    }

    return (
        <>
            <input type='text' value={props.label.name} onChange={handleChange} />

            <style jsx>{`
                input {
                    font-size: 50px;
                    text-align: center;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    color: ${theme.palette.primary.main};
                    max-width: 100%;
                }
            `}</style>
        </>
    )
}
