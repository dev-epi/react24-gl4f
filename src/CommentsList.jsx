import React from 'react'
import PropTypes from 'prop-types'

function CommentsList({comments , title , count}) {
   
  return (
    <div>

<h1>{title}</h1>
<h2>Comments ({count})</h2>
    <ul> {/* ctrl : */}
      {
        comments.map((row, index) => <li key={index}>{row.comment}</li>)
      }
    </ul>
    </div>
  )
}

CommentsList.defaultProps = {
    comments : [{id : 0 , comment :'ok'}]
}

CommentsList.propTypes = {
    count : PropTypes.number
}

export default CommentsList