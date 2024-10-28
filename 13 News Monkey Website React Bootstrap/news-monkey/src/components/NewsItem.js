import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class NewsItem extends Component {
  
  render( ){
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3">
        <Card style={{ width: "18rem", height: "420px"}}  >
          <Card.Img variant="top" src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYN09MsHDipPCV4-D-ECTD1y-HLUOA9eSy_g&s"} style={{ height: "200px" }} />
          <Card.Body>
         
            <Card.Title style={{ height: "40px" }}>{title}.....</Card.Title>
            <Card.Text style={{ height: "80px" }}>{description}.....</Card.Text>
            <Button variant="primary" href={newsUrl} target="_blank">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
