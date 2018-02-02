
# youtube-player-react
Youtube Player Component for React v16.
This is based on https://developers.google.com/youtube/player_parameters?hl=en 

> Contact : stepanowon@hotmail.com   
> Author : Stephen Won(원형섭), OpenSG Inc.  
> Online Demo : http://sample.bmaster.kro.kr/youtube-react.html   
> Online Demo Source Code : https://github.com/stepanowon/youtube-react/tree/master/examples/youtube-react-demo

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
import YoutubeReact from 'youtube-player-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videoid:"PABUl_EX_hw", listType:"search", list:"", loop:0, autoplay:1
    }
    this.applyToPlayer = this.applyToPlayer.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.onPaused = this.onPaused.bind(this);
    this.onPlayed = this.onPlayed.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  applyToPlayer() {
    let videoid = this.videoid.value;
    let listType = this.listType.value;
    let list = this.list.value;
    let loop = this.loop.value;
    console.log(videoid)
    
    let currentState = this.state;
    this.setState({ 
      videoid:videoid, listType:listType, list:list, loop: parseInt(loop,10), autoplay: currentState.autoplay 
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
          listType : <input type="text" ref={(listType)=> { this.listType = listType }} defaultValue={this.state.listType} /><br />
          list : <input type="text"  ref={(list)=> { this.list = list }} defaultValue={this.state.list}/><br />
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
   * hl 
      - type : String
      - default value : 'en' 
      - interface language(ex:en, ko, ja)
   * loop
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to play the initial video again and again
   * rel
      - type : Number
      - default value : 0
      - a setting of 1 causes the player to show related videos when playback of the initial video ends.
   * listType
	   - type : String
	   - list type : 'search', 'playlist', 'user_uploads'
   * list
      - type : String
      - If the listType parameter value is search, then the list parameter value specifies the search query.
      - If the listType parameter value is user_uploads, then the list parameter value identifies the YouTube channel whose uploaded videos will be loaded.
      - If the listType parameter value is playlist, then the list parameter value specifies a YouTube playlist ID. In the parameter value, you need to prepend the playlist ID with the letters PL as shown in the example below.
      - if you want to use this parameter, videoid parameter must not be specified. 
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



