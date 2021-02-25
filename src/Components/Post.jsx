import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Post () {

    const params = useParams()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/'+ params.id)
    .then(response => {
        setLoading(true)
        response.json().then(data => {
            setData(data)
            setLoading(false)
        })
        
    })
  }, [params])

  // console.log(data) // ASK THIS QUES
  
  return (
    <>
      <section className="post-section">
        <div className="container">
            <div>{loading && <>loading</>}</div>
            <h2 className="post-title">{!data ? <>loading</> : data.title} </h2>
            <p className="post-body">{!data ? <>loading</> : data.body} </p> 
            <img src={'https://picsum.photos/id/' + params.id + '/600/320'} alt="Random" />
            {/* <p>{data.title}</p>   */}
        </div>
      </section>
    </>
  )
    
}

export default Post
