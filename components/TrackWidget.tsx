import styled from '@emotion/styled'
import { theme } from '../utils/theme'
import { Track } from '../utils/types'

export function TrackWidget(props: { track: Track }) {
  if (props.track.url) {
    return (
      <iframe
        width='100%'
        height='20'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          props.track.url
        )}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
      ></iframe>
    )
  }
  return null
}

const Title = styled('div')`
  cursor: pointer;
  color: ${theme.palette.secondary.light};
  min-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
