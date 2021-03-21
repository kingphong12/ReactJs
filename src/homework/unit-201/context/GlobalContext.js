
import React from 'react'

const GlobalContext = React.createContext()

class GlobalProvider extends React.Component {

  render() {
    return (
      <GlobalContext.Provider >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalProvider
