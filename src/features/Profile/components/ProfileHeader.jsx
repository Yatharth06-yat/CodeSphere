import { FiMapPin } from 'react-icons/fi'
import { formatDate } from '../../../shared/utils/formatDate'

export default function ProfileHeader({ profile }) {
  return (
    <div className="cs-card pf-header">
      <img src={profile.avatar} alt={profile.name} />
      <div>
        <h2>{profile.name}</h2>
        <p className="pf-header__username">@{profile.username}</p>
        <p className="pf-header__bio">{profile.bio}</p>
        <div className="pf-header__meta">
          <span><FiMapPin /> {profile.location}</span>
          <span>Joined {formatDate(profile.joined)}</span>
        </div>
      </div>
    </div>
  )
}
