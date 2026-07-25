import { FiUserPlus } from 'react-icons/fi'
import Button from '../../../shared/components/Button'

export default function SuggestionRow({ person, onAdd }) {
  return (
    <div className="fr-suggestion">
      <img src={person.avatar} alt={person.name} />
      <div className="fr-suggestion__info">
        <h5>{person.name}</h5>
        <p>@{person.username}</p>
      </div>
      <Button size="sm" variant="secondary" icon={FiUserPlus} onClick={() => onAdd(person.id)}>Add</Button>
    </div>
  )
}
