import React from 'react';

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
          {links.map(link => <LinkButton text={link.text} url={link.url}/>)}
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
          title: "Cheap copies",
          images: ["/img/dot.gif"],
          intro: "I was really intruiged by some NFT art works displayed at the photograhic museum in stockholm so I tried to recreate them in blender.",
          links: [{text: "Fotografiska", url: "https://www.fotografiska.com/sto/en/utstallningar/somewhere-ethereal/"}, {text: "Instagram", url: "https://www.instagram.com/p/ChMRiHsM_dS/"}]
        },
        {
          title: "Dice rolling game",
          images: ["/img/dice.jpg"],
          intro: "GMTK:s game jam with the theme \"roll the dice\" was just the excuse I needed to learn some game development in Godot",
          links: [{text: "Try", url: "https://demborg.se/rollTheDice"}, {text: "Source", url: "https://github.com/Demborg/rollTheDice"}, {text: "Jam", url: "https://itch.io/jam/gmtk-jam-2022"}]
        },
        {
          title: "En krokus, flera kroki",
          images: ["/img/kroki.jpg"],
          intro: "Using my growing proficiency in blender to illustrate a weird pun in swedish",
          links: [{text: "Instagram", url: "https://www.instagram.com/p/Cci7j9zstXf/"}]
        },
        {
          title: "Geometry nodes galore",
          images: ["/img/space.png", "/img/nodes1.jpg", "/img/dither.png", "/img/nodes1.jpg"],
          intro: "I have been making some animations in Blender using the new geometry nodes in 3.0. These have been inspired by the first few prompts from Genuary 2022.",
          links: [{text: "Instagram", "url": "https://www.instagram.com/p/CYP4x0PFFbg/"}, {text: "Instagram", url: "https://www.instagram.com/p/CY0m5SxsotI/"}]
        },
        {
          title: "Line plotter robot",
          images: ["/img/robot.jpg", "/img/robot1.jpg", "/img/robot2.jpg"],
          intro: "Building a little line driven plotter robot from some steppers and old lego as well writing a few different algorithms for converting images to plotter paths.",
          links: [{text: "Source", url: "https://github.com/Demborg/line_plotter"}, {text: "Instagram", url: "https://www.instagram.com/p/CS7l_AosEba/"}]
        },
        {
          title: "My first blender render!",
          images: ["/img/apples1.jpg", "/img/apples2.jpg", "/img/apples3.jpg"],
          intro: "I just completed my first blender tutorial and was really excited with the resulting bowl of apples. Despite or maybe, because of, its many flaws.",
          links: [{text: "Tutorial", url: "https://www.youtube.com/watch?v=j14b25SnYRY&list=PL3UWN2F2M2C8-zUjbFlbgtWPQa0NXBsp0"}]
        },
        {
          title: "Python poetry",
          images: ["/img/poetry.png"],
          intro: "I was embarrassingly proud of some of my solutions to this years advent of code puzzles. Pretentiously I call them \"python poetry\"",
          links: [{text: "Problem", url: "https://adventofcode.com/2020/day/4"}, {text: "Solution", url: "https://github.com/Demborg/aoc20/blob/main/4.py"}]
        },
        {
          title: "Scope face",
          images: ["/img/scope.gif"],
          intro: "Showing a webcam feed on a oscilloscope screen by converting it to terrible sound",
          links: [{text: "Source", url:"https://github.com/Demborg/scope-face"}]
        },
        {
          title: "Lamps",
          images: ["/img/lamp1.jpg", "/img/lamp2.jpg", "/img/lamp3.jpg", "/img/lamp4.jpg", "/img/lamp5.jpg", "/img/lamp6.jpg"],
          intro: "Making me some lamps to bring more light into my new apartment",
          links: [{text: "Instagram", url: "https://www.instagram.com/p/CDqzMN7FAqi/"}, {text: "Instagram", url: "https://www.instagram.com/p/CDmik66F2ng/"}]
        },
        {
          title: "Swapping images",
          images: ["/img/img1.jpg", "/img/img2.jpg"],
          intro: "Making it possible to swap between multiple images on this site",
          links: [{text: "Source", url: "https://github.com/Demborg/demborg.github.io/pull/7"}]
        },
        {
          title: "Project Narcissus",
          images: ["/img/narcissus.gif"],
          intro: "Feeding my inner narcissist by training a VAE to generate (chockingly bad) \"selfies\" of myself",
          links: [{text: "Try", url: "https://demborg.se/narcissus"},  {text: "Source", url: "https://github.com/Demborg/narcissus"}]
        },
        {
          title: "Dead bug color organ",
          images: ["/img/color_organ.jpg"],
          intro: "A dead bug style analog color organ built to combat the boredom of quarantine",
          links: [{text: "Inspiration", url: "https://www.instructables.com/id/LED-Color-Organ-Triple-Deluxe/"}, {text: "Instagram", url: "https://www.instagram.com/p/B-pTLsSF2cb/"}]
        },
        {
          title: "Folding desk",
          images: ["/img/folding_desk.gif"],
          intro: "A home built folding desk/tv shelf for these trying times and more",
          links: [{text: "Instagram", url: "https://www.instagram.com/p/B-c9dOrlxzt/"}]
        },
        {
          title: "Playlist from chat history",
          images: ["/img/playlist.png"],
          intro: "A very quick and dirty hack to make a Spotify playlist from all the songs mentioned in a facebook chat",
          links: [{text: "Playlist", url: "https://open.spotify.com/user/dr.lexa/playlist/7DdH0Ogd8plJ0UEUc3KsfL?si=ZAdXPMTERBaNSlGELHG4TA"}, {text: "Source", url: "https://github.com/Demborg/messenger-parsing"}]
        },
        {
          title: "This very website",
          images: ["/img/this_very_website.png"],
          intro: "Continuing to learn frontend by building myself a little portfolio page", 
          links: [{text: "Try", url: "https://demborg.se/"}, {text: "Source", url: "https://github.com/Demborg/demborg.github.io"}]
        },
        {
          title: "Sju års lycka",
          images: ["/img/sju_ars_lycka3.jpg", "/img/sju_ars_lycka1.jpg", "/img/sju_ars_lycka2.jpg", "/img/sju_ars_lycka4.jpg"],
          intro: "Performing (very mild) civil disobedience by decorating a subway station with mirrors", 
          links: [{text: "Instagram", url: "https://www.instagram.com/p/B3hWzMuFEOh/"}]
        },
        {
          title: "CPPN",
          images: ["/img/cppn.png"],
          intro: "Generative art implemented in tensorflowJS",
          links: [{text: "Try", url: "https://demborg.se/cppn/"}, {text: "Source", url: "https://github.com/Demborg/cppn"}]
        },
        {
          title: "Worst raytracer",
          images: ["/img/raytrace.png"],
          intro: "Building the worlds worst raytracer from scratch in Python",
          links: [{text: "Source", url: "https://github.com/Demborg/raytrace"}]
        },
        ]}/>
    </div>
  );
}

export default App;
