import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const AlbumPhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover .photo-overlay {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: initial;
  }
`

export const AlbumPhoto = styled.img`
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  background-color: rgba(255, 255, 255, 0.3);
  opacity: ${(props) => (props.current ? 1 : 0)};
  transition: all 0.4s;
  display: grid;
  place-items: center;
`

export const Panel = styled.div`
  flex-grow: 1;
  padding: 32px;
  background-color: #f7a4a4;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
`

export const PanelTrackTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
`

export const PanelTrackInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`

export const PanelArtistFollowers = styled.span`
  font-size: 14px;
  color: #662323;
  margin-left: 16px;
`

export const PanelActions = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
`

type PanelButton = {
  variant?: 'solid' | 'outlined'
}

export const PanelButton = styled.button<PanelButton>`
  cursor: pointer;
  outline: none;
  padding: 6px 22px;
  font-size: 18px;
  border-radius: 100px;
  border: ${(props) =>
    !props.variant || props.variant === 'solid' ? 'none' : '1px solid #E86060'};
  background-color: ${(props) =>
    !props.variant || props.variant === 'solid' ? '#e86060' : 'transparent'};
  color: ${(props) =>
    !props.variant || props.variant === 'solid' ? '#fff' : '#e86060'};
`
