import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Button from "react-bootstrap/Button";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    // console.log("hello I am a constructor");

    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3a026cbfa4d42fe9b45ecb60e6ebbac&page=1&pagesize=12";
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({ articles: parsedDate.articles });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3a026cbfa4d42fe9b45ecb60e6ebbac&page=${
      this.state.page - 1
    }pagesize=12`;
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({
      page:this.state.page - 1,
      articles: parsedDate.articles,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e3a026cbfa4d42fe9b45ecb60e6ebbac&page=${
      this.state.page + 1
    }pagesize=12`;
    let data = await fetch(url);
    let parsedDate = await data.json();
    this.setState({
      page:this.state.page + 1,
      articles: parsedDate.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Headlines News Morning Express.</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          ;
        </div>
        <div className="d-flex justify-content-between">
          <Button
            variant="dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </Button>

          <Button variant="dark" onClick={this.handleNextClick}>
            Next &rarr;
          </Button>
        </div>
      </div>
    );
  }
}
