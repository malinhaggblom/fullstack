import React from 'react'

const PersonForm = ({handleSubmit, addPerson, newName, addNumber, newNumber}) => {
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div>name: <input onChange={addPerson} value={newName}/></div>
          <div>number: <input onChange={addNumber} value={newNumber}/></div>
          <div><button type="submit">add</button></div>
        </form>
        </div>
    )
}

export default PersonForm