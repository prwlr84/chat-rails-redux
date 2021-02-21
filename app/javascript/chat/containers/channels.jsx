import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveChannel } from '../actions';
import { createRef } from 'react';

class Channels extends Component {

  componentWillMount(){
    this.props.setActiveChannel();
  }

 render(){
  function cFL(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

   return(
    <div className='channels col-sm-3'>
      <h2>Welcome!</h2>
      <h2>You are currently on the</h2>
      <h2>Channel</h2>
      <br/>
      <h2>More trending channels:</h2>
      <ul>
        {this.props.channels.map(ch => <li key={ch} onClick={()=>this.props.setActiveChannel(ch)}>{cFL(ch)}</li>)}
      </ul>
    </div>
    )
 }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators(
   { setActiveChannel: setActiveChannel  },
   dispatch
   );
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);