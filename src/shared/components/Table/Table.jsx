import './Table.css'

/**
 * Generic table. `columns` = [{ key, label, render? }]
 */
export default function Table({ columns, rows, emptyMessage = 'No data available' }) {
  if (!rows || rows.length === 0) {
    return <div className="cs-table__empty">{emptyMessage}</div>
  }
  return (
    <div className="cs-table__wrapper">
      <table className="cs-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id ?? idx}>
              {columns.map((col) => (
                <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
