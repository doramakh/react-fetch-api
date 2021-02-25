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
      <section>
        <div className="container">
            <div>{loading && <>loading</>}</div>
            <h2>{!data ? <>loading</> : data.title} </h2>
            <p>{!data ? <>loading</> : data.body} </p> 
            {/* <p>{data.title}</p>   */}
        </div>
      </section>
    </>
  )
    
}

export default Post
