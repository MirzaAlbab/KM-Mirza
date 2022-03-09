// how abstraction work

const Student = ({props}) => {
  console.log(props)
}

// Student({name: 'Aldi', age: 20})
// student({firstname: 'Aldi', lastName: 'Daniela'})

<Student name='Aldi' age={20}/>;