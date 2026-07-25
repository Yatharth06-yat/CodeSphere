export default function FriendCard({ friend }) {
  return (
    <div className="cs-card cs-card--hover fr-card">
      <div className="fr-card__avatar-wrap">
        <img src={friend.avatar} alt={friend.name} />
        <span className={`fr-card__status fr-card__status--${friend.status}`} />
      </div>
      <div className="fr-card__info">
        <h4>{friend.name}</h4>
        <p>@{friend.username}</p>
      </div>
      <div className="fr-card__stats">
        <div><strong>{friend.solved}</strong><span>Solved</span></div>
        <div><strong>{friend.streak}</strong><span>Streak</span></div>
      </div>
    </div>
  )
}
