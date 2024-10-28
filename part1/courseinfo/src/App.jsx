const App = () => {
  const course = 'Half Stack application development'
  const courseParts = [
    { partname: 'Fundamentals of React', exercises: 10 },
    { partname: 'Using props to pass data', exercises: 7 },
    { partname: 'State of a component', exercises: 14 }
  ];
  

  return (
    <div>
      <Header coursetitle={course}></Header>
      <Content parts={courseParts}></Content>
      <Total parts={courseParts} />
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
      <Part partname={props.parts[0].partname} exercises={props.parts[0].exercises}></Part>
      <Part partname={props.parts[1].partname} exercises={props.parts[1].exercises}></Part>
      <Part partname={props.parts[2].partname} exercises={props.parts[2].exercises}></Part>
    </>

  )

}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + 
      props.parts[2].exercises}</p>
  )

}

const Part = (props) => {
  return (
    <p>{props.partname} {props.exercises}</p>
  )
}

export default App