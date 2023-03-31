import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { PlayIconWrapper, Wrapper } from './styledComponents'

type ControlsProps = {
  paused: boolean
  previousTrack: () => void
  nextTrack: () => void
  togglePlayTrack: () => void
}

const Controls: FC<ControlsProps> = (props) => {
  const { paused, previousTrack, nextTrack, togglePlayTrack } = props

  return (
    <Wrapper>
      <FontAwesomeIcon
        cursor='pointer'
        color='#FFF'
        size='2x'
        icon={faBackwardStep}
        onClick={previousTrack}
      />
      <PlayIconWrapper onClick={togglePlayTrack}>
        <FontAwesomeIcon
          color='#FFF'
          size='xl'
          icon={paused ? faPlay : faPause}
        />
      </PlayIconWrapper>
      <FontAwesomeIcon
        cursor='pointer'
        color='#FFF'
        size='2x'
        icon={faForwardStep}
        onClick={nextTrack}
      />
    </Wrapper>
  )
}

export default Controls
