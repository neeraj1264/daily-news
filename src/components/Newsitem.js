import React from 'react'

const Newsitem =(props)=> {
  
    let {title, description, imageurl, newsurl, author, publishedAt} = props
    return (
      
        <div className="card pic " >
        <img src={imageurl} className="card-img-top" alt="..."/>
        <div className="card-body bg-dark text-light ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text "><small>By {author} on {new Date(publishedAt).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }

  export default Newsitem
