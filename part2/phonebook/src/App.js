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
    </div>
  )
}

export default App