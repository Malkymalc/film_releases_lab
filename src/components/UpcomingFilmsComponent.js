import React, { Component, Fragment } from 'react';
import FilmListComponent from './FilmListComponent.js';
import ViewMoreComponent from './ViewMoreComponent.js';

class UpcomingFilmsComponent extends Component{

  render(){
    return (
      <Fragment>
        <h1>Upcoming Films</h1>
        <hr/>
        <FilmListComponent films={this.props.films}/>
        <hr/>
        <ViewMoreComponent link={this.props.link}/>
      </Fragment>
    )
  }
}

export default UpcomingFilmsComponent
