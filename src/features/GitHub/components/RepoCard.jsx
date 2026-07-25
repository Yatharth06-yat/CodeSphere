import { FiStar, FiGitBranch } from 'react-icons/fi'

export default function RepoCard({ repo }) {
  return (
    <div className="cs-card cs-card--hover gh-repo">
      <h4>{repo.name}</h4>
      <p className="gh-repo__desc">{repo.description}</p>
      <div className="gh-repo__meta">
        <span className="cs-badge cs-badge--blue">{repo.language}</span>
        <span><FiStar /> {repo.stars}</span>
        <span><FiGitBranch /> {repo.forks}</span>
      </div>
    </div>
  )
}
