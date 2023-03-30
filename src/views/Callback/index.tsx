import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Callback = () => {
  const location = useLocation()

  useEffect(() => {
    const deezerCode = location.search.split('=')[1]

    if (deezerCode) localStorage.setItem('DEEZER_CODE', deezerCode)
  }, [])

  return <Navigate replace to='/' />
}

export default Callback
