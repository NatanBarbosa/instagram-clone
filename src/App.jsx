import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Post from "./components/posts/Post";
import Stories from "./components/stories/Stories";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [posts, setPosts] = useState([
    {
      username: "carrot_cake_hakuna_matata",
      caption: "Felicidade!",
      imageUrl:
        "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      username: "mk_b_jordan",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://images.unsplash.com/photo-1637019838019-5f14d84ee308?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  return (
    <div className="app">

      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 me-0 timeline-box">
            <div className="timeline">
              <Stories/>

              {posts.map((post) => (
                <Post
                  username={post.username}
                  caption={post.caption}
                  imageUrl={post.imageUrl}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block border sugestions-box">
            a
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
