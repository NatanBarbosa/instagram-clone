import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Post from "./components/posts/Post";
import Stories from "./components/stories/Stories";
import Storie from "./components/stories/Storie";
import MyProfleSugestion from "./components/sidebar/myProfileSugestion/MyProfileSugestion";
import ForMeSugestions from "./components/sidebar/forMeSugestions/ForMeSugestions";

//profileImagens
import userImage1 from "./images/shinji.jpg";
import userImage2 from "./images/rapaz-1.jpg";
import userImage3 from "./images/rapaz-2.jpg";
import userImage4 from "./images/rapaz-3.jpg";
import userImage5 from "./images/moca-4.jpg";
import userImage6 from "./images/amogus-5.png";
import userImage7 from "./images/moca-6.jpg";
import userImage8 from "./images/rapaz-7.png";
import userImage9 from "./images/moca-8.jpg";
import userImage10 from "./images/semfoto-9.png";

//for posts
import postVideo from "./images/posts/snowing.mp4";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	//Posts
	const [posts, setPosts] = useState([
		{
			prof_picture: userImage3,
			username: "Flavio_Gomes",
			caption: "Felicidade!",
			type: "image",
			mediaUrl: "https://images.unsplash.com/photo-1637014387463-a446e89abb68?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			dias: 2
		},
		{
			prof_picture: userImage1,
			username: "Leide_Claudia",
			caption: "hidrate-se",
			type: "image",
			mediaUrl: "https://images.unsplash.com/photo-1600679472233-eabc13b79f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
			dias: 3
		},
		{
			prof_picture: userImage2,
			username: "king_ramos",
			caption: "Bury the light!",
			type: "image",
			mediaUrl: "http://cdn.capcom-unity.com/2020/09/DMC5SE_Vergil02-1024x576.jpg",
			dias: 4
		},
		{
			prof_picture: userImage4,
			username: "carrot_cake",
			caption: "De boas em casa",
			type: "video",
			mediaUrl: postVideo,
			dias: 5
		},
		{
			prof_picture: userImage6,
			username: "memes br",
			caption: "Siga para mais memes",
			type: "image",
			mediaUrl: "http://manualdosgames.com/wp-content/uploads/2020/09/among-us-android-ios.jpg",
			dias: 6
		},
		{
			prof_picture: userImage8,
			username: "Daniel_Orivaldo",
			caption: "Mais um dia de trbalho",
			type: "image",
			mediaUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
			dias: 7
		},
	]);

	//stories
	const [stories, setStories] = useState([
		{
			picture_src: userImage1,
			username: "natan_rocha_"
		},
		{
			picture_src: userImage2,
			username: "Marcos_silva"
		},
		{
			picture_src: userImage3,
			username: "Jennifer_Santos"
		},
		{
			picture_src: userImage4,
			username: "Cleber_Filho"
		},
		{
			picture_src: userImage5,
			username: "Claudia_Troper"
		},
		{
			picture_src: userImage6,
			username: "memes_br"
		},
		{
			picture_src: userImage7,
			username: "Shirley_Carvalho"
		},
		{
			picture_src: userImage8,
			username: "Chaderson_Soarez"
		},
		{
			picture_src: userImage9,
			username: "Natalia_das_flores"
		},
		{
			picture_src: userImage10,
			username: "Fabio_Souza"
		},

	]);

	return (
		<div className="app">

			<Navbar />

			<div className="container">
				<div className="row feed">
					<div className="col-lg-8 me-0 timeline-box">
						<div className="timeline">
							<Stories>
								{stories.map((storie, key) => {
									return (
										<Storie
										key={key}
										picture_src={storie.picture_src}
										username={storie.username}
										/>
									);
								})}
							</Stories>

							{posts.map((post, key) => (
								<Post
									key={key}
									prof_picture={post.prof_picture}
									username={post.username}
									type={post.type}
									caption={post.caption}
									mediaUrl={post.mediaUrl}
									dias={post.dias}
								/>
							))}
						</div>
					</div>
					<div className="col-lg-4 d-none d-lg-block sugestions-box ">
						<div className="sticky-box">
							<MyProfleSugestion/>

							<ForMeSugestions />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
