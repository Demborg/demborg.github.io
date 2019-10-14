import React from 'react';
import avatar from './avatar.jpg'

interface Post {
  title: string;
  image: string;
  intro: string;
  body: string;
  tags: [string];
}

interface Page {
  posts: [Post];
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

class Card extends React.Component {
  render () {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
      </div>
    )
  }
}

class Grid extends React.Component {
  render () {
    return (
      <div className="flex justify-center flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <Card/>
        </div>
      </div>
    )
  }
}

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Header/>
      <Grid/>
    </div>
  );
}

export default App;
