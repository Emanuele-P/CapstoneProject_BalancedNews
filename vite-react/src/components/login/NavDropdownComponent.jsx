import { Button, Image, NavDropdown, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/authActions'
import arrow from '../../assets/icons/arrow.svg'
import light from '../../assets/svg/light.svg'
import dark from '../../assets/svg/dark.svg'
import system from '../../assets/svg/system.svg'
import propic from '../../assets/default-avatar.jpg'
import { useEffect, useState } from 'react'

function NavDropdownComponent() {
  const { isAuthenticated, profile, loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleToggle = (isOpen) => {
    setDropdownOpen(isOpen)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/home')
    }
  }, [])

  return (
    <NavDropdown
      title={
        <Image
          src={profile?.avatar || propic}
          className={`propic ${dropdownOpen ? 'dropdown-open' : ''}`}
          roundedCircle
        />
      }
      id="basic-nav-dropdown"
      className="first-dropdown d-none d-md-block"
      align="end"
      onToggle={handleToggle}
    >
      {!isAuthenticated ? (
        <Link to={'/'}>
          <Button className="w-100 accent-btn mt-2">Login</Button>
        </Link>
      ) : (
        <>
          <p className="drop-name px-2 m-0 pt-1">{profile?.username}</p>
          <p className="drop-email px-2">{profile?.email}</p>

          <Link to={'/home'}>
            <Button className="whi-btn w-100">Home</Button>
          </Link>
        </>
      )}
      <NavDropdown.Divider className="mt-3" />

      <NavDropdown.Item>
        <i className="bi bi-gear me-1"></i>Settings
      </NavDropdown.Item>

      <NavDropdown.Divider />

      <div className="flex color-mode">
        <Button className="w-100 transparent">
          <Image src={light} className="square active-color" />
          <span>Light</span>
        </Button>
        <Button className="w-100 transparent">
          <Image src={dark} className="square" />
          <span>Dark</span>
        </Button>
        <Button className="w-100 transparent">
          <Image src={system} className="square" />
          <span>System</span>
        </Button>
      </div>

      <NavDropdown.Divider />

      <NavDropdown.Item>Blog</NavDropdown.Item>
      <NavDropdown.Item>About us</NavDropdown.Item>
      <NavDropdown.Item className="flex justify-content-between">
        Support <Image src={arrow} />
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleLogout}>
        Log out
        {loading && <Spinner animation="border" size="sm" className="ms-2" />}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <div className="flex justify-content-between mx-2">
        <div className="flex drop-span">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Copyright</span>
        </div>
        <div className="flex gap-2">
          <Link to={'https://github.com/Emanuele-P'}>
            <i className="bi bi-github text-info"></i>
          </Link>
          <Link to={'https://www.linkedin.com/in/emanuele-pezzato-1232a824a/'}>
            <i className="bi bi-linkedin text-info"></i>
          </Link>
        </div>
      </div>
    </NavDropdown>
  )
}

export default NavDropdownComponent
