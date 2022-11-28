import React, { useEffect, useRef, useState } from "react";
import posts from "./posts.json";
import avatarClose from "./img/avatarClose.jpg";
import avatarBlep from "./img/avatarBlep.jpg";
import avatar0 from "./img/avatar0.jpg";
import avatar1 from "./img/avatar1.jpg";
import avatar2 from "./img/avatar2.jpg";
import avatar3 from "./img/avatar3.jpg";
import avatar4 from "./img/avatar4.jpg";
import avatar5 from "./img/avatar5.jpg";
import avatar6 from "./img/avatar6.jpg";
import avatar7 from "./img/avatar7.jpg";
import linkedin from "./img/in.png";
import github from "./img/github.png";
import instagram from "./img/insta.png";
import "./App.css";

interface Link {
  text: string;
  url: string;
}

interface Post {
  title: string;
  images: string[];
  video?: string;
  iframe?: string;
  intro: string;
  body?: string;
  links: Link[];
}

enum Distance {
  touching,
  close,
  distant
}

const getImage = (direction: number, distance: Distance) => {
  switch (distance) {
    case Distance.touching:
      return avatarBlep
    case Distance.close:
      return avatarClose
    default:
  }
  switch (direction) {
    case 0:
      return avatar0;
    case 1:
      return avatar1;
    case 2:
      return avatar2;
    case 3:
      return avatar3;
    case 4:
      return avatar4;
    case -4:
      return avatar4;
    case -3:
      return avatar5;
    case -2:
      return avatar6;
    case -1:
      return avatar7;
    case -0:
      return avatar0;
    default:
      return avatarClose;
  }
};

function Header() {
  const [direction, setDirection] = useState(0);
  const [distance, setDistance] = useState(Distance.close);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!imgRef.current) {
        return;
      }
      const bbox = imgRef.current.getBoundingClientRect();
      const x = e.clientX - bbox.left - bbox.width / 2;
      const y = e.clientY - bbox.top - bbox.height / 2;
      setDirection(Math.round(((180 / Math.PI) * Math.atan2(y, x)) / 45));
      const distance = Math.hypot(x, y);
      if (distance < 0.1 * bbox.width) {
        setDistance(Distance.touching)
      } else if (distance < 0.5 * bbox.width) {
        setDistance(Distance.close)
      } else {
        setDistance(Distance.distant)
      }
    };
    window.addEventListener("mousemove", handler);
  }, []);
  return (
    <div className="bg-gray-800 overflow-hidden shadow-lg">
      <img
        ref={imgRef}
        className="inline-block rounded-full w-20 m-4 Avatar"
        src={getImage(direction, distance)}
        alt=""
      />
      <div className="inline-block text-3xl text-gray-300 font-semibold px-4 py-2 m-2">
        Axel Demborg
        <div className="m-0 p-0">
          <a href="https://www.linkedin.com/in/axel-demborg-9810a0b5/">
            <img
              className="Social inline-block py-0 px-2 w-10"
              src={linkedin}
              width={20}
              alt="linkedin"
            />
          </a>
          <a href="https://www.github.com/demborg">
            <img
              className="Social inline-block py-0 px-2 w-10"
              src={github}
              width={20}
              alt="github"
            />
          </a>
          <a href="https://www.instagram.com/axeldemborg/">
            <img
              className="Social inline-block py-0 px-2 w-10"
              src={instagram}
              width={20}
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function LinkButton(props: { link: Link }) {
  return (
    <a href={props.link.url}>
      <span className="inline-block hover:bg-gray-700 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:text-gray-200 text-gray-700 mr-2">
        {props.link.text}
      </span>
    </a>
  );
}

function ImageDisplay(props: { images: string[] }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setInterval(() => setCounter((counter) => counter + 1), 6000);
  }, []);
  const imgIdx = counter % props.images.length;
  return (
    <div
      className="relative w-full pt-1/1"
      onClick={() => setCounter(counter + 1)}
    >
      {props.images.map((image, idx) => (
        <img
          src={process.env.PUBLIC_URL + image}
          alt={image}
          className={
            "absolute top-0 right-0 w-full transition duration-500 ease-in-out " +
            (imgIdx === idx ? "opacity-100" : "opacity-0")
          }
          key={idx}
        />
      ))}
    </div>
  );
}

function VideoDisplay(props: { video: string }) {
  return (
    <div className="relative w-full pt-1/1 overflow-hidden ">
      <video
        autoPlay={true}
        muted={true}
        playsInline={true}
        loop={true}
        controls={false}
        className={"absolute top-0 right-0 w-full"}
      >
        <source src={props.video} />
      </video>
    </div>
  );
}

function IframeDisplay(props: { iframe: string }) {
  return (
    <div className="relative w-full pt-1/1 overflow-hidden ">
      <iframe
        className={"absolute top-0 right-0 w-full h-full"}
        src={props.iframe}
        title={props.iframe}
        scrolling='no'
      />
    </div>
  );
}

function Card(props: { post: Post }) {
  const post = props.post;
  let filling = <ImageDisplay images={post.images} />
  if (post.iframe) {
    filling = <IframeDisplay iframe={post.iframe}/>
  } else if (post.video) {
    filling = <VideoDisplay video={post.video}/>
  }
  return (
    <div className="rounded overflow-hidden shadow-lg Card">
      {filling}
      <div className="px-6 py-4 Stuff">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        {post.links.map((link, index) => (
          <LinkButton link={link} key={index} />
        ))}
        <p className={"text-gray-700 text-base Text"}>{post.intro}</p>
      </div>
    </div>
  );
}

function Grid(props: { posts: Post[] }) {
  return (
    <div className="flex flex-wrap">
      {props.posts.map((post, index) => (
        <div
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4 mx-auto"
          key={index}
        >
          <Card post={post} />
        </div>
      ))}
    </div>
  );
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
