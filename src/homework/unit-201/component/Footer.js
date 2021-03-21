import React, { Component } from 'react'


class Footer extends Component {

  setCurrentStatus = (statusItem) => {
    this.props.setCurrentStatus(statusItem)
  }

  clearItem = () => {
    this.props.clearItem()
  }
  render() {
    const {currentStatus, status} = this.props
		return (
        <div className="footer">
          <div className="footer-wrap">
            <ul className="footer-list">
              {
                status.map((status, index) => {
                  return (
                    <li className = {status.isComplete === currentStatus ? "footer-list-item selectStatus" : "footer-list-item" }
                    key={ index }
                    onClick={ () => this.setCurrentStatus(status)}
                    >
                      {status.stus}
                    </li>
                  )
                })
              }

              <li>
                <button
                  className="footer-list-item btn"
                  onClick={ this.clearItem}
                  >
                  Clear Completed</button>
              </li>
            </ul>


          </div>

          <div>
            <p> {}/{}</p>
          </div>
			  </div>
		)
	}

}
export default Footer
