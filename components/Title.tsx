import styled from '@emotion/styled'

export function Title(props: { children: React.ReactNode }) {
  return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
