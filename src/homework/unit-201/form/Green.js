import React from 'react'
import { GlobalContext } from '../context/GlobalContext'

class Green extends React.Component {

  render() {
    return (
      <div className = "Green">
        <GlobalContext.Consumer>
          {context => (context.age)}
        </GlobalContext.Consumer>
      </div>
    )
  }
}

export default Green
