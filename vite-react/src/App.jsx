import 'bootstrap/scss/bootstrap.scss'
import './style/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import LoginForm from './components/login/LoginForm'
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
          <Route path="/" element={<LoginForm />} />

          <Route path="/register" element={<SignupForm />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/article/:id" element={<ArticlesPage />} />
          <Route path="/me" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
