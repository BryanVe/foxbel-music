import { useCallback, useContext, useEffect } from 'react'
import { DEEZER_URI } from '@/config/keys'
import { Banner } from './components'
import { RootLayoutContext } from '@/context'
import { GridTrack } from '@/components'
import { Grid, Subtitle } from '@/styledComponents'
import { Wrapper } from './styledComponents'
import fetchJsonp from 'fetch-jsonp'

const Recent = () => {
  const { selectTrack, addTracks, tracks, currentTrackIndex, paused } =
    useContext(RootLayoutContext)

  const fetchTracks = useCallback(async () => {
    try {
      const response = await fetchJsonp(
        `${DEEZER_URI}/chart/0/tracks?output=jsonp&limit=30`
      )
      const data = await response.json()

      addTracks(data.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchTracks()
  }, [fetchTracks])

  return !tracks ? (
    <span>Cargando...</span>
  ) : (
    <>
      <Banner
        track={tracks[0]}
        paused={paused}
        current={currentTrackIndex === 0}
      />
      <Wrapper>
        <Subtitle>Resultados</Subtitle>
        <Grid>
          {tracks.map((track, index) => (
            <GridTrack
              key={track.id}
              current={currentTrackIndex === index}
              paused={paused}
              selectTrack={selectTrack}
              track={track}
            />
          ))}
        </Grid>
      </Wrapper>
    </>
  )
}

export default Recent
