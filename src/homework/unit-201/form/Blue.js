
import React from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Green from './Green'

 const Blue = () => (
  <div className="Blue">
    <GlobalContext.Consumer>
      {
        context => (
          <>
            <button onClick={context.onINC = this.onINC}>INC</button>
            <button
              onClick={context.onENC}

            >ENC</button>
          </>
      )}
    </GlobalContext.Consumer>

    <Green />
  </div>
 )

export default Blue
