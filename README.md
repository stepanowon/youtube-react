
# youtube-player-react
Youtube Player Component for React v16.
This is based on https://developers.google.com/youtube/player_parameters?hl=en 

[![npm](https://img.shields.io/npm/v/youtube-player-react.svg )](https://www.npmjs.com/package/youtube-player-react)
[![npm](https://img.shields.io/npm/dm/youtube-player-react.svg)](https://www.npmjs.com/package/youtube-player-react)
[![GitHub stars](https://img.shields.io/github/stars/stepanowon/youtube-react.svg?style=social&label=Stars&style=for-the-badge)](https://github.com/stepanowon/youtube-react/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/stepanowon/youtube-react.svg?style=social&label=Fork&style=for-the-badge)](https://github.com/stepanowon/youtube-react/network)
[![Build Status](https://travis-ci.org/stepanowon/youtube-react.svg?branch=master)](https://travis-ci.org/stepanowon/youtube-react)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
---------------
> Contact : stepanowon@hotmail.com   
> Author : Stephen Won(원형섭), OpenSG Inc.  
> Online Demo : http://sample.bmaster.kro.kr/youtube-react.html   

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
import React, { Component } from 'react';
import YoutubeReact from './components/YoutubeReact'
//import YoutubeReact from 'youtube-player-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videoid:"PABUl_EX_hw", loop:0, autoplay:1
    }
    this.applyToPlayer = this.applyToPlayer.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.onPaused = this.onPaused.bind(this);
    this.onPlayed = this.onPlayed.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  applyToPlayer() {
    let videoid = this.videoid.value;
     let loop = this.loop.value;
    console.log(videoid)
    
    let currentState = this.state;
    this.setState({ 
      videoid:videoid, loop: parseInt(loop,10), autoplay: currentState.autoplay 
    })
  }

  onEnded() {
    console.log("### onEnd Callbacked")
  }

  onPaused() {
    console.log("### onPaused Callbacked")
  }

  onPlayed() {
    console.log("### onPlayed Callbacked")
  }

  onReady() {
    console.log("### onReady callbacked")
  }

  render() {
    return (
      <div className="App">
        <div>
          video_id : <input type="text" ref={(videoid)=> { this.videoid = videoid }} defaultValue={this.state.videoid} /><br />
          loop : <input type="number"  ref={(loop)=> { this.loop = loop }} defaultValue={this.state.loop} /><br />
          <button onClick={()=> { this.applyToPlayer() }}>Apply</button>
          <button onClick={()=> { this.player.playVideo() }}>Play</button>
          <button onClick={()=> { this.player.stopVideo() }}>Stop</button>
          <button onClick={()=> { this.player.pauseVideo() }}>Pause</button>
        </div>
        <YoutubeReact ref={(player)=>{ this.player = player }} videoid={this.state.videoid} 
          listType={this.state.listType} list={this.state.list} autoplay={this.state.autoplay}
          onEnded={this.onEnded} onPaused={this.onPaused} 
          onPlayed={this.onPlayed} onReady={this.onReady} />
      </div>
    );
  }
}

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



