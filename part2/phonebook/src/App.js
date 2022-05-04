import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import PersonService from './services/Person'


const App = () => {
  const [persons, setPersons] = useState([
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, SetSearch] = useState('')
  const [confirm, setConfirm] = useState(null)

  useEffect(() => {
    PersonService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    console.log('promise fulfilled')
  }, [])

  console.log('render', persons.length, 'persons')

  const deleteEntry = (event) => {
    event.preventDefault()
    const id = parseInt(event.target.value)
    const personname = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${personname.name}?`)){
      PersonService
      .remove(id)
      .then(response => {
          setPersons(persons.filter(person => person.id !== id))
      })
    }
  }
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    let sameName = persons.find(person => person.name === newName)
    if (typeof sameName === 'undefined') {
      const nameObject = {
        name: newName, number: newNumber
      }
      PersonService
      .create(nameObject)
      .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
      })
      setConfirm('Added ${newName}')
      setTimeout(() => {
        setConfirm(null)
      }, 2000)
      setNewName('')
      setNewNumber('')
    }
    else {
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`))
      {
        const changedNumber = {...sameName,number:newNumber}
        PersonService.replace(changedNumber)
        .then(responsedata => {
          setPersons(persons.map(person => person.id===responsedata.id?responsedata:person))
        })
      setConfirm(`New number ${newNumber}.`)
      setTimeout(() => {
        setConfirm(null)
      }, 2000)
      }
    }
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    console.log(event.target.value)
    SetSearch(event.target.value)
  }
  const searchName = persons.filter(person => person.name.includes(search))
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={confirm}/>
      <Filter name={search} handleFunction={handleSearchChange}/>
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName}
      handleNameChange={handleNameChange} newNumber={newNumber}
      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons searchName={searchName} deleteEntry={deleteEntry}/>
    </div>
  )
}
export default App