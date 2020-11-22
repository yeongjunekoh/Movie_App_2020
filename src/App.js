import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovie = async() =>{
    try{
      const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    }catch(err){
      throw err;
    }
  }
  componentDidMount(){
    this.getMovie();
  }
  render(){
    const { isLoading } = this.state; 
    return(
      <div>
        {isLoading ? "Loading...." : "We are Ready"}
      </div>
    );
  }
}

export default App; 
