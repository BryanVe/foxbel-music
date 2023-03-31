import { DEEZER_AUTH_URI } from '@/config/constants'
import { useEffect } from 'react'

const Redirect = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      location.replace(DEEZER_AUTH_URI)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return <span>Estás siendo redireccionado para autenticarte...</span>
}

export default Redirect
