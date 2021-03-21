import React, { Component } from 'react'

class ListTag extends Component {

  // get className() {
  //   return this.props.currentGroup === this.props.group.id ? 'menu-item -is-active' : 'menu-item'
  // }

  setCurrentGroup(gruopsItem) {
    this.props.setCurrentGroup(gruopsItem)
  }

  render () {
    const { groups, currentGroup } = this.props

		return (
			<div className="list">
				<div className="list-tag">
					<p>Tag</p>
				</div>

				<div>
					<ul className="menu">
						{
							groups.map((group, index) => {
								return (
									<li className={ (currentGroup === group.id) ? 'menu-item -is-active' : 'menu-item' }
                    key={index}
                    onClick={ () => this.setCurrentGroup(group) }
									>
										<span className="item-color-icon" />
										{ group.tag }
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default ListTag
