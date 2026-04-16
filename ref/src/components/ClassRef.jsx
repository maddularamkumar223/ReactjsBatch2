import React, { Component } from "react";
import Song from "../../public/lyrical--the-paradise--nani--anirudh-ravichander--srikanth-odela.mp3";

export default class ClassRef extends Component {
  constructor() {
    super();
    this.state = {
      play: false,
    };
    // ! Creating the Ref For Input and Audio
    this.inputRef = React.createRef();
    this.audioRef = React.createRef();

    // ! Handle the input fiels
    this.handleFocus = () => {
      console.log(this.inputRef);
      this.inputRef.current.focus();
      console.log(this.inputRef.current.value);
    };
    // ! Function For play and pause the dong
    this.playSong = () => {
      this.audioRef.current.src = Song;
      if (this.state.play === true) {
        this.audioRef.current.pause();
        this.setState({ play: false });
      } else {
        this.audioRef.current.play();
        this.setState({ play: true });
      }
    };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter the Data"
          ref={this.inputRef}
          onClick={this.handleFocus}
        />
        <audio ref={this.audioRef}></audio>
        <button onClick={this.playSong}>
          {this.state.play === false ? "Play" : "Pause"}
        </button>
      </div>
    );
  }
}
