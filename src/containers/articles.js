import React, {Component} from 'react';
import Article from '../components/article';

class Articles extends Component {

  renderArticles = () => {
    return this.props.data.map((article) => {
      if(this.props.locationFilter === "All" || this.props.locationFilter === article.location.town){
        return(<Article article={article} newLike={this.props.newLike} />) 
      }
    })
  }

  render(){
    return (
        <div className="articles-container">
          {this.renderArticles()}
        </div>
    );
  }
  
}

export default Articles;
