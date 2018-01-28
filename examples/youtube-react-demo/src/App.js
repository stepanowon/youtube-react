import React, { Component } from 'react';
import YoutubeReact from './components/YoutubeReact'

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
