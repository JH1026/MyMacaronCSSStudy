
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import TopPage from './pages/TopPage'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route>
          <Route path="/" element={<TopPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
