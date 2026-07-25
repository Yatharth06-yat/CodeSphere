import { useState } from 'react'
import useFriends from './hooks/useFriends'
import FriendCard from './components/FriendCard'
import SuggestionRow from './components/SuggestionRow'
import ActivityFeed from './components/ActivityFeed'
import Loader from '../../shared/components/Loader'
import SearchBar from '../../shared/components/SearchBar'
import './styles/Friends.css'

export default function Friends() {
  const { friendsData, loading } = useFriends()
  const [query, setQuery] = useState('')

  if (loading || !friendsData) return <Loader fullPage label="Loading friends..." />

  const filtered = friendsData.friends.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="cs-page cs-fade-in">
      <div className="cs-page__header">
        <div>
          <h1 className="cs-page__title">Friends</h1>
          <p className="cs-page__subtitle">Compare progress and stay motivated together</p>
        </div>
      </div>

      <div style={{ marginBottom: 18, maxWidth: 320 }}>
        <SearchBar value={query} onChange={setQuery} placeholder="Search friends..." />
      </div>

      <div className="cs-grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
        <div>
          <div className="cs-grid cs-grid--2">
            {filtered.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>

          <div className="cs-card" style={{ marginTop: 18 }}>
            <h4 style={{ marginBottom: 4 }}>Suggested Friends</h4>
            {friendsData.suggestions.map((person) => (
              <SuggestionRow key={person.id} person={person} onAdd={() => {}} />
            ))}
          </div>
        </div>

        <ActivityFeed activity={friendsData.activity} />
      </div>
    </div>
  )
}
