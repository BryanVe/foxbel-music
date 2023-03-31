import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts'
import {
  RedirectView,
  CallbackView,
  RecentView,
  ArtistsView,
  ArtistDetailsView,
} from './views'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/callback' Component={CallbackView} />
      <Route path='/redirect' Component={RedirectView} />
      <Route Component={RootLayout}>
        <Route index path='/' Component={RecentView} />
        <Route path='/artists' Component={ArtistsView} />
        <Route path='/artists/:artistId' Component={ArtistDetailsView} />
        <Route path='/albums' Component={ArtistsView} />
        <Route path='/tracks' Component={ArtistsView} />
        <Route path='/radio' Component={ArtistsView} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
