import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { DEEZER_URI } from '@/config/keys'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div``

const ArtistPhotoWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }
`

const ArtistPhoto = styled.img`
  width: 100%;
  height: 100%;
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

const Artists = () => {
  const [artists, setArtists] = useState<Artist[]>()
  const navigate = useNavigate()

  const fetchArtists = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${DEEZER_URI}/chart/0/artists?output=json&limit=20`
      )

      setArtists(data.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchArtists()
  }, [fetchArtists])

  return (
    <Wrapper>
      <span
        style={{
          fontSize: 32,
          color: '#E86060',
          fontWeight: 700,
        }}
      >
        Resultados
      </span>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px  , 1fr))',
          gap: 32,
          marginTop: 20,
        }}
      >
        {artists &&
          artists.map((artist) => (
            <div key={artist.id}>
              <ArtistPhotoWrapper
                onClick={() => navigate(`/artists/${artist.id}`)}
              >
                <ArtistPhoto alt={artist.name} src={artist.picture_medium} />
                <Overlay className='overlay'>
                  <FontAwesomeIcon
                    color='#E86060'
                    size='3x'
                    icon={faArrowRight}
                  />
                </Overlay>
              </ArtistPhotoWrapper>
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                {artist.name}
              </span>
            </div>
          ))}
      </div>
    </Wrapper>
  )
}

export default Artists
