import React, { Component } from 'react'
import './NewsItem.css'
export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } = this.props
    return (
      <div>
        <div className="card my-3"  >         

            <img src={!imageurl ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : imageurl} alt="" />
            <div className="container" >
            <span className="badge rounded-pill bg-success" style={{zIndex:'1',left:'50%',margin:'-8px'}}>
              {source}
            </span>
            </div> 
            <h5 className="card-title" style={{padding:"10px"}}>{title}...  </h5>

          <div className="card-body">
            {/* <h5 className="card-title">{title}...  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span></h5> */}
            <p className="card-text">{description}... </p>
            <p className="card-text" style={{color:'green'}}><small  >By {!author ? "Anonymus" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsItem