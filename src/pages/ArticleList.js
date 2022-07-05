import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class ArticleList extends Component {
  state = {
    categories: [
      { catID: 1, catName: "Beverages" },
      { catID: 2, catName: "Frozen Food" },
    ],
    currentCat: "",
  };
  changeCat = (category) => {
    this.setState({ currentCat: category.catName });
  };
  render() {
    return (
      <div>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.changeCat(category)}
              key={category.catID}
              color="success"
            >
              {category.catName}
            </ListGroupItem>
            
          ))}
        </ListGroup>
        
      </div>
    );
  }
}

export default ArticleList;
