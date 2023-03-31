import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const AlbumPhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover .photo-overlay {
    opacity: 1;
  }
`

export const AlbumPhoto = styled.img`
  width: 100%;
`

type AlbumPhotoOverlayProps = {
  current: boolean
}

export const AlbumPhotoOverlay = styled.div<AlbumPhotoOverlayProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.2);
  opacity: ${(props) => (props.current ? 1 : 0)};
  transition: all 0.4s;
  display: grid;
  place-items: center;
`

export const Title = styled.span`
  font-weight: 700;
`

export const Subtitle = styled.span`
  font-size: 12px;
  color: #828282;
`
