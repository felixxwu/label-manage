import { Store } from '../utils/store'
import { Label } from '../utils/types'
import { updateDocTyped } from '../utils/db'
import { Chips } from './Chips'
import { StylesSelector } from './StylesSelector'

export function StylesForm(props: { label: Label; store: Store }) {
    return (
        <Chips
            title='Styles:'
            dbKey='styles'
            label={props.label}
            store={props.store}
            addDialog={({ addItem, closeDialog }) => {
                async function handleStyleSelection(style: string) {
                    await updateDocTyped(props.store.db, props.label.id, {
                        styles: props.label.styles.concat(style),
                    })
                    closeDialog()
                }

                return <StylesSelector label={props.label} store={props.store} onSelectStyle={handleStyleSelection} />
            }}
        />
    )
}
