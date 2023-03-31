import { createContext, FC, PropsWithChildren, useState } from 'react'

type RootLayoutContextProps = {
  sidebarOpened: boolean
  openSidebar: () => void
  closeSidebar: () => void
  tracks?: Track[]
  currentTrack?: Track
  currentTrackIndex: number
  addTracks: (tracks: Track[]) => void
  selectTrack: (trackId: number) => void
  previousTrack: () => void
  nextTrack: () => void
  muted: boolean
  paused: boolean
  muteTrack: () => void
  unmuteTrack: () => void
  pauseTrack: () => void
  playTrack: () => void
}

const defaultFunction = () => {}

export const RootLayoutContext = createContext<RootLayoutContextProps>({
  sidebarOpened: false,
  openSidebar: defaultFunction,
  closeSidebar: defaultFunction,
  tracks: undefined,
  currentTrack: undefined,
  currentTrackIndex: -1,
  addTracks: defaultFunction,
  selectTrack: defaultFunction,
  previousTrack: defaultFunction,
  nextTrack: defaultFunction,
  muted: false,
  paused: false,
  muteTrack: defaultFunction,
  unmuteTrack: defaultFunction,
  pauseTrack: defaultFunction,
  playTrack: defaultFunction,
})

export const RootLayoutContextProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [tracks, setTracks] = useState<Track[]>()
  const [currentTrackIndex, setCurrentTrackIndex] = useState(-1)
  const [muted, setMuted] = useState(false)
  const [paused, setPaused] = useState(false)
  const currentTrack =
    tracks && tracks[currentTrackIndex] ? tracks[currentTrackIndex] : undefined

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)
  const addTracks = (tracks: Track[]) => setTracks(tracks)
  const selectTrack = (trackId: number) => {
    if (tracks) {
      const trackIndex = tracks.findIndex((track) => track.id === trackId)
      setCurrentTrackIndex(trackIndex)
    }
  }
  const previousTrack = () => {
    if (currentTrackIndex > 0) setCurrentTrackIndex(currentTrackIndex - 1)
  }
  const nextTrack = () => {
    if (
      tracks &&
      currentTrackIndex !== -1 &&
      currentTrackIndex < tracks.length - 1
    )
      setCurrentTrackIndex(currentTrackIndex + 1)
    else {
      setCurrentTrackIndex(-1)
    }
  }
  const muteTrack = () => setMuted(true)
  const unmuteTrack = () => setMuted(false)
  const pauseTrack = () => setPaused(true)
  const playTrack = () => setPaused(false)

  return (
    <RootLayoutContext.Provider
      value={{
        sidebarOpened,
        openSidebar,
        closeSidebar,
        tracks,
        currentTrack,
        currentTrackIndex,
        addTracks,
        selectTrack,
        previousTrack,
        nextTrack,
        muted,
        paused,
        muteTrack,
        unmuteTrack,
        pauseTrack,
        playTrack,
      }}
    >
      {children}
    </RootLayoutContext.Provider>
  )
}
