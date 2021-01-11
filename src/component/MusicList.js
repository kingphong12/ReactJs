import React, { Component } from 'react'
import { musicList } from '../mocData/music'

class MusicList extends Component {
	state = {
			musicList
	}

	get musics() { // trả về các li trong data
		return this.state.musicList.map((item, index) => {
			return (
					<li key={index}>
						<p>Title: {item.title}</p>
						<p>Name: {item.name}</p>
						<p>Time: {item.time}</p>
					</li>
			)
		})
	}
	
	render() {
			return (
					<>
					<ul>
						{this.musics}
					</ul>
					</>
			)
	}
}

export default MusicList