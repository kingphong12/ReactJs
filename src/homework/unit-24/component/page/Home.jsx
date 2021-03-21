import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'


const Home = () => {

  const [posts, setPorts] = useState([])
  const [photos , setPhotos] = useState([])
  const [isLoadingPosts, setIsLoadingPosts] = useState(true)

  const fetchPosts = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_start=10&_limit=5`)
    .then(resspone => {
      setIsLoadingPosts(false)
      setPorts(resspone.data)
    })
    .catch(() => {
      setIsLoadingPosts(false)
    })
  }

  const fetchPhotos = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_start=10&_limit=10`)
    .then(resspone => {
      setPhotos(resspone.data)
    })
  }

  useEffect(() => {
    fetchPosts()
    fetchPhotos()
  }, [])


 return (
   <>
    <p>Home</p>
    <p>Danh sách bài viêt</p>
      {
        isLoadingPosts && <p>Loadding</p>
      }
      {
        posts.map((post, index) => (
          <div className="item" key={index}>
            <Link to ={'/posts/' + post.id}>{post.title}</Link>

          </div>
        ))
      }

    <p>danh sách ảnh</p>

    {
        photos.map((photo, index) => (
          <div className="item" key={index}>
             <img src={photo.thumbnailUrl} alt="" />

          </div>
        ))
      }
   </>
 )
}

export default Home
