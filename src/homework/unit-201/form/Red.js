import React from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Blue from './Blue'
class Red extends React.Component {

  render() {
    return(
      <div className="wrap-red">
        <p>{this.context.age}</p>
        <Blue />
      </div>
    )
  }
}

Red.contextType = GlobalContext
export default Red
