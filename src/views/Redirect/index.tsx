import { DEEZER_APP_ID, DEEZER_REDIRECT_URI } from '@/config/keys'
import { useEffect } from 'react'

const Redirect = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      location.replace(
        `https://connect.deezer.com/oauth/auth.php?app_id=${DEEZER_APP_ID}&redirect_uri=${DEEZER_REDIRECT_URI}&perms=basic_access,email`
      )
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return <span>Estás siendo redireccionado para autenticarte...</span>
}

export default Redirect
