import Table from '../../../shared/components/Table'

export default function RankTable({ users }) {
  const columns = [
    { key: 'rank', label: '#', render: (row) => `#${row.rank}` },
    {
      key: 'name',
      label: 'User',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={row.avatar} alt={row.name} style={{ width: 30, height: 30, borderRadius: '50%' }} />
          <div>
            <div style={{ fontWeight: 600 }}>{row.name}</div>
            <div style={{ fontSize: 12, color: '#94a3b8' }}>@{row.username}</div>
          </div>
        </div>
      )
    },
    { key: 'points', label: 'Points', render: (row) => row.points.toLocaleString() }
  ]
  return <Table columns={columns} rows={users} />
}
