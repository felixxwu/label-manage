import { Store } from '../utils/store'
import { Label } from '../utils/types'
import { updateDocTyped } from '../utils/db'
import { Chips } from './Chips'
import { StylesSelector } from './StylesSelector'

export function StylesForm(props: { label: Label; store: Store }) {
    async function handleDelete(style: string) {
        updateDocTyped(props.store.db, props.label.id, {
            styles: props.label.styles.filter(item => item !== style),
        })
    }

    return (
        <Chips
            title='Styles:'
            chips={props.label.styles}
            onDelete={handleDelete}
            addDialog={({ closeDialog }) => {
                async function handleStyleSelection(style: string) {
                    if (!props.label.styles.includes(style)) {
                        updateDocTyped(props.store.db, props.label.id, {
                            styles: props.label.styles.concat(style),
                        })
                    }
                    closeDialog()
                }

                return <StylesSelector store={props.store} onSelectStyle={handleStyleSelection} />
            }}
        />
    )
}
