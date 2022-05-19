import React from 'react'

const PersonList =({persons, deleteAccount}) => {
   
  return (
      <ul style={{ listStyle: 'none'}}>
      <div>
          {persons.map(person =>  
            <div key={person.name}>{person.name} {person.number} <button onClick={() =>deleteAccount(person.id)}>Delete</button></div>
          )}
      </div>
      </ul>
  )
}
export default PersonList;