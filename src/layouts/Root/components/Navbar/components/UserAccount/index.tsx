import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { User } from './styledComponents'

const UserAccount = () => {
  // const { userInfo } = useContext(RootLayoutContext)

  return (
    <div
      style={{
        marginLeft: 16,
        cursor: 'pointer',
      }}
    >
      <FontAwesomeIcon color='#E86060' icon={faUser} />
      {/* <User>{userInfo.name}</User> */}
      <User>Francisco M.</User>
    </div>
  )
}

export default UserAccount
