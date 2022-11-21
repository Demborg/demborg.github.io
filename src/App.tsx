import React from 'react';
import posts from "./posts.json"

interface Link {
  text: string;
  url: string;
}

interface Images {
  images: string[];
}

interface ImageState {
  counter: number;
}

interface CardState {
  hidden: boolean;
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

class Header extends React.Component {
  render () {
    return (
    <div className="bg-gray-800 overflow-hidden shadow-lg">
      <img className="inline-block text-gray-700 rounded-full w-20 m-4" src={"/img/avatar.jpg"} alt=""/>
      <div className="inline-block text-3xl text-gray-300 font-semibold px-4 py-2 m-2">Axel Demborg</div>
    </div>
    )
  }
}

class LinkButton extends React.Component<Link, {}> {
  render () {
    const {text, url} = this.props;
    return (
      <a href={url}>
        <span className="inline-block hover:bg-gray-700 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold hover:text-gray-200 text-gray-700 mr-2">{text}</span>
      </a>
    )
  }
}

class ImageDisplay extends React.Component<Images, ImageState> {
  constructor(props: Images) {
    super(props)
    this.state = {'counter': 0}
  }

  handleClick = () => {
    console.log("hello?!")
    this.setState({counter: this.state.counter + 1})
  }

  componentDidMount () {
    const interval = setInterval(
      () => this.setState({ counter: this.state.counter + 1 }),
      6000
    )
    return () => clearInterval(interval)
  }

  render () {
    const {images} = this.props;
    const imgIdx = this.state.counter % images.length
    return (
        <div className="relative w-full pt-1/1" onClick={this.handleClick}>
          {images.map((image, idx) => 
            <img src={image} alt={image} className={
              "absolute top-0 right-0 w-full transition duration-500 ease-in-out " +
              (imgIdx === idx ? "opacity-100" : "opacity-0")} key={idx}/>)}
        </div>
    )
  }
}

class Card extends React.Component<Post, CardState> {
  constructor(props: Post) {
    super(props)
    this.state = {'hidden': true}
  }

  handleMouseIn = () => {
    this.setState({hidden: false})
  }

  handleMouseOut = () => {
    this.setState({hidden: true})
  }

  render () {
    const {title, images, intro, links} = this.props;
    return (
      <div className="rounded overflow-hidden shadow-lg" onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}>
        <ImageDisplay images={images}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          {links.map((link, index) => <LinkButton text={link.text} url={link.url} key={index}/>)}
          <p className={`text-gray-700 text-base ${this.state.hidden ? 'lg:hidden xl:hidden' : ''}`}>
            {intro}
          </p>
        </div>
      </div>
    )
  }
}

class Grid extends React.Component<Page, {}> {
  render () {
    const {posts} = this.props
    return (
      <div className="flex flex-wrap">
        {posts.map(
          (post, index) => 
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 hover:zoom-10 p-4" key={index}>
          <Card title={post.title} images={post.images} intro={post.intro} links={post.links} key={index}/>
        </div>
          )}
      </div>
    )
  }
}

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Header/>
      <Grid posts={posts}/>
    </div>
  );
}

export default App;
