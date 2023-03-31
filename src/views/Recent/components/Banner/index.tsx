import { FC, useContext } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { RootLayoutContext } from '@/context'
import { GridTrack } from '@/components'
import {
  AlbumPhoto,
  AlbumPhotoOverlay,
  AlbumPhotoWrapper,
  Panel,
  PanelActions,
  PanelArtistFollowers,
  PanelButton,
  PanelTrackInfo,
  PanelTrackTitle,
  Wrapper,
} from './styledComponents'

type BannerProps = {
  track: Track
  current: boolean
  paused: boolean
}

const Banner: FC<BannerProps> = (props) => {
  const { track, current, paused } = props
  const { selectTrack } = useContext(RootLayoutContext)

  return (
    <Wrapper>
      <AlbumPhotoWrapper>
        <AlbumPhoto alt={track.title} src={track.album.cover_medium} />
        <AlbumPhotoOverlay
          className='photo-overlay'
          current={current}
          onClick={() => selectTrack(track.id)}
        >
          <FontAwesomeIcon color='#FFF' size='6x' icon={faPlay} />
        </AlbumPhotoOverlay>
      </AlbumPhotoWrapper>
      <Panel>
        <PanelTrackTitle>{track.title}</PanelTrackTitle>
        <PanelTrackInfo>
          Lo mejor de {track.artist.name}
          <PanelArtistFollowers>
            {Number('321321321').toLocaleString()} seguidores
          </PanelArtistFollowers>
        </PanelTrackInfo>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <PanelActions>
          <PanelButton onClick={() => selectTrack(track.id)}>
            Reproducir
          </PanelButton>
          <PanelButton
            variant='outlined'
            onClick={() => alert(`Siguiendo a ${track.artist.name}`)}
          >
            Seguir
          </PanelButton>
        </PanelActions>
      </Panel>
    </Wrapper>
  )
}

export default Banner
