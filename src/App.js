import React, {Component} from 'react';
import './App.css';
import Articles from './containers/articles';
import LocationFilter from './containers/locationFilter'

class App extends Component {
  state = {
    data: [],
    dataToPresent: [],
    uniqueLocations: [],
    locationFilter: 'All'
  }

  componentDidMount(){
    this.retrieveDataFromOlio()
  }
  
  retrieveDataFromOlio = () => {
    console.log('retrieving data')
    fetch("http://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v3.json")
    .then((resp) => resp.json())
    .then((body) => {
      this.setState({data: body})
      this.getUniqueLocations()
      this.retrieveDataFromRails()
    })
    .catch((error)=> console.log(error))
  }

  retrieveDataFromRails = () => {
    fetch("http://localhost:3000/articles")
    .then((resp) => resp.json())
    .then((body) => {
      console.log('articles',body)
      this.addRailsLikesToData(body.articles)
    })
    .catch((error)=> console.log('e',error))
  }

  addRailsLikesToData = (railsData, newLike) => {
    railsData.map((article) => {
      let checker = true
      let counter = 0
      while (checker && counter < this.state.data.length) {
        if(this.state.data[counter].id === article.a_id){
          if(!newLike){this.state.data[counter].reactions.likes += article.likes}
          else{this.state.data[counter].reactions.likes += 1}
        }
        counter++
      } 
    })
    this.setState({dataToPresent:this.state.data})
  }

  addSingleRailsLikeToData = (article) => {
    this.addRailsLikesToData([article], true)
  }

  newLike = (id, likes) => {
    console.log('sending like for', id)
    fetch("http://localhost:3000/articles/newLike",
     {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"    
      },
      body: JSON.stringify({"a_id":id})
    })
    .then((resp) => resp.json())
    .then((body) => {
      this.addSingleRailsLikeToData(body.article)
    })
  }

  getUniqueLocations = () => {
    let locationsArray = this.state.data.map((article) => {return article.location.town})
    let uniqueLocations = locationsArray.filter((v, i, a) => a.indexOf(v) === i)
    console.log('fd', uniqueLocations)
    this.setState({uniqueLocations: uniqueLocations})
  }

  applyFilter = (town) => {
    this.setState({locationFilter: town})
    console.log(town)
  }

  render(){ 
    return (
      <div className="App">
        <div className="header">Articles</div>
        <LocationFilter towns={this.state.uniqueLocations} applyFilter={this.applyFilter}/>
        <Articles data={this.state.dataToPresent} newLike={this.newLike} locationFilter={this.state.locationFilter}/>
      </div>
    );
  }
  
}

export default App;
