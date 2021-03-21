import React from 'react'
import GlobalContext from './homework/unit-20/context/GlobalContext'
import Form from "./homework/unit-20/form/Form"
import Red from './homework/unit-20/form/Red'
class App extends React.Component {

  constructor(props) {

    super(props)

    this.state ={
      name: 'Truong xuan phong',
      age: 27,
      // INC: () => this.setState({...this.state, age: this.state.age + 1}),
      // ENC: () => this.setState({ ...this.state, age: this.state.age  - 1})
    }
  }

  render() {
    return (
      < GlobalContext.Provider value = {{
        ...this.state,
        INC: this.INC,
        ENC: this.ENC
      }}>
        <Form />
        <Red />
      </ GlobalContext.Provider>
    )
  }
}

export default App
