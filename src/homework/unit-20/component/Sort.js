import React, { Component} from 'react'

  class Sort extends Component {

    onSort = (byName, byStatus) => {
      this.props.onSort(byName, byStatus)
    }

    render() {
      const { byName, byStatus} = this.props

      return (
        <>
          <div className="search-sort">
            <div className="search-input">
              <input type="text" name="" value =""></input>

              <div  className="search-btn">
                <i class="fas fa-search search-btn-icon"></i>
              </div>
            </div>

            <div className="sort">
              <div className="sort-btn" >
                <p>Sắp xếp</p>

                <span>
                  <i class="fas fa-sort-down sort-down-icon"></i>
                </span>
              </div>

              <ul className="sort-list">
                <li className="sort-list-item" onClick={ () => this.onSort("name", 1)}>
                  Từ A-Z

                  <div className={ (byName === "name" && byStatus === 1) ? "sort-check" : "hiden"}>
                    <i class="fas fa-check fa-check-icon"></i>
                  </div>
                </li>

                <li className="sort-list-item" onClick={ () => this.onSort("name", -1)}>
                  Từ Z-A

                  <div className={ (byName === "name" && byStatus === -1) ? "sort-check" : "hiden"}>
                    <i class="fas fa-check fa-check-icon"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </>
      )
    }
  }



export default Sort
