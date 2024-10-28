const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  

  return (
    <div>
      <Header coursetitle={course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total part1 = {part1} part2 = {part2} part3 = {part3} />
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
      <Part partname={props.part1.name} exercises={props.part1.exercises}></Part>
      <Part partname={props.part2.name} exercises={props.part2.exercises}></Part>
      <Part partname={props.part3.name} exercises={props.part3.exercises}></Part>
    </>

  )

}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + 
      props.part3.exercises}</p>
  )

}

const Part = (props) => {
  return (
    <p>{props.partname} {props.exercises}</p>
  )
}

export default App