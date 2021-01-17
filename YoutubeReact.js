import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YoutubePlayer from 'youtube-player';

class YoutubeReact extends Component {
    componentDidMount() {
        let playerVars = {                
            autoplay:this.props.autoplay, 
            loop:this.props.loop
        };

        this.player = YoutubePlayer('youtube-react-player-soma', {
            host: "https://www.youtube.com",
            width: this.props.width,
            height: this.props.height,
            videoId: this.props.videoid,
            playerVars
        })

        this.player.on('ready', this.props.onReady)
        this.player.on('stateChange', (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
                if (this.props.onEnded) this.props.onEnded();
            } else if (e.data === window.YT.PlayerState.PAUSED) {
                if (this.props.onPaused) this.props.onPaused();
            } else if (e.data === window.YT.PlayerState.PLAYING) {
                if (this.props.onPlayed) this.props.onPlayed();
            } 
        }); 
    }

    componentDidUpdate() {
        this.player.loadVideoById(this.props.videoid);
    }
    

    componentWillUnmount() {
        this.player = null;
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
                <div id="youtube-react-player-soma"></div>
            </div>
        );
    }
}

const oneOrZero  = (props, propName) => {
    return (props[propName] !== 1 && props[propName] !== 0 )  
        ? new Error(`this value must be one or zero!! (${propName} props)`) : undefined;
}

YoutubeReact.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    autoplay : oneOrZero,
    videoid :PropTypes.string,
    loop : oneOrZero,
    onEnded: PropTypes.func,
    onPaused: PropTypes.func,
    onPlayed: PropTypes.func,
    onReady: PropTypes.func
};

YoutubeReact.defaultProps = {
    width: 480, height:320, autoplay:0, loop:0, videoid:"3P1CnWI62Ik"
};

export default YoutubeReact;
