import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts'
import { RedirectView, CallbackView, RecentView } from './views'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route Component={RootLayout}>
        <Route index path='/' Component={RecentView} />
      </Route>
      <Route path='/redirect' Component={RedirectView} />
      <Route path='/callback' Component={CallbackView} />
    </Routes>
  </BrowserRouter>
)

export default App
