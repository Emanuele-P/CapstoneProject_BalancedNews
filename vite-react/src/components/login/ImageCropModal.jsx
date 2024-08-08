/* eslint-disable react/prop-types */
import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { Modal, Button } from 'react-bootstrap'
import { getCroppedImg } from '../../utils/imgUtils'

const ImageCropModal = ({ imageSrc, onCropComplete, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropChange = (newCrop) => {
    setCrop(newCrop)
  }

  const onZoomChange = (newZoom) => {
    setZoom(newZoom)
  }

  const onCropCompleteHandler = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const handleCropComplete = async () => {
    const croppedImageBlob = await getCroppedImg(imageSrc, croppedAreaPixels)
    onCropComplete(croppedImageBlob)
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Body closeButton>
        <div className="crop-container" style={{ position: 'relative', width: '100%', height: '400px' }}>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={onCropChange}
            onCropComplete={onCropCompleteHandler}
            onZoomChange={onZoomChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="del-btn" onClick={onClose}>
          Cancel
        </Button>
        <Button className="login-btn" onClick={handleCropComplete}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ImageCropModal
