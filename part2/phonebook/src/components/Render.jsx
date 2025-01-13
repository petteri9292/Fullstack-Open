const Render = ({persons, searchTerm}) => { 
    return (<>{persons.filter((person) => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((person) => (
      <div key={person.id}>
        {person.name} {person.number}
      </div>
    ))}</>)
}

export default Render