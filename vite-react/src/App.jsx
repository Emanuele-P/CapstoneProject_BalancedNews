import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppNavbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
