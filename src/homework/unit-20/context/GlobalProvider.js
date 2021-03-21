import React from 'react'
import GlobalContext from './GlobalContext'

class GlobalProvider extends React.Component {

  render() {
    return (
      <GlobalContext.Provider>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalProvider
