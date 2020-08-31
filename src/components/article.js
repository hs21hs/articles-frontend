import React, {Component} from 'react';

class Article extends Component {

  displayArticle = () => {
    
    const {article} = this.props
    return(
      <div className="article-container">
        <p className="article-title">Title: {article.title}</p>
        <img className="article-image" src={article.photos[0].files.medium}></img>
        <p>Likes: {article.reactions.likes}</p>
        <button onClick={() => this.props.newLike(article.id, article.reactions.likes)} className="like-btn">like me</button>
        <p>Location: {article.location.town},{article.location.country}</p>
        <p>Collection Notes: {article.collection_notes}</p>
        <p>Description: {article.description}</p>
      </div>
    )
  }
  
  render(){
    return (
      this.displayArticle()
    );
  }
  
}

export default Article;
