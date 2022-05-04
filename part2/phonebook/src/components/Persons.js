import React from 'react'

const Persons = ({searchName, deleteEntry}) => {
    return(
      <div>{searchName.map(person =>
      <div key={person.id}>{person.name} {person.number} <button type="button" value={person.id} onClick={deleteEntry}>delete</button></div>)}
    </div>
  )
}
export default Persons
