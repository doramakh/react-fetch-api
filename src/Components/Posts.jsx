import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Posts () {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        setLoading(true)
        response.json().then(data => {
            setData(data)
            setLoading(false)
        })
        
    })
  }, [])
  
  return (
    <>
      <section>
        <div className="container">
            <div>{loading && <>loading</>}</div>
              <ol>
              {
                data.map(post => {
                  return (
                    <li key={post.id}>
                    <Link className="link" to={`/posts/`+ post.id}>
                      {post.id + "." + post.title}
                    </Link>
                  </li>
                  )
                })
              }
            </ol>
        </div>
      </section>
    </>
  )
    
}

export default Posts