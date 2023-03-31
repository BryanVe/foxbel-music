import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts'
import { RedirectView, CallbackView, RecentView } from './views'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/callback' Component={CallbackView} />
      <Route path='/redirect' Component={RedirectView} />
      <Route Component={RootLayout}>
        <Route index path='/*' Component={RecentView} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
