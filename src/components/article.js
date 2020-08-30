import React, {Component} from 'react';

class Article extends Component {

  displayArticle = () => {
    
    const {article} = this.props
    return(
      <div class="article-container">
      <p class="article-title">{article.title}</p>
      <img class="article-image" src={article.photos[0].files.medium}></img>
      <p>likes: {article.reactions.likes}</p>
      <button onClick={() => this.props.newLike(article.id, article.reactions.likes)} class="like-btn">like me</button>
      <p>location: {article.location.town},{article.location.country}</p>
      <p>collection notes:{article.collection_notes}</p>
      <p>description: {article.description}</p>
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
