const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.course.parts.map(part => (
        <Part part={part} />
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <p>Number of exercises: {total}</p>
  )
}

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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />    
    </div>
  )
}

export default App;