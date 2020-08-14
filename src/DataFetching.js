import React,{useState,useEffect} from 'react';
import axios from "axios"
import './App.css';

function DataFetching() {
  const [post,setPost] = useState({})
  const [id,setId] = useState(0)
  useEffect(()=>{
    const api = (`https://jsonplaceholder.typicode.com/posts/${id}`)
    axios.get(api)
    .then((res)=>{
        console.log(res)
        setPost(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })

  },[id])
  return (

    <div className="App">
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
  <p>{post.title}</p>

 {/*   <ul style={{listStyle:"none"}}>
        {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>

        )

        )
    </ul>*/}
    </div>
  );
}

export default DataFetching;
