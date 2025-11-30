import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import { consts } from '../../utils/consts'
import { updateDocTyped } from '../../utils/db'
import { getDaysAgo } from '../../utils/getDaysAgo'
import { nFormatter } from '../../utils/nFormatter'
import { theme } from '../../utils/theme'
import { Label } from '../../utils/types'
import { useStates } from '../../utils/useStateObject'
import { Progress } from '../Progress'

const descriptionLength = 100

export function NameForm(props: { label: Label }) {
  const state = useStates({ name: props.label.name, fullDescription: false })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    state.name = e.target.value
    updateDocTyped(props.label.id, { name: e.target.value })
  }

  function getDescription() {
    if (props.label.description.length === 0) return 'No description.'
    if (props.label.description.length > descriptionLength && !state.fullDescription) {
      return props.label.description.slice(0, descriptionLength) + '...'
    } else {
      return props.label.description
    }
  }

  return (
    <Wrapper>
      <TopRow>
        <Input
          type='text'
          value={state.name}
          onChange={handleChange}
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
        />
        <Progress {...props} />
      </TopRow>
      <BottomRow>
        <Description>
          <Typography variant='caption' color={theme.palette.primary.dark}>
            {getDescription()}
          </Typography>
          {props.label.description.length > descriptionLength && (
            <>
              &nbsp;
              <ShowMore
                variant='caption'
                onClick={() => (state.fullDescription = !state.fullDescription)}
              >
                {state.fullDescription ? 'show less' : 'show more'}
              </ShowMore>
            </>
          )}
        </Description>
        <InfoBar>
          <Typography variant='caption' color={theme.palette.primary.dark}>
            {nFormatter(props.label.followers, 0)} Followers •{' '}
            <span
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() =>
                window.open(
                  `https://open.spotify.com/search/label:${encodeURIComponent(
                    props.label.name
                  )}/tracks`,
                  '_blank'
                )
              }
            >
              {props.label.popularity || 0}% ({Math.round(props.label.popularityVariance || 0)})
              Popularity
            </span>
          </Typography>
          <Typography
            variant='caption'
            color={
              getDaysAgo(props.label) > consts.uploadWarning
                ? theme.palette.warning.light
                : theme.palette.primary.dark
            }
          >
            Last Upload: {getDaysAgo(props.label)} days
          </Typography>
        </InfoBar>
      </BottomRow>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const TopRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`

const BottomRow = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${theme.palette.secondary.main};
  padding: 10px;
  border-radius: ${consts.borderRadius}px;
`

const Input = styled('input')`
  font-size: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${theme.palette.primary.main};
  max-width: 100%;
  padding: 0;
`

const InfoBar = styled('div')`
  display: flex;
  justify-content: space-between;
`

const Description = styled('div')`
  & span {
    user-select: text;
  }
`

const ShowMore = styled(Typography)`
  display: inline-block;
  color: ${theme.palette.primary.dark};
  text-decoration: underline;
  cursor: pointer;
`
