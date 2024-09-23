import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import SearchForm from './SearchForm';
class App  extends React.Component {
  joke=null;

  constructor(){
    super();
    this.state={
      searchTerm:'',
      jokes:[],
      isFetchingJoke:false,
    };
    this.onSearchChange=this.onSearchChange.bind(this);
    this.searchJokes=this.searchJokes.bind(this);
  }
  searchJokes(limit=20){
    this.setState({isFetchingJoke:true});
    fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        const jokes= json.results;
        this.setState({jokes, isFetchingJoke:false}) 
      });
  }
  
  
  onSearchChange(value){
    this.setState({searchTerm: value});
  }
  
  renderJokes(){
    return(
      <ul className='myList'>{this.state.jokes.map(item=> <li key={item.id}>{item.joke}</li>)}</ul>
    );

    
  }
  render () {
    return (
      
      <div className="App">
        <SearchForm 
        
        onFormSubmit={this.searchJokes}
        onSearchValueChange={this.onSearchChange}
        isSearching={this.state.isFetchingJoke}
        FeelingFunny={() =>this.searchJokes(1)}
        />
        {this.state.isFetchingJoke?'Searching for jokes...':this.renderJokes()}
      </div>
    );
  }
}

export default App;

// function App() {
//   const [joke, setJoke] = useState(null);
//   function onTellJoke() {
//     console.log("telling a joke");
//     fetch("https://icanhazdadjoke.com/", {
//       method: "GET",
//       headers: { Accept: "application/json" },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         setJoke(json.joke);
//       });
//   }
//   return (
//     <div className="App">
//       <button onClick={onTellJoke}>Tell me a joke</button>
//       <p>{joke}</p>
//     </div>
//   );
// }

// export default App;
