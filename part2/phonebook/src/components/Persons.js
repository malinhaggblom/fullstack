import React from 'react'

const Persons = ({persons, filter}) => {
    return(
      <div>
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
  
export default Persons