import React from 'react'
import CommentsList from './CommentsList'
import { commentsData } from './data/comments'

function Home() {

  let red_color = { color: 'red' }
  var blue_color = { color: 'blue' }

  var loading = true
  /* if(loading){
    return <h1>Loading ...</h1>
  } */
  const test = <h2 style={blue_color}>Test</h2>

  const testEvent = (nb , e)=>{
    console.log('test event' , e)
  }
  return (<><div >Home
    {test}
    {loading ?<><h1>Test</h1> <h2>tttt</h2></>: <h2>abc</h2>}
    
    <CommentsList comments={commentsData}  title="Test props" 
    count={commentsData.length}></CommentsList>

    <button onClick={(e)=>testEvent(5 , e)}>Cliquer </button>
    <input onKeyUp={testEvent} />
  </div>
  </>
  )
}
export default Home

