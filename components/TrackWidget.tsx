import styled from '@emotion/styled'
import { theme } from '../utils/theme'
import { Track } from '../utils/types'
import { useStates } from '../utils/useStateObject'

export function TrackWidget(props: { track: Track }) {
    const state = useStates({ loaded: false })
    if (state.loaded && props.track.url) {
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
    } else {
        return <Title onClick={() => (state.loaded = true)}>{props.track.title}</Title>
    }
}

const Title = styled('div')`
    cursor: pointer;
    color: ${theme.palette.secondary.light};
    min-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
