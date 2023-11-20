import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
   capitalize=(s)=>
  {
      return s[0].toUpperCase() + s.slice(1);
  }
  constructor(props){
    super(props);
    this.state = {
     articles: [],
     loading: false,
     page: 1,
     totalResults: 0
    }
    document.title = `${this.capitalize(this.props.category)} - Global News`
  }
  async updatenews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=${this.props.api}`
       this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false
        })
  }
  async componentDidMount (){
 this.updatenews()

}
  fetchMoreData = async() => {
    this.setState({
      page: this.state.page +1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page +1}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=${this.props.api}`
       this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          page: this.state.page +1,
          totalResults: parsedData.totalResults,
          loading: false
        })
  };

  render() {
    return (<>
      <div className='container my-6 text-center space-between margin'>
        <h1>{`Global News - Top ${this.capitalize(this.props.category)} Headlines`}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h1>Fetching Data...</h1>}
        >
        <div className='row my-5 mx-5 '>
          {this.state.articles.map((e)=>{
           return  <div className='col-md-4 my-2' key={e.url}>
            <Newsitem title={e.title} description={e.description}
             imageurl={e.urlToImage?e.urlToImage:"nodp.png"}
              newsurl={e.url} author={e.author} publishedAt={e.publishedAt} />
            </div>
          })}
    
      </div>
      </InfiniteScroll>
      </div>
      </>
    )
  }
}

