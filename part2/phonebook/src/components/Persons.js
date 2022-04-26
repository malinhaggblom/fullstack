import React from 'react'

const Persons = ({person, filter}) => {
    return(
        <div>
            <p key={person.name}>{person.name} {person.number}</p>
      </div>
    )
  }
  
export default Persons