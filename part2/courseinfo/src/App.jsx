const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>{courses.map(entry => <Course course={entry} key = {entry.id}></Course>)}</>
  )
}

const Course = ( {course}) => {
  const total = course.parts.reduce((sum,entry) =>  sum+entry.exercises,0)
  // console.log(total)
  return (
    <>
      <Header coursetitle={course.name}></Header>
      {course.parts.map(entry => <Part partname={entry.name} exercises={entry.exercises} key={entry.id}></Part>)}
      <b>total of {total} exercises</b>
    </>
  )

}

const Header = (props) => {
  return (
    <>
      <h1>{props.coursetitle}</h1>
    </>
    
  )
}

const Part = (props) => {
return (
  <p>{props.partname} {props.exercises}</p>
  )
}


export default App