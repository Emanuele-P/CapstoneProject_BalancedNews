/* eslint-disable react/prop-types */
import { Modal, Button, Form } from 'react-bootstrap'

const EditProfileModal = ({ show, onClose, onSave, field, values, setValues, error }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave()
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {field === 'name' || field === 'surname' ? (
            <>
              <Form.Group controlId="formName" className="form-floating-label">
                <Form.Control type="text" name="name" value={values.name} onChange={handleChange} />
                <Form.Label>Name</Form.Label>
              </Form.Group>
              <Form.Group controlId="formSurname" className="form-floating-label">
                <Form.Control type="text" name="surname" value={values.surname} onChange={handleChange} />
                <Form.Label>Surname</Form.Label>
              </Form.Group>
            </>
          ) : field === 'password' ? (
            <>
              <Form.Group controlId="formOldPassword" className="form-floating-label">
                <Form.Control type="password" name="oldPassword" value={values.oldPassword} onChange={handleChange} />
                <Form.Label>Old Password</Form.Label>
              </Form.Group>
              <Form.Group controlId="formNewPassword" className="form-floating-label">
                <Form.Control type="password" name="newPassword" value={values.newPassword} onChange={handleChange} />
                <Form.Label>New Password</Form.Label>
              </Form.Group>
            </>
          ) : (
            <Form.Group controlId={`form${field}`} className="form-floating-label">
              <Form.Control type="text" name={field} value={values[field]} onChange={handleChange} />
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
            </Form.Group>
          )}
          {error && <p className="text-danger mb-4">{error}</p>}
          <div className="flex justify-content-end gap-2">
            <Button className="whi-btn" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" className="login-btn" onClick={onSave}>
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditProfileModal
