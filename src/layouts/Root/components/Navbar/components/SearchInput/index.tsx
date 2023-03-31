import { Input, Wrapper } from './styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import axios from 'axios'
import { RootLayoutContext } from '@/context'

const SearchInput = () => {
  const { addTracks } = useContext(RootLayoutContext)
  const [query, setQuery] = useState('')

  const searchTracks = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      if (query.length < 1) return

      const { data } = await axios.get(
        `https://api.deezer.com/search/track?q=${query}`
      )

      addTracks(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper onSubmit={searchTracks}>
      <Input
        type='text'
        placeholder='Buscar'
        onChange={(e) => setQuery(e.target.value)}
      />
      <FontAwesomeIcon color='#BDBDBD' icon={faMagnifyingGlass} />
    </Wrapper>
  )
}

export default SearchInput
