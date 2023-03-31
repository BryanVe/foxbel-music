import { FC } from 'react'
import {
  AlbumPhoto,
  DetailsWrapper,
  TrackDetails,
  TrackTitle,
  Wrapper,
} from './styledComponents'

type TrackInfoProps = {
  track?: Track
}

const TrackInfo: FC<TrackInfoProps> = (props) => {
  const { track } = props

  return (
    <Wrapper>
      <AlbumPhoto alt={track?.title} src={track?.album.cover_medium} />
      <DetailsWrapper>
        <TrackTitle>{track?.title}</TrackTitle>
        <TrackDetails>
          {track?.artist.name} - {track?.album.title}
        </TrackDetails>
      </DetailsWrapper>
    </Wrapper>
  )
}

export default TrackInfo
