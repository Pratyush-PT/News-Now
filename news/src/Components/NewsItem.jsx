import React from 'react'
import img from '../assets/news.avif'

const NewsItem = ({title,description,src,url}) => {
  return (
    
      <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2 col-xs-1 " style={{maxWidth
      :"345px"}}>
        <img src={src?src:img}  className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,200):"Loading."}...</p>
            <a href={url} className="btn btn-primary">READ MORE</a>
        </div>
        </div>  
  )
}

export default NewsItem
