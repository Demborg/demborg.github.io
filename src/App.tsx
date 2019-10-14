import React from 'react';
import avatar from './img/avatar.jpg'
import cppn from './img/cppn.png'
import sju_ars_lycka from './img/sju_ars_lycka.jpg'
import raytrace from './img/raytrace.png'

interface Post {
  title: string;
  image: string;
  intro: string;
  body?: string;
  tags: string[];
}

interface Page {
  posts: Post[];
}

class Header extends React.Component {
  render () {
    return (
      <div className="flex justify-between items-center py-4 bg-gray-800">
        <div className="flex-shrink-0 ml-10">
          <img className="h-16 w-16 rounded-full mx-auto" src={avatar} alt="my face"></img>
          <span className="ml-1 text-3xl text-gray-300 font-semibold">Axel Demborg</span>
      </div>
    </div>
    )
  }
}

class Card extends React.Component<Post, {}> {
  render () {
    const {title, image, intro, tags} = this.props;
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={image}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {intro}
          </p>
        </div>
        <div className="px-6 py-4">
          {tags.map(tag => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>)}
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
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card title={post.title} image={post.image} intro={post.intro} tags={post.tags}/>
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
        {title: "Sju års lycka", image: sju_ars_lycka, intro: "Performing (very mild) civil disobedience by decorating a subway station with mirrors", tags: ["Art", "Mirror"]},
        {title: "CPPN", image: cppn, intro: "Generative art implemented in tensorflowJS", tags: ["Art", "Rendering", "Coding"]},
        {title: "Worst raytracer", image: raytrace, intro: "Builidng the worlds worst raytracer from scratch in Python", tags: ["Rendering", "Coding"]}
        ]}/>
    </div>
  );
}

export default App;
