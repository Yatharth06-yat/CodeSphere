import './Pagination.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null
  return (
    <div className="cs-pagination">
      <button
        className="cs-pagination__btn"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        <FiChevronLeft />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          className={`cs-pagination__btn ${p === page ? 'cs-pagination__btn--active' : ''}`}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        className="cs-pagination__btn"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        <FiChevronRight />
      </button>
    </div>
  )
}
