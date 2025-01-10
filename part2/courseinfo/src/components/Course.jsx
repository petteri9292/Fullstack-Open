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

export default Course