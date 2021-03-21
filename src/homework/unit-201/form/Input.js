import React from 'react'
import { GlobalContext } from '../context/GlobalContext'
class Input extends React.Component {

  render() {
    return (
      <input value={this.context.name} ></input>
    )
  }
}

Input.contextType = GlobalContext
export default Input
