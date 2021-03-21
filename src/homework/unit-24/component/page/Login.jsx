import React,  { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { setUser } from '../../../../redux/state/User'
import { useDispath } from ''

impor
const Login = () => {
  const history = useHistory()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handelOnChangeUserName = (event) => {

    setUserName(event.target.value)
  }

  const handelOnChangePassword =(event) => {
    setPassword(event.target.value)
  }

  const submit = (event) => {
    // lấy username pasword
    event.preventDefault()
    const id = userName

    if(!id) {
      return
    }

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      console.log('s=====respone', response );
      const user = response.data

      dispath{
        setUser(u)
      }
      history.push('/')
      dis
    })
    .catch( error => {
      alert('nhập sai')
    })
  }

 return (
   <>
    <div>
      <form>
        <label >username</label>
        <input
          type="text"
          value={userName}
          onChange = { handelOnChangeUserName}
        />
        <label>password</label>
        <input
          type="text"
          value={password}
          onChange = { handelOnChangePassword}
        />

        <button type="submit" onClick={submit}>Login</button>
      </form>
    </div>
   </>
 )
}

export default Login
