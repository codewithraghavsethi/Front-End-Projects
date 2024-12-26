import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
   
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h1 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h1>
  <div style={{display: "flex", justifyContent:"center", alignItems:"center" , flexWrap:"wrap", width:"100%", margin:"0", padding:"0"}}>
      {articles.map((news, index) => {
        return (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
      </div>
      </div>
 
  );
};

export default NewsBoard;
