import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import PostsInicio from './posts/PostsInicio'
import Post from './post/Post'
import NuevoPost from './nuevoPost/NuevoPost'
import UpdatePost from './updatePost/UpdatePost'
import VerTodos from './verTodos/VerTodos'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Route exact path="/" component={PostsInicio} />
        <Route exact path="/post/:id" component={Post} />
        <Route exact path="/UpdatePost/:id" component={UpdatePost} />
        <Route exact path="/NewPost" component={NuevoPost} />
        <Route exact path="/ViewAll" component={VerTodos} />
      </div>
    </BrowserRouter>
  );
}

export default App;
