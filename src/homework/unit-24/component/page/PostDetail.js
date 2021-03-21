import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const PostDetail = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  const fetchPost = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data)
      })
  }

  useEffect(() => {
    fetchPost(id)
  }, [])

  return <>
    <h1>Post detail</h1>
    {
      post &&
      <div>
        <h2>{post.title}</h2>
      </div>
    }

  </>
}

export default PostDetail
