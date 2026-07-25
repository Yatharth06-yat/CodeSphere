export default function TopThree({ users }) {
  const [first, second, third] = users
  const order = [second, first, third]
  return (
    <div className="lb-podium">
      {order.map((user, idx) => (
        <div key={user.rank} className={`lb-podium__item lb-podium__item--${user.rank}`}>
          <img src={user.avatar} alt={user.name} />
          <p className="lb-podium__rank">#{user.rank}</p>
          <p className="lb-podium__name">{user.name}</p>
          <p className="lb-podium__points">{user.points.toLocaleString()} pts</p>
        </div>
      ))}
    </div>
  )
}
