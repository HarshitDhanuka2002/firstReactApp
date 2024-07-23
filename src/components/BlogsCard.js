import React from 'react'

const BlogsCard = (props) => {
  return (
    <div className='blogsCard' style={{display:(props.genre === props.blogtype)?"block":"none"}} onClick={event =>  window.location.href='/blogpage'} >
        <img src={props.image} alt={props.alt}/>
        <span className='blogsCardTitle'>{props.title}</span><br/>
        <span className='blogsCardDescription'>{props.des}</span>
        <p className='blogsCardWriter'>{props.writer}</p>
    </div>
  )
}

export default BlogsCard