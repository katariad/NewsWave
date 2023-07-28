import React, { Component } from "react";
import Newscards from "./Newscards";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Cont1 extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults:0
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1).toLowerCase()
    } - Newswave`;
  }

  async updatenews() {
    this.props.progress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.progress(50);
    let parsedData = await data.json();
    this.props.progress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.progress(100);
  }

  async componentDidMount() {
    this.updatenews();
  }
  fetchMoreData = async () => {
    this.setState({ page:this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    });
   
  };

  render() {
    return (
      <>
        <h2 className="text-center">
          Top Hot HeadLines are:-
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1).toLowerCase()}
        </h2>
        {this.state.loading && <Spinner />}
    
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
          //  inverse={true} 
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={ <Spinner />}
           
          >
              <div className="container">
            <div className="row">
              
              {
                this.state.articles.map((element) => {
                
                  return  <div className="col-md-4 my-2" key={element.url}>
                      <Newscards
                        title={element.title ? element.title.slice(0, 78) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 125)
                            : ""
                        }
                        image={element.urlToImage}
                        url={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                        q={element.searchQuery}
                      />
                    </div>
                    
                })}
            </div>
            </div>
          </InfiniteScroll>
        </>
    
    );
  }

}