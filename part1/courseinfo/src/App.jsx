const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header coursetitle={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
    return (
      <>
        <h1>{props.coursetitle}</h1>
      </>

    )

}

const Content = (props) => {
  // console.log(props)
  return (
    <>
      {props["parts"].map(value => {
        return <Part partname={value.name} exercises = {value.exercises}/>
      }
      )}
    </>

  )

}

const Total = (props) => {
  let total = 0
  props["parts"].forEach(element => {
    total = total +element.exercises    
  });
  return (
    <p>Number of exercises {total}</p>
  )

}

const Part = (props) => {
  return (
    <p>{props.partname} {props.exercises}</p>
  )
}

export default App