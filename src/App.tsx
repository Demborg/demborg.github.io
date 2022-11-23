import React, { useEffect, useState } from 'react';
import posts from "./posts.json"
import avatar from "./img/avatar.jpg"
import linkedin from "./img/in.png"
import github from "./img/github.png"
import instagram from "./img/insta.png"
import './App.css'

interface Link {
  text: string;
  url: string;
}

interface Post {
  title: string;
  images: string[];
  intro: string;
  body?: string;
  links: Link[];
}

function Header() {
  return (
    <div className="bg-gray-800 overflow-hidden shadow-lg">
      <img className="inline-block rounded-full w-20 m-4 Avatar" src={avatar} alt="" />
      <div className="inline-block text-3xl text-gray-300 font-semibold px-4 py-2 m-2">
        Axel Demborg
        <div className='m-0 p-0'>
          <a href='https://www.linkedin.com/in/axel-demborg-9810a0b5/'><img className="Social inline-block py-0 px-2 w-10" src={linkedin} width={20} alt="linkedin"/></a>
          <a href='https://www.github.com/demborg'><img className="Social inline-block py-0 px-2 w-10" src={github} width={20} alt="github"/></a>
          <a href='https://www.instagram.com/axeldemborg/'><img className="Social inline-block py-0 px-2 w-10" src={instagram} width={20} alt="instagram"/></a>
        </div>
      </div>
    </div>
  )
}

function LinkButton(props: { link: Link }) {
  return (
    <a href={props.link.url}>
      <span className="inline-block hover:bg-gray-700 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:text-gray-200 text-gray-700 mr-2">
        {props.link.text}
      </span>
    </a>
  )
}

function ImageDisplay(props: { images: string[] }) {
  const [counter, setCounter] = useState(0)
  useEffect(() => { setInterval(() => setCounter(counter => counter + 1), 6000) }, [])
  const imgIdx = counter % props.images.length
  return (
    <div className="relative w-full pt-1/1" onClick={() => setCounter(counter + 1)}>
      {props.images.map((image, idx) =>
        <img src={process.env.PUBLIC_URL + image} alt={image} className={
          "absolute top-0 right-0 w-full transition duration-500 ease-in-out " +
          (imgIdx === idx ? "opacity-100" : "opacity-0")} key={idx} />)}
    </div>
  )
}

function Card(props: { post: Post }) {
  const post = props.post
  return (
    <div className="rounded overflow-hidden shadow-lg Card">
      <ImageDisplay images={post.images} />
      <div className="px-6 py-4 Stuff">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        {post.links.map((link, index) => <LinkButton link={link} key={index} />)}
        <p className={"text-gray-700 text-base Text"}>
          {post.intro}
        </p>
      </div>
    </div>
  )
}

function Grid(props: { posts: Post[] }) {
  return (
    <div className="flex flex-wrap">
      {props.posts.map(
        (post, index) =>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4 mx-auto" key={index}>
            <Card post={post} />
          </div>
      )}
    </div>
  )
}

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Grid posts={posts} />
    </div>
  );
}

export default App;
