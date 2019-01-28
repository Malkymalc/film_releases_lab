import React, { Component, Fragment } from 'react';


class ViewMoreComponent extends Component{

  render(){
    return(
      <Fragment>
        <a href={this.props.link.url}>
          <button className='view_more_buttom'>{this.props.link.text}</button>
        </a>
      </Fragment>
    );
  }

}

export default ViewMoreComponent;
