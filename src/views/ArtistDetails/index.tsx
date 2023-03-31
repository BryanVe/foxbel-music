import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DEEZER_URI } from '@/config/keys'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

const ArtistPhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: initial;
  }
`

const ArtistPhoto = styled.img`
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: all 0.4s;
  display: grid;
  place-items: center;
`

const ArtistDetails = () => {
  const { artistId } = useParams()
  const [artist, setArtist] = useState<Artist>()

  const fetchArtist = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${DEEZER_URI}/artist/${artistId}?output=json`
      )

      setArtist(data)
    } catch (error) {
      console.log(error)
    }
  }, [artistId])

  useEffect(() => {
    fetchArtist()
  }, [fetchArtist])

  return !artist ? (
    <span>Cargando...</span>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <Wrapper>
        <ArtistPhotoWrapper>
          <ArtistPhoto alt={artist.name} src={artist.picture_big} />
          <Overlay className='overlay'>
            <FontAwesomeIcon color='#FFF' size='6x' icon={faPlay} />
          </Overlay>
        </ArtistPhotoWrapper>
        <div
          style={{
            flexGrow: 1,
            padding: 32,
            backgroundColor: 'rgba(199, 109, 109, 0.5)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div>
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: '#FFF',
              }}
            >
              {artist.name}
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 18,
                  color: '#FFF',
                }}
              >
                Lo mejor de {artist.name}
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: '#662323',
                  marginLeft: 16,
                }}
              >
                {artist.nb_fan.toLocaleString()} seguidores
              </span>
            </div>
          </div>
          <p
            style={{
              fontSize: 18,
              color: '#FFF',
              marginTop: 20,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <button
              style={{
                outline: 'none',
                border: 'none',
                backgroundColor: '#E86060',
                padding: '6px 22px',
                fontSize: 18,
                borderRadius: 100,
                color: '#fff',
              }}
            >
              Reproducir
            </button>
            <button
              style={{
                outline: 'none',
                border: '1px solid #E86060',
                backgroundColor: 'transparent',
                padding: '6px 22px',
                fontSize: 18,
                borderRadius: 100,
                color: '#E86060',
                marginLeft: 16,
              }}
            >
              Seguir
            </button>
          </div>
        </div>
      </Wrapper>
      <span
        style={{
          fontSize: 32,
          color: '#E86060',
          fontWeight: 700,
        }}
      >
        Canciones
      </span>
    </div>
  )
}

export default ArtistDetails
