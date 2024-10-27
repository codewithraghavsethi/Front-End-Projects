import React from "react";
import img from "../assets/newsimg.jpg";

const NewsItems = ({ title, description, src, url }) => {
  return (
   
      <div className="card bg-dark text-light d-inline-block my-3 mx-3 px-2 py-2 " style={{ width: "400px", height: "500px"}}>
        <img src={src ? src : img} style={{height: "200px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description ? description: "Information technology companies have posted strong results for the second quarter of FY25, except Tata Consultancy Services (TCS)"}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>

  );
};

export default NewsItems;
