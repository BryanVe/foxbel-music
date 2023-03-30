import { Input, Wrapper } from './styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
  return (
    <Wrapper>
      <Input type='text' placeholder='Buscar' />
      <FontAwesomeIcon color='#BDBDBD' icon={faMagnifyingGlass} />
    </Wrapper>
  )
}

export default SearchInput
