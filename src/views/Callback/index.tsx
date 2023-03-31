import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Callback = () => {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.hash.substring(1))
    const accessToken = params.get('access_token')
    const expires = params.get('expires')

    if (accessToken) localStorage.setItem('DEEZER_ACCESS_TOKEN', accessToken)
    if (expires) localStorage.setItem('DEEZER_ACCESS_TOKEN_EXPIRES', expires)
  }, [])

  return <Navigate replace to='/' />
}

export default Callback
