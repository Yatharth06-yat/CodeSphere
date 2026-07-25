import './SearchBar.css'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="cs-search">
      <FiSearch className="cs-search__icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="cs-search__input"
      />
    </div>
  )
}
