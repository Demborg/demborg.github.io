import React from 'react';
import avatar from './img/avatar.jpg'
import cppn from './img/cppn.png'
import sju_ars_lycka from './img/sju_ars_lycka.jpg'
import raytrace from './img/raytrace.png'
import this_very_website from './img/this_very_website.png'
import playlist from './img/playlist.png'
import folding_desk from './img/folding_desk.gif'
import color_organ from './img/color_organ.jpg'
import narcissus from './img/narcissus.gif'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import lamp1 from './img/lamp1.jpg'
import lamp2 from './img/lamp2.jpg'
import lamp3 from './img/lamp3.jpg'
import lamp4 from './img/lamp4.jpg'
import lamp5 from './img/lamp5.jpg'
import lamp6 from './img/lamp6.jpg'

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
      <img className="inline-block text-gray-700 rounded-full w-20 m-4" src={avatar} alt=""/>
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
              (imgIdx === idx ? "opacity-100" : "opacity-0")}/>)}
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
          <p className={`text-gray-700 text-base ${this.state.hidden ? 'lg:hidden xl:hidden' : ''}`}>
            {intro}
          </p>
        </div>
        <div className="px-6 py-4">
          {links.map(link => <LinkButton text={link.text} url={link.url}/>)}
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
          post => 
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 hover:zoom-10 p-4">
          <Card title={post.title} images={post.images} intro={post.intro} links={post.links}/>
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
      <Grid posts={[
        {
          title: "Lamps",
          images: [lamp1, lamp2, lamp3, lamp4, lamp5, lamp6],
          intro: "Making me some lamps to bring more light into my new apartment",
          links: [{text: "Instagram", url: "https://www.instagram.com/p/CDqzMN7FAqi/"}, {text: "Instagram", url: "https://www.instagram.com/p/CDmik66F2ng/"}]
        },
        {
          title: "Swapping images",
          images: [img1, img2],
          intro: "Making it possible to swap between multiple images on this site",
          links: [{text: "Source", url: "https://github.com/Demborg/demborg.github.io/pull/7"}]
        },
        {
          title: "Project Narcissus",
          images: [narcissus],
          intro: "Feeding my inner narcissist by training a VAE to generate (chockingly bad) \"selfies\" of myself",
          links: [{text: "Try", url: "https://demborg.se/narcissus"},  {text: "Source", url: "https://github.com/Demborg/narcissus"}]
        },
        {
          title: "Dead bug color organ",
          images: [color_organ],
          intro: "A dead bug style analog color organ built to combat the boredom of quarantine",
          links: [{text: "Inspiration", url: "https://www.instructables.com/id/LED-Color-Organ-Triple-Deluxe/"}, {text: "Instagram", url: "https://www.instagram.com/p/B-pTLsSF2cb/"}]
        },
        {
          title: "Folding desk",
          images: [folding_desk],
          intro: "A home built folding desk/tv shelf for these trying times and more",
          links: [{text: "Instagram", url: "https://www.instagram.com/p/B-c9dOrlxzt/"}]
        },
        {
          title: "Playlist from chat history",
          images: [playlist],
          intro: "A very quick and dirty hack to make a Spotify playlist from all the songs mentioned in a facebook chat",
          links: [{text: "Playlist", url: "https://open.spotify.com/user/dr.lexa/playlist/7DdH0Ogd8plJ0UEUc3KsfL?si=ZAdXPMTERBaNSlGELHG4TA"}, {text: "Source", url: "https://github.com/Demborg/messenger-parsing"}]
        },
        {
          title: "This very website",
          images: [this_very_website],
          intro: "Continuing to learn frontend by building myself a little portfolio page", 
          links: [{text: "Try", url: "https://demborg.se/"}, {text: "Source", url: "https://github.com/Demborg/demborg.github.io"}]
        },
        {
          title: "Sju års lycka",
          images: [sju_ars_lycka],
          intro: "Performing (very mild) civil disobedience by decorating a subway station with mirrors", 
          links: [{text: "Instagram", url: "https://www.instagram.com/p/B3hWzMuFEOh/"}]
        },
        {
          title: "CPPN",
          images: [cppn],
          intro: "Generative art implemented in tensorflowJS",
          links: [{text: "Try", url: "https://demborg.se/cppn/"}, {text: "Source", url: "https://github.com/Demborg/cppn"}]
        },
        {
          title: "Worst raytracer",
          images: [raytrace],
          intro: "Building the worlds worst raytracer from scratch in Python",
          links: [{text: "Source", url: "https://github.com/Demborg/raytrace"}]
        },
        ]}/>
    </div>
  );
}

export default App;
