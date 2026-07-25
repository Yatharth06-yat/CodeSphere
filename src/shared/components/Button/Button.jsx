import './Button.css'
import { classNames } from '../../utils/helpers'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = ''
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        'cs-btn',
        `cs-btn--${variant}`,
        `cs-btn--${size}`,
        fullWidth && 'cs-btn--full',
        className
      )}
    >
      {Icon && <Icon className="cs-btn__icon" />}
      {children}
    </button>
  )
}
