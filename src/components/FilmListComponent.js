import React, { Component } from 'react';
import FilmComponent from './FilmComponent';

class FilmListComponent extends Component{

  render(){
    const films = this.props.films.map((film) =>{
      return (
        <li>
          <FilmComponent film={film} index={film.id}/>
        </li>
      );
    });

    return(
      <ul>
        { films }
      </ul>
    );
  }

}

export default FilmListComponent;
