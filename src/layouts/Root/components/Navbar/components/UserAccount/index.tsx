import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { User } from './styledComponents'
import { useContext } from 'react'
import { RootLayoutContext } from '@/context'

const UserAccount = () => {
  const { userInfo } = useContext(RootLayoutContext)

  return (
    userInfo?.name && (
      <div>
        <FontAwesomeIcon color='#E86060' icon={faUser} />
        <User>{userInfo.name}</User>
      </div>
    )
  )
}

export default UserAccount
