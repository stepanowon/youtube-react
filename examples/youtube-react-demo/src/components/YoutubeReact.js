import React, { Component } from 'react';
import PropTypes from 'prop-types';

class YoutubeReact extends Component {
    constructor() {
        super()
        this.playVideo = this.playVideo.bind(this);
        this.mountPlayer = this.mountPlayer.bind(this);
        this.configPlayer = this.configPlayer.bind(this);
    }
    
    mountPlayer() {
        if (!document.getElementById('youtube-react-player-script')) {
            let tag = document.createElement('script');
            tag.id = 'youtube-react-player-script';
            tag.src = 'https://www.youtube.com/iframe_api';
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        if (this.player) {
            const oldPlayer = window.document.getElementById("youtube-react-player")
            const newPlayer = document.createElement("div");
            newPlayer.id = 'youtube-react-player'
            oldPlayer.parentNode.insertBefore(newPlayer, oldPlayer);
            oldPlayer.parentNode.removeChild(oldPlayer);
        }
    }

    configPlayer() {
        this.player = new window.YT.Player('youtube-react-player', {
            height: this.props.height,
            width: this.props.width,
            videoId: this.props.videoid,
            playerVars : {
                hl: this.props.hl,
                loop: this.props.loop,
                rel: this.props.rel,
                autoplay: this.props.autoplay  
            },
            events : {
                'onReady': (e) => {
                    if (this.props.onReady)  this.props.onReady();
                },
                'onStateChange': (e) => {
                    if (e.data === window.YT.PlayerState.ENDED) {
                        if (this.props.onEnded)  this.props.onEnded();
                    } else if (e.data === window.YT.PlayerState.PAUSED) {
                        if (this.props.onPaused)  this.props.onPaused();
                    } else if (e.data === window.YT.PlayerState.PLAYING) {
                        if (this.props.onPlayed)  this.props.onPlayed();
                    }
                }
            }
        });
    }

    componentDidMount() {
        this.mountPlayer();
        window.onYouTubeIframeAPIReady = () => {
            this.configPlayer()
        }
    }

    componentDidUpdate() {
        this.mountPlayer();
        this.configPlayer()        
    }

    playVideo(){
        this.player.playVideo();
    }

    stopVideo() {
        this.player.stopVideo();
    }

    pauseVideo() {
        this.player.pauseVideo();
    }
    mute() {
        this.player.mute();
    }

    unMute() {
        this.player.unMute();
    }

    setVolume(volume) {
        if (volume >= 0 && volume <= 100) {
            this.player.setVolume(volume)
        }
    }

    getVolume()  {
        return this.player.getVolume()
    }

    setSize(width, height) {
        this.player.setSize(width, height)   
    }

    render() {
        const styleContainer = { margin:0, padding:0 };
        return (
            <div style={styleContainer}>
                <div id="youtube-react-player"></div>
            </div>
        );
    }
}

let oneOrZero = (props, propName, componentName) => {
    if (props[propName] !== 1 && props[propName] !== 0) {
        return new Error(`this value must be one or zero!!  ${propName} at ${componentName}`)
    }
}

YoutubeReact.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    autoplay: oneOrZero,
    videoid: PropTypes.string,
    hl: PropTypes.string,
    loop : oneOrZero,
    rel: oneOrZero,
    onEnded: PropTypes.func,
    onPaused: PropTypes.func,
    onPlayed: PropTypes.func,
    onReady: PropTypes.func
}

YoutubeReact.defaultProps = {
    width: 320, height:240, 
    autoplay: 0, 
    videoid: 'PABUl_EX_hw',
    hl: 'en',
    loop: 0,
    rel: 1
}

export default YoutubeReact;