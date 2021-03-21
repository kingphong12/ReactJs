import React, { Component } from 'react';
// import checkImg from '../imges/check.svg'
// import checkImgComplete from  '../imges/check-complete.svg'


class Task extends Component {

  constructor(props) {
    super(props)

    this.state ={
      filterName: '',
    }
  }

  toogleCheck(aitem) {
    this.props.toogleCheck(aitem)
  }

  onChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
    )
    this.setState({
      [name]: value
    })
  }

  onDelItem = (item) => {
    this.props.onDelItem(item)
  }
	render() {
    const {tasks, groups} = this.props
		return (
      <div className="wrap-list">
        <form >
          <input
            className="input"
            name="filterName"
            value={ this.state.filterName}
            onChange = { this.onChange}
          ></input>
        </form>

        <ul className="list-task">
          {
            tasks.map((task, index) => {

              return (
                <li
                  className="list-task-item"
                  key={ index }
                >

                  <div className="list-task-item-left">
                    <i
                      className={task.isCheck ? 'fas fa-check-circle icon-checked' : 'far fa-check-circle icon-checked'}
                      onClick={() => this.toogleCheck(task) }
                    >
                    </i>

                    <span className={task.isCheck ? 'task-item-text out-line' : 'task-item-text'}>
                      { task.name }
                    </span>
                  </div>

                  <div className="del" onClick={ () => this.onDelItem(task)}>
                    <i className="fas fa-times del-icon"></i>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
		)
	}
}

export default Task
