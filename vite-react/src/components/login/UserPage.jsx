import { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Image, Modal, Navbar, Row, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/svg/simple-logo.svg'
import NavDropdownComponent from './NavDropdownComponent'
import propic from '../../assets/default-avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {
  uploadAvatar,
  updateEmail,
  updateUsername,
  updatePassword,
  logout,
  deleteAccount,
  updateFullname,
  clearErrors,
} from '../../redux/actions/authActions'
import UserPagePlaceholder from '../placeholders/UserPagePlaceholder'
import ImageCropModal from './ImageCropModal'
import EditProfileModal from './EditProfileModal'
import MiniFooter from './MiniFooter'

function UserPage() {
  const { isAuthenticated, profile, loading, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const fileInputRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [cropModalVisible, setCropModalVisible] = useState(false)
  const [imageSrc, setImageSrc] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editField, setEditField] = useState('')
  const [editValues, setEditValues] = useState({
    name: '',
    surname: '',
    email: '',
    username: '',
    oldPassword: '',
    newPassword: '',
  })
  const navigate = useNavigate()
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

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

  const handleEditClick = (field) => {
    setEditField(field)
    if (field === 'name' || field === 'surname') {
      setEditValues({ name: profile.name, surname: profile.surname })
    } else if (field === 'password') {
      setEditValues({ oldPassword: '', newPassword: '' })
    } else {
      setEditValues({ [field]: profile[field] })
    }
    setShowEditModal(true)
  }

  const handleEditSave = () => {
    if (!error) {
      setShowEditModal(true)

      if (editField === 'name' || editField === 'surname') {
        dispatch(updateFullname(profile.id, editValues.name.trim(), editValues.surname.trim()))
        setShowEditModal(false)
      } else {
        const payload = editValues[editField].trim()
        switch (editField) {
          case 'email':
            dispatch(updateEmail(profile.id, payload))
            setShowEditModal(false)
            break
          case 'username':
            dispatch(updateUsername(profile.id, payload))
            setShowEditModal(false)
            break
          case 'password':
            dispatch(updatePassword(profile.id, editValues.oldPassword.trim(), editValues.newPassword.trim()))
            setShowEditModal(false)
            break
          default:
            break
        }
      }
    } else {
      return setShowEditModal(false)
    }
  }

  useEffect(() => {
    if (showEditModal) {
      dispatch(clearErrors())
    }
  }, [showEditModal, dispatch])

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleDeleteAccount = () => {
    setDeleteSuccess(true)
    setTimeout(async () => {
      const result = dispatch(deleteAccount())
      if (result.success) {
        navigate('/home')
      } else {
        setDeleteSuccess(false)
      }
    }, 3000)
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home')
    }
  }, [isAuthenticated, navigate, deleteSuccess])

  return (
    <>
      <Navbar className="simple-nav border-bottom">
        <Container className="flex justify-content-between">
          <Navbar.Brand className="m-0">
            <Link to={'/home'}>
              <Image src={logo} className="nav-logo" />
            </Link>
          </Navbar.Brand>
          <div className="flex gap-3">
            <div className="icon-wrap">
              <i className="bi bi-question-circle"></i>
            </div>
            <div className="icon-wrap">
              <i className="bi bi-gear"></i>
            </div>
            <div className="icon-wrap">
              <i className="bi bi-bell-fill"></i>
            </div>
            <NavDropdownComponent />
          </div>
        </Container>
      </Navbar>
      {isAuthenticated ? (
        <>
          <Container className="user-page">
            <Row>
              <Col lg={2} className="user-aside d-flex flex-column gap-2 mb-4 py-3">
                <div className="flex gap-2 user-active">
                  <i className="bi bi-person-circle"></i>
                  <h6>Your account</h6>
                </div>
                <div className="flex gap-2">
                  <i className="bi bi-shield-lock"></i>
                  <h6>Login & Security</h6>
                </div>
                <div className="flex gap-2">
                  <i className="bi bi-envelope"></i>
                  <h6>Message settings</h6>
                </div>
                <div className="flex gap-2">
                  <i className="bi bi-unlock"></i>
                  <h6>Privacy preferences</h6>
                </div>
                <div className="flex gap-2">
                  <i className="bi bi-bar-chart-line"></i>
                  <h6>Activity logs</h6>
                </div>
                <hr />
                <div className="flex gap-2">
                  <i className="bi bi-newspaper"></i>
                  <h6>About us</h6>
                </div>
                <div className="flex gap-2">
                  <i className="bi bi-sliders"></i>
                  <h6>Preferences</h6>
                </div>
              </Col>
              <Col lg={3}></Col>
              <Col>
                {loading ? (
                  <UserPagePlaceholder />
                ) : (
                  <>
                    <h4 className="mb-4">Your account</h4>
                    <Row className="border-bottom pb-4 mx-0 mb-4">
                      <Col lg={2} className="ps-0">
                        <div className="propic-wrapper">
                          <Image src={profile.avatar || propic} className="propic" roundedCircle />
                        </div>
                      </Col>
                      <Col lg={4} className="d-flex flex-column justify-content-center">
                        <Row></Row>
                        <h6>Upload your profile photo</h6>
                        <span className="guide">Profile photo guidelines</span>
                        <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                      </Col>
                      <Col lg={{ span: 2, offset: 4 }} className="d-flex align-items-center pe-0">
                        <Button className="accent-btn w-100" onClick={handleUploadClick} disabled={uploading}>
                          {uploading ? <Spinner animation="border" size="sm" /> : 'Upload photo'}
                        </Button>
                      </Col>
                    </Row>
                    <Row className="border-bottom pb-4 mx-0 mb-4">
                      <h5 className="mt-1 mb-4">Personal details</h5>
                      <Col lg={4} className="d-flex flex-column justify-content-center pe-0">
                        <h6>Name</h6>
                        <span>
                          {profile.name} {profile.surname}
                        </span>
                      </Col>
                      <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start pe-0">
                        <Button className="whi-btn w-100" onClick={() => handleEditClick('name')}>
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    <Row className="border-bottom pb-4 mx-0 mb-4">
                      <Col lg={4} className="d-flex flex-column justify-content-center pe-0">
                        <h6>Email address</h6>
                        <span>{profile.email}</span>
                      </Col>
                      <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start pe-0">
                        <Button className="whi-btn w-100" onClick={() => handleEditClick('email')}>
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    <Row className="border-bottom pb-4 mx-0 mb-4">
                      <Col lg={4} className="d-flex flex-column justify-content-center pe-0">
                        <h6>Username</h6>
                        <span>{profile.username}</span>
                      </Col>
                      <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start pe-0">
                        <Button className="whi-btn w-100" onClick={() => handleEditClick('username')}>
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    <Row className="border-bottom pb-4 mx-0 mb-4">
                      <h5 className="mt-1 mb-4">Login & security</h5>
                      <Col lg={4} className="d-flex flex-column justify-content-center pe-0">
                        <h6>Password</h6>
                        <span>Change your password</span>
                      </Col>
                      <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start pe-0">
                        <Button className="whi-btn w-100" onClick={() => handleEditClick('password')}>
                          Edit
                        </Button>
                      </Col>
                    </Row>
                    <Row className="border-bottom pb-4 mx-0 mb-4">
                      <Col lg={4} className="d-flex flex-column justify-content-center">
                        <h6>Logout</h6>
                        <span>End this sessions by signing out from this device</span>
                      </Col>
                      <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start pe-0">
                        <Button className="whi-btn w-100" onClick={handleLogout}>
                          Log out
                        </Button>
                      </Col>
                    </Row>
                    <Row className="border-bottom pb-4 mx-0 mb-4">
                      <Col lg={4} className="d-flex flex-column justify-content-center pe-0">
                        <h6>Delete account</h6>
                        <span>Remove your account permanently</span>
                      </Col>
                      <Col lg={{ span: 2, offset: 6 }} className="d-flex align-items-start pe-0">
                        <Button className="del-btn w-100" onClick={() => setShowDeleteModal(true)}>
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
            </Row>
          </Container>

          <MiniFooter />
        </>
      ) : (
        <Container className="background-login">
          <Row className="justify-content-center" style={{ height: '100vh' }}>
            <Col lg={9} className="flex justify-content-center notice">
              <div className="notice-box flex flex-column justify-content-center">
                <h4 className="mb-5">Redirecting to home...</h4>
                <Spinner animation="border" role="status" />
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {cropModalVisible && (
        <ImageCropModal
          imageSrc={imageSrc}
          onCropComplete={handleCropComplete}
          onClose={() => setCropModalVisible(false)}
        />
      )}
      <EditProfileModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleEditSave}
        field={editField}
        values={editValues}
        setValues={setEditValues}
        error={error}
      />
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Body className="text-center">
          {deleteSuccess ? (
            <>
              <h6>Deleting account...</h6>
              <Spinner animation="border" role="status" />
            </>
          ) : (
            <h6>
              Are you sure you want to delete your account? <br />
              This action cannot be undone.
            </h6>
          )}
        </Modal.Body>
        {!deleteSuccess && (
          <Modal.Footer>
            <Button className="whi-btn" onClick={() => setShowDeleteModal(false)}>
              No
            </Button>
            <Button className="del-btn" onClick={handleDeleteAccount}>
              Delete
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  )
}

export default UserPage
