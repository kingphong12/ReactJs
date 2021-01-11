// de tao ra mot component thi phai goi react vao 

import React, { Component } from 'react'
import './scss/index.scss'
import MusicList  from './component/MusicList'
class App extends Component {

	constructor() {
		super()

		this.state = {
			count: 0,
		}

		// this.increment = this.increment.bind(this) // thực hiện gán biến this của App và this của increment thành 1 biến this chung
	}

	increment = () => {
		// sử dụng hàm setState({}) để thay đổi giá trị của biến
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {

		return (
			<>
				<h1>hoc react</h1>
				<h2>Count: {this.state.count}</h2>

				<button onClick={this.increment}>Increment 1</button>

				<MusicList/>
			</>
		)
	}
}

export default App