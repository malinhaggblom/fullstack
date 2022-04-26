import React from 'react'
import { useState, useRef } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const addPerson = (event) => {
    setNewName(event.target.value)
  }
  const addNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSubmit = (event) => {
    console.log(event.target.value)
    event.preventDefault();
    if (persons.some(
      (person) => (person.name.toLowerCase() === newName.toLowerCase()
      )))
    {
      alert(newName + ' is already added to phonebook')
      setNewName("")
      setNewNumber("")
      return
    }
    const newPerson = { name: newName, number: newNumber}
    setPersons(persons.concat(newPerson))
    setNewName("")
    setNewNumber("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <form onSubmit={handleSubmit}>
          <div>name: <input onChange={addPerson} value={newName}/></div>
          <div>number: <input onChange={addNumber} value={newNumber}/></div>
          <div>
            <button type="submit">add</button>
        </div>
        </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <p key={person.name}>{person.name} {person.number}</p>;
      })}
    </div>
  )
}

export default App