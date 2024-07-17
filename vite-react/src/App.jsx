import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import HomePage from './components/home/HomePage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppNavbar />
                <HomePage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
