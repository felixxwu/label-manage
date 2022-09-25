import { consts } from '../utils/consts'

export function Button(props: { text: string; onClick: () => void; disabled: boolean }) {
    function handleClick() {
        if (!props.disabled) props.onClick()
    }
    return (
        <>
            <button onClick={handleClick}>{props.text}</button>

            <style jsx>{`
                button {
                    outline: none;
                    width: 150px;
                    background-color: #ffffff;
                    border: none;
                    padding: 15px;
                    border-radius: ${consts.borderRadius}px;
                    font-size: 15px;
                    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
                    font-weight: bold;
                    opacity: ${props.disabled ? 0.5 : 1};
                }
            `}</style>
        </>
    )
}
