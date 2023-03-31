import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { Slider, Wrapper } from './styledComponents'

type VolumeControlProps = {
  muted: boolean
  adjustVolume: (volume: number) => void
  toggleMuteTrack: () => void
}

const VolumeControl: FC<VolumeControlProps> = (props) => {
  const { muted, adjustVolume, toggleMuteTrack } = props

  return (
    <Wrapper>
      <Slider
        type='range'
        min='0'
        max='100'
        step='1'
        onChange={(e) => adjustVolume(Number(e.currentTarget.value))}
      />
      <FontAwesomeIcon
        onClick={toggleMuteTrack}
        cursor='pointer'
        color='#FFF'
        size='2x'
        icon={muted ? faVolumeMute : faVolumeUp}
      />
    </Wrapper>
  )
}

export default VolumeControl
