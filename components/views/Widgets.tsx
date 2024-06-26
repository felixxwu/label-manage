import styled from '@emotion/styled'
import { consts } from '../../utils/consts'
import { Label } from '../../utils/types'
import { TrackWidget } from '../TrackWidget'

export function Widgets(props: { label: Label }) {
  function TrackWidgets(p: { tracks: keyof Label['tracks'] }) {
    return (
      <WidgetsWrapper>
        {props.label.tracks[p.tracks].map(
          track =>
            track.url && (
              <Row key={track.url}>
                <Widget>
                  <TrackWidget track={track} />
                </Widget>
              </Row>
            )
        )}
      </WidgetsWrapper>
    )
  }

  return (
    <Wrapper>
      <h1>Recent Uploads</h1>
      <TrackWidgets tracks='recent' />
      <h1>Popular Uploads</h1>
      <TrackWidgets tracks='popular' />
      <h1>Reposts</h1>
      <TrackWidgets tracks='reposts' />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  max-width: 100%;
  width: ${consts.maxAppWidth}px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const WidgetsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: hsl(0deg 0% 78%);
  border-radius: ${consts.borderRadius}px;
  filter: invert(1);
`

const Widget = styled('div')`
  margin-top: 4px;
  width: -webkit-fill-available;
`

const Row = styled('div')`
  display: flex;
  gap: 5px;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
`
