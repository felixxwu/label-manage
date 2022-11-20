import { useState } from 'react'

export function useStates<Config extends {}>(config: Config) {
    const store = {}
    for (const key of Object.keys(config) as (keyof Config)[]) {
        const [value, setValue] = useState(config[key])
        Object.defineProperty(store, key, {
            get() {
                return value
            },
            set(newValue) {
                return setValue(newValue)
            },
        })
    }
    return store as Config
}
