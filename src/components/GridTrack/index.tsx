import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faMusic } from '@fortawesome/free-solid-svg-icons'
import {
  AlbumPhoto,
  AlbumPhotoOverlay,
  AlbumPhotoWrapper,
  Subtitle,
  Title,
  Wrapper,
} from './styledComponents'

type GridTrackProps = {
  track: Track
  current: boolean
  paused: boolean
  selectTrack: (trackId: number) => void
}

const GridTrack: FC<GridTrackProps> = (props) => {
  const { track, current, paused, selectTrack } = props

  return (
    <Wrapper>
      <AlbumPhotoWrapper onClick={() => selectTrack(track.id)}>
        <AlbumPhoto alt={track.title} src={track.album.cover_medium} />
        <AlbumPhotoOverlay className='photo-overlay' current={current}>
          <FontAwesomeIcon
            color='#FFF'
            size='3x'
            icon={current ? faMusic : faPlay}
            beat={current && !paused}
          />
        </AlbumPhotoOverlay>
      </AlbumPhotoWrapper>
      <Title>{track.title}</Title>
      <Subtitle>{track.album.title}</Subtitle>
    </Wrapper>
  )
}

export default GridTrack
