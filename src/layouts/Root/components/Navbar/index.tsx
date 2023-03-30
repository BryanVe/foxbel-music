import { SearchInput, UserAccount } from './components'
import foxbelLogo from '@/assets/images/foxbel-music-icon@3x.png'
import { Logo, UserAccountWrapper, Wrapper } from './styledComponents'
import { useContext } from 'react'
import { RootLayoutContext } from '@/context'

const Navbar = () => {
  const { openSidebar } = useContext(RootLayoutContext)

  return (
    <Wrapper>
      <SearchInput />
      <UserAccountWrapper>
        <Logo alt='Foxbel Music Logo' src={foxbelLogo} onClick={openSidebar} />
        <UserAccount />
      </UserAccountWrapper>
    </Wrapper>
  )
}

export default Navbar
