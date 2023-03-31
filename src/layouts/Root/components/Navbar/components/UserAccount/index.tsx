import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { User, Wrapper } from './styledComponents'

const UserAccount = () => {
  // const { userInfo } = useContext(RootLayoutContext)

  return (
    <Wrapper>
      <FontAwesomeIcon color='#E86060' icon={faUser} />
      {/* <User>{userInfo.name}</User> */}
      <User>Francisco M.</User>
    </Wrapper>
  )
}

export default UserAccount
