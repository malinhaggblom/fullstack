import React from 'react'
import { useState, useRef } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  const addPerson = (event) => {
    setNewName(event.target.value)
  }
  const addNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
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
      <div>filter shown with <input value={filter} onChange={handleFilterChange}/></div>
      <h2>add a new</h2>
        <form onSubmit={handleSubmit}>
          <div>name: <input onChange={addPerson} value={newName}/></div>
          <div>number: <input onChange={addNumber} value={newNumber}/></div>
          <div><button type="submit">add</button></div>
        </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((filteredPerson) => {
          return (
            <p key={filteredPerson.name}>
              {filteredPerson.name} {filteredPerson.number}
            </p>
          )
        })}
    </div>
  )
}

export default App