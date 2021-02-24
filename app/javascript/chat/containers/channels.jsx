import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, setMsgs  } from '../actions';
import { createRef } from 'react';

class Channels extends Component {
  constructor(props){
    super(props);
    this.state = { active: 'general' };
  }

  componentDidMount(){
    this.props.setChannels();
  }

  selectChannel(channel){
    this.props.setMsgs(channel);
    this.setState({active: channel});
  }

  render(){

   return(
    <div className='channels col-sm-3'>
      <h2>Welcome!</h2>
      <h2>You are currently on the</h2>
      <h2>#{this.state.active.toUpperCase()}</h2>
      <h2>Channel</h2>
      <br/>
      <h2>More trending channels:</h2>
      <ul>
        {this.props.channels.map(ch => <li key={ch.id} onClick={() => this.selectChannel(ch.name)}>{ch.name}</li>)}
      </ul>
    </div>
  )
 }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators(
   { setChannels: setChannels, setMsgs: setMsgs  },
   dispatch
   );
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
