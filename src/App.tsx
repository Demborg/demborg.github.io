import React, { useEffect, useState } from 'react';
import posts from "./posts.json"

interface Link {
  text: string;
  url: string;
}

interface Images {
  images: string[];
}

interface Post {
  title: string;
  images: string[];
  intro: string;
  body?: string;
  links: Link[];
}

interface Page {
  posts: Post[];
}

function Header() {
  return (
    <div className="bg-gray-800 overflow-hidden shadow-lg">
      <img className="inline-block text-gray-700 rounded-full w-20 m-4" src={"/img/avatar.jpg"} alt="" />
      <div className="inline-block text-3xl text-gray-300 font-semibold px-4 py-2 m-2">Axel Demborg</div>
    </div>
  )
}

function LinkButton(props: Link) {
  return (
    <a href={props.url}>
      <span className="inline-block hover:bg-gray-700 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:text-gray-200 text-gray-700 mr-2">{props.text}</span>
    </a>
  )
}

function ImageDisplay(props: Images) {
  const [counter, setCounter] = useState(0)
  useEffect(() => { setInterval(() => setCounter(counter + 1), 6000) })
  const imgIdx = counter % props.images.length
  return (
    <div className="relative w-full pt-1/1" onClick={() => setCounter(counter + 1)}>
      {props.images.map((image, idx) =>
        <img src={image} alt={image} className={
          "absolute top-0 right-0 w-full transition duration-500 ease-in-out " +
          (imgIdx === idx ? "opacity-100" : "opacity-0")} key={idx} />)}
    </div>
  )
}

function Card(props: Post) {
  const [hidden, setHidden] = useState(true)
  return (
    <div className="rounded overflow-hidden shadow-lg" onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
      <ImageDisplay images={props.images} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        {props.links.map((link, index) => <LinkButton text={link.text} url={link.url} key={index} />)}
        <p className={`text-gray-700 text-base ${hidden ? 'lg:hidden xl:hidden' : ''}`}>
          {props.intro}
        </p>
      </div>
    </div>
  )
}

function Grid(props: Page) {
  return (
    <div className="flex flex-wrap">
      {props.posts.map(
        (post, index) =>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 hover:zoom-10 p-4" key={index}>
            <Card title={post.title} images={post.images} intro={post.intro} links={post.links} key={index} />
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
