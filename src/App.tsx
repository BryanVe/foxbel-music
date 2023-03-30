import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from './layouts'
import { RecentView } from './views'

const App = () => (
  <BrowserRouter>
    <RootLayout>
      <Routes>
        <Route path='/' Component={RecentView} />
      </Routes>
    </RootLayout>
  </BrowserRouter>
)

export default App
