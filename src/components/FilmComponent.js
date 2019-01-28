import React, { Component } from 'react';

class FilmComponent extends Component{

  render(){
    return(
      <a href={this.props.film.url}>
        <p>{this.props.film.name}</p>
      </a>
    )
  }
}

export default FilmComponent;
