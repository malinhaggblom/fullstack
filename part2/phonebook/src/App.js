import { useState, useRef } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  
  const addPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log(event.target.value)
    event.preventDefault();
    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name: <input onChange={addPerson} value={newName}/>
          </div>
          <div>
            <button type="submit">add</button>
        </div>
        </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <p key={person.name}>{person.name}</p>;
      })}
    </div>
  )
}

export default App