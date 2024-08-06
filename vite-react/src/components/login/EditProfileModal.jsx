/* eslint-disable react/prop-types */
import { Modal, Button, Form } from 'react-bootstrap'

const EditProfileModal = ({ show, onClose, onSave, field, values, setValues }) => {
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
                <Form.Control type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name" />
                <Form.Label>Name</Form.Label>
              </Form.Group>
              <Form.Group controlId="formSurname" className="form-floating-label">
                <Form.Control
                  type="text"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                />
                <Form.Label>Surname</Form.Label>
              </Form.Group>
            </>
          ) : (
            <Form.Group controlId={`form${field}`} className="form-floating-label">
              <Form.Control
                type={field === 'password' ? 'password' : 'text'}
                name={field}
                value={values[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              />
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
            </Form.Group>
          )}
          <div className="flex justify-content-end gap-2">
            <Button className="login-button" onClick={onClose}>
              Close
            </Button>
            <Button variant="info" type="submit" className="signup-button">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditProfileModal
