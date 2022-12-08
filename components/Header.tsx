import styled from '@emotion/styled'
import { ReactNode } from 'react'

export function Header(props: { left?: ReactNode; children: ReactNode; right?: ReactNode }) {
    return (
        <Wrapper>
            {props.left ?? <Space />}
            {props.children}
            {props.right ?? <Space />}
        </Wrapper>
    )
}

const Wrapper = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Space = styled('div')`
    width: 40px;
`
