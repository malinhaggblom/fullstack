import React from 'react'

const Course = ({course}) => {
    console.log(course)
    const content = course.parts.map(part => 
        (<Part key={part.id} name={part.name} exercises={part.exercises}/>))
    const total = 
        course.parts.reduce((s, p) => s= s+p.exercises,0)
    return (
        <div>
            <h3>{course.name}</h3>
            {content}
            <b>total of {total} exercises</b> 
        </div>
    )
}
const Part = (props) => 
  <p>
    {props.name} {props.exercises}
  </p>

export default Course