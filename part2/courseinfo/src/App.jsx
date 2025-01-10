const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

const Course = ( {course}) => {
  let total = 0
  course.parts.map(entry => total+=entry.exercises)
  console.log(total)
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