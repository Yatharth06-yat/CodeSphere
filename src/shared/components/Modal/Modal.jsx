import './Modal.css'
import { FiX } from 'react-icons/fi'

export default function Modal({ isOpen, onClose, title, children, footer }) {
  if (!isOpen) return null
  return (
    <div className="cs-modal__overlay" onClick={onClose}>
      <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cs-modal__header">
          <h3>{title}</h3>
          <button className="cs-modal__close" onClick={onClose} aria-label="Close">
            <FiX />
          </button>
        </div>
        <div className="cs-modal__body">{children}</div>
        {footer && <div className="cs-modal__footer">{footer}</div>}
      </div>
    </div>
  )
}
