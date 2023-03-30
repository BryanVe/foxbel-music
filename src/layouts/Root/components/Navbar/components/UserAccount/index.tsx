import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { User } from './styledComponents'

const UserAccount = () => {
  return (
    <div>
      <FontAwesomeIcon color='#E86060' icon={faUser} />
      <User>Francisco M.</User>
    </div>
  )
}

export default UserAccount
