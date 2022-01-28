
import './App.css';
import React from 'react';
import axios from "axios"
import { Component } from 'react';



class App extends Component {

state = {
posts: []

}

componentDidMount() {

  axios.get("https://jsonplaceholder.typicode.com/posts")

  .then(res => {
console.log(res)
    const posts = res.data;

    this.setState({posts})

  })

}


  render() {

    return(

      <div className='container'>  

        {this.state.posts.map(post => <p key={post.id}> 
        <div className='title'> 
      <span className='red'> {post.title} </span>  
      </div>
      <div  className='title'> 
      <span className='blue'> {post.body} </span>  
        </div>
        </p>)}

      </div>)

  }

}

export default App;
