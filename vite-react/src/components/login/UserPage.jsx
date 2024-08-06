import { useRef, useState } from 'react'
import { Button, Col, Container, Image, Navbar, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/simple-logo.svg'
import NavDropdownComponent from './NavDropdownComponent'
import propic from '../../assets/default-avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { uploadAvatar } from '../../redux/actions/authActions'
import UserPagePlaceholder from './UserPagePlaceholder'
import ImageCropModal from './ImageCropModal'

function UserPage() {
  const { isAuthenticated, profile, loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const fileInputRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [cropModalVisible, setCropModalVisible] = useState(false)
  const [imageSrc, setImageSrc] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImageSrc(reader.result)
        setCropModalVisible(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleCropComplete = (croppedImageBlob) => {
    setCropModalVisible(false)
    if (croppedImageBlob && profile?.id) {
      setUploading(true)
      dispatch(uploadAvatar(profile.id, croppedImageBlob)).then(() => setUploading(false))
    }
  }

  return (
    <>
      <Container>
        <Navbar className="simple-nav border-bottom flex justify-content-between">
          <Navbar.Brand className="m-0">
            <Link to={'/home'}>
              <Image src={logo} className="nav-logo" />
            </Link>
          </Navbar.Brand>
          <div className="flex gap-4">
            <i className="bi bi-question-circle"></i>
            <i className="bi bi-gear"></i>
            <i className="bi bi-bell-fill"></i>
            <NavDropdownComponent />
          </div>
        </Navbar>
      </Container>
      <Container className="user-page">
        {isAuthenticated && !loading ? (
          <>
            <h4 className="mb-4">Your account</h4>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <Col lg={2} className="ps-0">
                <Image src={profile.avatar || propic} className="propic" roundedCircle />
              </Col>
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <Row></Row>
                <h6>Upload your profile photo</h6>
                <span>Profile photo guidelines</span>
                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
              </Col>
              <Col lg={{ span: 2, offset: 4 }} className="d-flex align-items-center">
                <Button className="up-btn w-100" onClick={handleUploadClick} disabled={uploading}>
                  {uploading ? <Spinner animation="border" size="sm" /> : 'Upload photo'}
                </Button>
              </Col>
            </Row>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <h5 className="mt-1 mb-4">Personal details</h5>
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <h6>Name</h6>
                <span>
                  {profile.name} {profile.surname}
                </span>
              </Col>
              <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start">
                <Button className="login-button w-100">Edit</Button>
              </Col>
            </Row>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <h6>Email address</h6>
                <span>{profile.email}</span>
              </Col>
              <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start">
                <Button className="login-button w-100">Edit</Button>
              </Col>
            </Row>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <h6>Username</h6>
                <span>{profile.username}</span>
              </Col>
              <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start">
                <Button className="login-button w-100">Edit</Button>
              </Col>
            </Row>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <h6>Password</h6>
                <span>Change your password</span>
              </Col>
              <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start">
                <Button className="login-button w-100">Edit</Button>
              </Col>
            </Row>
            <Row className="border-bottom pb-4 mx-0 mb-4">
              <h5 className="mt-1 mb-4">Manage account</h5>
              <Col lg={4} className="d-flex flex-column justify-content-center">
                <h6>Delete account</h6>
                <span>Permanently delete your account</span>
              </Col>
              <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start">
                <Button className="login-button del-btn w-100">Delete</Button>
              </Col>
            </Row>
          </>
        ) : (
          <UserPagePlaceholder />
        )}
      </Container>
      {cropModalVisible && (
        <ImageCropModal
          imageSrc={imageSrc}
          onCropComplete={handleCropComplete}
          onClose={() => setCropModalVisible(false)}
        />
      )}
    </>
  )
}

export default UserPage
