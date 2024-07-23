import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import HomePage from './components/home/HomePage'
import DecorativeNav from './components/DecorativeNav'
import AppFooter from './components/AppFooter'
import LoginForm from './components/login/LoginForm'
import SimpleNav from './components/login/SimpleNav'
import SignupForm from './components/login/SignupForm'
import ArticlesPage from './components/articles/ArticlesPage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SimpleNav />
                <LoginForm />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <SimpleNav />
                <SignupForm />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <DecorativeNav />
                <AppNavbar />
                <HomePage />
              </>
            }
          />
          <Route
            path="/article"
            element={
              <>
                <DecorativeNav />
                <AppNavbar />
                <ArticlesPage />
              </>
            }
          />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
