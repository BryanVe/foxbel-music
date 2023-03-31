import { createContext, FC, PropsWithChildren, useState } from 'react'

type RootLayoutContextProps = {
  sidebarOpened: boolean
  openSidebar: () => void
  closeSidebar: () => void
  userInfo?: UserInfo
}

export const RootLayoutContext = createContext<RootLayoutContextProps>({
  sidebarOpened: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  userInfo: undefined,
})

export const RootLayoutContextProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [sidebarOpened, setSidebarOpened] = useState(false)
  // const [userInfo, setUserInfo] = useState<UserInfo>()

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)
  // const fetchUserInfo = useCallback(async () => {
  //   try {
  //     const accessToken = localStorage.getItem('DEEZER_ACCESS_TOKEN')
  //     const { data } = await axios.get(
  //       `${DEEZER_URI}/user/me?output=json&access_token=${accessToken}`
  //     )
  //     setUserInfo(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])

  // useEffect(() => {
  //   fetchUserInfo()
  // }, [fetchUserInfo])

  return (
    <RootLayoutContext.Provider
      value={{
        sidebarOpened,
        openSidebar,
        closeSidebar,
        // userInfo,
      }}
    >
      {children}
    </RootLayoutContext.Provider>
  )
}
