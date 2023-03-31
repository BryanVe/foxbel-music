import { RootLayoutContext } from '@/context'
import { useContext, useRef } from 'react'
import { Wrapper } from './styledComponents'
import { Controls, TrackInfo, VolumeControl } from './components'

const Player = () => {
  const {
    currentTrack,
    nextTrack,
    previousTrack,
    muted,
    paused,
    pauseTrack,
    playTrack,
    muteTrack,
    unmuteTrack,
  } = useContext(RootLayoutContext)
  const playerRef = useRef<HTMLAudioElement>(null)

  const adjustVolume = (volume: number) => {
    if (playerRef.current) playerRef.current.volume = volume / 100
  }

  const toggleMuteTrack = () => {
    if (playerRef.current) {
      if (playerRef.current.muted) {
        playerRef.current.muted = false
        unmuteTrack()
      } else {
        playerRef.current.muted = true
        muteTrack()
      }
    }
  }

  const togglePlayTrack = () => {
    if (playerRef.current) {
      if (playerRef.current.paused) {
        playerRef.current.play()
        playTrack()
      } else {
        playerRef.current.pause()
        pauseTrack()
      }
    }
  }

  return (
    <Wrapper playing={!currentTrack}>
      <audio
        autoPlay
        ref={playerRef}
        src={currentTrack?.preview}
        onPlay={playTrack}
        onPause={pauseTrack}
        onEnded={nextTrack}
      />
      <TrackInfo track={currentTrack} />
      <Controls
        paused={paused}
        previousTrack={previousTrack}
        nextTrack={nextTrack}
        togglePlayTrack={togglePlayTrack}
      />
      <VolumeControl
        muted={muted}
        adjustVolume={adjustVolume}
        toggleMuteTrack={toggleMuteTrack}
      />
    </Wrapper>
  )
}

export default Player
