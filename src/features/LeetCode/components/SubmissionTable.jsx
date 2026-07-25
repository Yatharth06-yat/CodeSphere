import Table from '../../../shared/components/Table'
import { formatDate } from '../../../shared/utils/formatDate'

const badgeForDifficulty = { Easy: 'green', Medium: 'amber', Hard: 'red' }
const badgeForStatus = { Accepted: 'green', 'Wrong Answer': 'red' }

export default function SubmissionTable({ submissions }) {
  const columns = [
    { key: 'title', label: 'Problem' },
    {
      key: 'difficulty',
      label: 'Difficulty',
      render: (row) => <span className={`cs-badge cs-badge--${badgeForDifficulty[row.difficulty]}`}>{row.difficulty}</span>
    },
    {
      key: 'status',
      label: 'Status',
      render: (row) => <span className={`cs-badge cs-badge--${badgeForStatus[row.status] || 'gray'}`}>{row.status}</span>
    },
    { key: 'date', label: 'Date', render: (row) => formatDate(row.date) }
  ]
  return <Table columns={columns} rows={submissions} emptyMessage="No submissions yet" />
}
