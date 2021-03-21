import React, { Component } from 'react'
import Input from './homework/unit-20/component/Input'
import ListTag from './homework/unit-20/component/ListTag'
import Footer from './homework/unit-20/component/Footer'
import Task from './homework/unit-20/component/Task'
import Sort from './homework/unit-20/component/Sort'
import './homework/unit-20/scss/style.scss'
import "@fortawesome/fontawesome-free/css/all.css";


class App extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     color: ['red', 'yellow', ' blue'],
  //     groups: [
  //       {
  //         id: 0,
  //         tag: 'all',
  //       },
  //       {
  //         id: 1,
  //         tag: 'Home',
  //       },
  //       {
  //         id: 2,
  //         tag: 'Work',
  //       },
  //       {
  //         id: 3,
  //         tag: 'School',
  //       },
  //     ],
  //     tasks: [
  //       {
  //         id: 0,
  //         name: 'javascript',
  //         isCheck: true,
  //         selected: 'Home',
  //       },
  //       {
  //         id: 1,
  //         name: 'Learn Reactjs',
  //         isCheck: true,
  //         selected: 'School',
  //       },
  //       {
  //         id: 2,
  //         name: 'toan',
  //         isCheck: false,
  //         selected: 'Work',
  //       },
  //       {
  //         id: 3,
  //         name: 'Learn Reactjs',
  //         isCheck: false,
  //         selected: 'School',
  //       },
  //       {
  //         id: 4,
  //         name: 'toan',
  //         isCheck: false,
  //         selected: 'Work',
  //       },
  //       {
  //         id: 5,
  //         name: 'Learn Reactjs',
  //         isCheck: false,
  //         selected: 'School',
  //       }
  //     ],
  //     status: [
  //       {
  //         id: 0,
  //         stus: 'All task',
  //         isComplete: 'ALL TASK',
  //       },
  //       {
  //         id: 1,
  //         stus: 'Active',
  //         isComplete: 'ACTIVE',
  //       },
  //       {
  //         id: 2,
  //         stus: 'Completed',
  //         isComplete: 'COMPLETED',
  //       },
  //     ],
  //     filteredTasks: [],
  //     currentGroup: 0,
  //     currentStatus: 'ALL TASK', // IN_PROGRESS, COMPLETED
  //     filter: {
  //       name: '',
  //       status: -1
  //     },
  //     byName: "name",
  //     byStatus: 1
  //   }
  // }

  setCurrentGroup = (gruopsItem) => { // task item

    this.setState({
      currentGroup: gruopsItem.id,
    })
    // this.filterData({
    //   tasks: this.state.tasks,
    //   currentGroup: gruopsItem.id,
    //   currentStatus: this.state.currentStatus,
    //   gruopsItem
    // })
  }

  filterData = (taskList = [], currentGroup = '', groups = [], currentStatus = '') => {
    switch(currentGroup)
    {
      case 1: {
        switch(currentStatus)
        {
          case 'ACTIVE': {
            return taskList.filter(item => !item.isCheck && item.selected === groups[1].tag )
          }
          case 'COMPLETED': {
            return taskList.filter(item => item.isCheck && item.selected === groups[1].tag)
          }
          default: {
            return taskList.filter(item => item.selected === groups[1].tag)
          }
        }
      }
      case 2: {
        switch(currentStatus)
        {
          case 'ACTIVE': {
            return taskList.filter(item => !item.isCheck && item.selected === groups[2].tag )
          }
          case 'COMPLETED': {
            return taskList.filter(item => item.isCheck && item.selected === groups[2].tag)
          }
          default: {
            return taskList.filter(item => item.selected === groups[2].tag)
          }
        }
      }
      case 3: {
        switch(currentStatus)
        {
          case 'ACTIVE': {
            return taskList.filter(item => !item.isCheck && item.selected === groups[3].tag )
          }
          case 'COMPLETED': {
            return taskList.filter(item => item.isCheck && item.selected === groups[3].tag)
          }
          default: {
            return taskList.filter(item => item.selected === groups[3].tag)
          }
        }
      }
      default : {
        switch(currentStatus)
        {
          case 'ACTIVE': {
            return taskList.filter(item => !item.isCheck)
          }
          case 'COMPLETED': {
            return taskList.filter(item => item.isCheck)
          }
          default: {
            return taskList
          }
        }
      }
    }
  }

  toogleCheck = (aitem) => {
    const isCheck = aitem.isCheck
    const index = this.state.tasks.indexOf(aitem)
    this.setState({
      ...this.state,
      tasks: [
        ...this.state.tasks.slice(0, index),
        {
          ...aitem,
          isCheck: !isCheck
        },
        ...this.state.tasks.slice(index + 1),
      ]
    })
  }

  onSubmit = (data) => {
    // console.log(data.name);
    const { groups, currentGroup, tasks} = this.state
    const task = {
      id: 6,
      name: data.tasksInput,
      isCheck: false,
      selected: currentGroup !== 0 ? groups[currentGroup].tag : '',
    }
    tasks.push(task)
    this.setState({
      ...this.state,
      tasks: tasks
    })
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 1)
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus
      }
    })
  }

  onDelItem = (item) => {
    const index = this.state.tasks.indexOf(item)
    this.state.tasks.splice(index, 1)
    this.setState({
      ...this.state,
      tasks: this.state.tasks
    })
  }

  setCurrentStatus = (statusItem) => {
    this.setState({
      currentStatus: statusItem.isComplete
    })
  }

  clearItem = () => {


  }

  onSort = (byName, byStatus) => {
    this.setState({
      byName: byName,
      byStatus: byStatus
    })
  }
  render () {

    let { groups, status, currentStatus,tasks, currentGroup, filter, byName, byStatus} = this.state

    if(filter) {
      if(filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
        })
      }
    }

    tasks.sort((a, b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()) {
        return byStatus
      }
      else if(a.name.toLowerCase() < b.name.toLowerCase()) {
        return -byStatus
      }
      else return 0
    })

    return (
      <div className="container">
        <div className="header">
          <p>REACT TODO APP</p>
          <span></span>
        </div>

        <div className="wrap">

          <Input
            onSubmit ={ this.onSubmit }
          />

          <Sort
            byName ={ byName}
            byStatus = { byStatus}
            onSort = { this.onSort}
          />

          <ListTag
            groups={ groups }
            currentGroup={ currentGroup }
            setCurrentGroup={ this.setCurrentGroup }
          />
          <Task
            groups={ groups }
            tasks = {this.filterData(tasks, currentGroup, groups, currentStatus) }
            toogleCheck = { this.toogleCheck}
            taskOnChage = { this.taskOnChage}
            onFilter = { this.onFilter}
            onDelItem = { this.onDelItem}
          />

          <Footer
            status={ status }
            currentStatus={ currentStatus }
            setCurrentStatus={ this.setCurrentStatus }
            clearItem = { this.clearItem}
          />

        </div>
      </div>
    )
  }
}

export default App
