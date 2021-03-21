import React, { Component } from 'react'
import { BsPlus } from 'react-icons/bs';

 class Input extends Component {

  constructor(props) {
    super(props)

    this.state ={
      newItem: '',
      tasksInput: '',
    }

  }

	onChangeValue = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      newItem: value,
      [name]: value.trim()
    })
  }

  onSubmit =(event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      newItem: '',
      // ...this.state,
    })
    // console.log(this.state);
  }

	render() {
		return (
			<>
				<form className="form" onSubmit={ this.onSubmit}>
					<input
            className = "input"
            type="text"
            placeholder="what are you doing?"
            name="tasksInput"
            value={ this.state.newItem}
            onChange={ this.onChangeValue }
          />
					<button type='submit' className="add">
            <BsPlus className="icon-add" />
					</button>
				</form>
			</>
		)
	}
 }
 export default Input
