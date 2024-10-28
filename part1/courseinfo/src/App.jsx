const App = () => {
  const course = 'Half Stack application development'
  const courseParts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
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

      <p>{props.parts[0].part} {props.parts[0].exercises}</p>
      <p>{props.parts[1].part} {props.parts[1].exercises}</p>
      <p>{props.parts[2].part} {props.parts[2].exercises}</p>
    </>

  )

}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + 
      props.parts[2].exercises}</p>
  )

}

export default App