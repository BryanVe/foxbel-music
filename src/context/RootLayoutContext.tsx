import { createContext, FC, PropsWithChildren, useState } from 'react'

export const RootLayoutContext = createContext({
  sidebarOpened: false,
  openSidebar: () => {},
  closeSidebar: () => {},
})

export const RootLayoutContextProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const openSidebar = () => setSidebarOpened(true)
  const closeSidebar = () => setSidebarOpened(false)

  return (
    <RootLayoutContext.Provider
      value={{
        sidebarOpened,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </RootLayoutContext.Provider>
  )
}
