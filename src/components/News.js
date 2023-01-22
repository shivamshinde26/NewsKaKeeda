import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import Spinner2 from './Spinner2'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import './News.css'
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 8
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  }
  async updateNews(props) {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d481af1cc53141f3b3320657caed41f6&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({ articles: parsedData.articles })
    this.setState({
      articles: parsedData.articles,
      // totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews()
  }
  // handlePrevious = async () => {

  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews()
  // }
  // handleNext = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews()
  // }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d481af1cc53141f3b3320657caed41f6&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 style={{ textAlign: "center" }}>{this.capitalizeFirstLetter(this.props.category)}-Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner2 />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>



      </div>
    )
  }
}

export default News