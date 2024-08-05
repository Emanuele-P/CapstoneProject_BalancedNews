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
import ScrollToTop from './utils/ScrollToTop'
import UserPage from './components/login/UserPage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/article/:id"
            element={
              <>
                <DecorativeNav />
                <AppNavbar />
                <ArticlesPage />
              </>
            }
          />
          <Route
            path="/me"
            element={
              <>
                <UserPage />
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
