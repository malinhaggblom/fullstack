import React from 'react'

const Course = ({course}) => {
    console.log(course)
    const content = course.parts.map(part => 
        (<Part key={part.id} name={part.name} exercises={part.exercises}/>))
    return (
        <div>
            <h1>{course.name}</h1>
            {content}
        </div>
    )
}
const Part = (props) => 
  <p>
    {props.name} {props.exercises}
  </p>

export default Course