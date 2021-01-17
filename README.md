
# youtube-player-react
Youtube-Player wrapper Component for React v17
This is based on [youtube-player](https://github.com/gajus/youtube-player)

[![npm](https://img.shields.io/npm/v/youtube-player-react.svg )](https://www.npmjs.com/package/youtube-player-react)
[![npm](https://img.shields.io/npm/dm/youtube-player-react.svg)](https://www.npmjs.com/package/youtube-player-react)
[![GitHub stars](https://img.shields.io/github/stars/stepanowon/youtube-react.svg?style=social&label=Stars&style=for-the-badge)](https://github.com/stepanowon/youtube-react/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/stepanowon/youtube-react.svg?style=social&label=Fork&style=for-the-badge)](https://github.com/stepanowon/youtube-react/network)
[![Build Status](https://travis-ci.org/stepanowon/youtube-react.svg?branch=master)](https://travis-ci.org/stepanowon/youtube-react)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
---------------
> Contact : stepanowon@hotmail.com   
> Author : Stephen Won(원형섭), OpenSG Inc.  

## Screen Shot
<img src="https://raw.githubusercontent.com/stepanowon/youtube-react/master/images/videoid.png" />

## License
MIT 
## Usage  
#### install
~~~
npm install --save youtube-player-react
- or -
yarn add youtube-player-react
~~~

#### NPM Registry - usage
~~~
import React, {useState, useRef} from 'react';
import YoutubeReact from 'youtube-player-react'

const App = () => {
  const [videoid,setVideoid] = useState("PABUl_EX_hw");
  const [autoplay, setAutoplay] = useState(false);
  const [params,setParams] = useState({ videoid:"PABUl_EX_hw", autoplay:0 });
  const mytube = useRef(null);

  const onEnded = () => {
    console.log("### onEnd Callbacked")
  }

  const onPaused = () => {
    console.log("### onPaused Callbacked")
  }

  const onPlayed = () => {
    console.log("### onPlayed Callbacked")
  }

  const onReady = () => {
    console.log("### onReady callbacked")
  }

  const playCurrentVideo = () => {
    mytube.current.player.playVideo();
  }

  const stopCurrentVideo = () => {
    mytube.current.player.stopVideo();
  }

  const pauseCurrentVideo = () => {
    mytube.current.player.pauseVideo();
  }

  const callbacks = { onEnded, onPaused, onPlayed, onReady }

  return (
    <div>
      videoid: <input type="text" value={videoid} onChange={(e)=>setVideoid(e.target.value)} /><br />
      autoplay: <input type="checkbox" checked={autoplay} onChange={(e)=>setAutoplay(e.target.checked)} /><br/>
      <button onClick={()=>setParams({ videoid, autoplay:Number(autoplay) })}>Apply</button>
      <button onClick={playCurrentVideo}>Play</button>
      <button onClick={stopCurrentVideo}>Stop</button>
      <button onClick={pauseCurrentVideo}>Pause</button>
      <br />
      <YoutubeReact ref={mytube} autoplay={params.autoplay} videoid={params.videoid} {...callbacks} />
    </div>
  );
};

export default App;
~~~
##
#### Props
   * width
      - type : Number
      - width of player 
   * height 
     - type : Number
     - height of player
   * autoplay 
      - type : Number
      - default value : 0
      - autoplay of player ( 0 , 1:autoplay) 
   * videoid 
      - type : String 
      - Youtube video id
   * loop
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to play the initial video again and again
##
#### methods
  * playVideo()
  * stopVideo() 
  * mute()
  * unMute()
  * setVolume(number) : number => 0~100
  * getVolume() 
  * setSize(width, height) : you can set player size on run-time
##
#### callbacks
  * onEnded : when current video is ended
  * onPaused : when current video is pauded 
  * onPlayed : when video is played
  * onReady : when player is ready state



