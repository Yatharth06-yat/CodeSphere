import { FiGithub, FiUsers, FiUserPlus, FiFolder } from 'react-icons/fi'
import { formatDate } from '../../../shared/utils/formatDate'

export default function ProfileCard({ profile }) {
  if (!profile) return null
  return (
    <div className="cs-card gh-profile">
      <img src={profile.avatar} alt={profile.name} className="gh-profile__avatar" />
      <div className="gh-profile__info">
        <h3>{profile.name}</h3>
        <p className="gh-profile__username"><FiGithub /> @{profile.username}</p>
        <p className="gh-profile__bio">{profile.bio}</p>
        <p className="gh-profile__joined">Joined {formatDate(profile.joined)}</p>
      </div>
      <div className="gh-profile__stats">
        <div><FiFolder /><span>{profile.publicRepos}</span><small>Repos</small></div>
        <div><FiUsers /><span>{profile.followers}</span><small>Followers</small></div>
        <div><FiUserPlus /><span>{profile.following}</span><small>Following</small></div>
      </div>
    </div>
  )
}
