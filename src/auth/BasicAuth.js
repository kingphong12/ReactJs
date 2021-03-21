import React from 'react'
import { Redirect } from "react-router-dom";
import { useSelector, useSlector } from 'react-redux'

const BasicAuth = ({ Component, ...outherProps }) => {
  const user = useSelector(store =>store.user)

  return (

    <>
      {
        user ? <Component {...outherProps}/> : <Redirect to="/login" /> // xacs thuc thong tin user neu co thi vao hom k thi chuyen qua login
      }
    </>
  )
}

export default  BasicAuth
