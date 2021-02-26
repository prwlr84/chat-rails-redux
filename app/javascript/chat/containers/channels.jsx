import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels, setMsgs, setActive  } from '../actions';
import { createRef } from 'react';

export const getMetaContent = (name) => {
var metas = document.getElementsByTagName('meta');
console.log(metas);
  for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == name) {
      return metas[i].getAttribute("content");
    }
  }
}

class Channels extends Component {
  componentDidMount(){
    this.props.setChannels();
  }

  componentDidUpdate(){
    if(this.props.active.length === 0){
    this.props.setActive(this.props.channels[0].name);
    }
  }

  selectChannel(channel){
    this.props.setMsgs(channel);
    this.props.setActive(channel);
  }

  render(){
   return(
    <div className='channels col-sm-3'>
      <h2>Welcome!</h2>
      <h2> {this.props.curusr.email}</h2>
      <br/>
      <h3>You are currently on the</h3>
      <h2>#{this.props.active}</h2>
      <h3>Channel</h3>
      <br/>
      <h3>More trending channels:</h3>
      <ul>
        {this.props.channels.map(ch => <li key={ch.id} onClick={() => this.selectChannel(ch.name)}>{ch.name}</li>)}
      </ul>
      <form className="button_to" method="post" action="/users/sign_out">
        <input type="hidden" name="_method" value="delete" />
        <input type="hidden" name="authenticity_token" value={getMetaContent("csrf-token")} />
        <button type="submit"><i class="fas fa-user-times"></i> Log out</button>
      </form>
    </div>
  )
 }
}


function mapDispatchToProps(dispatch) {
 return bindActionCreators(
   { setChannels: setChannels, setMsgs: setMsgs, setActive: setActive },
   dispatch
   );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    active: state.activeChannel,
    curusr: state.curusr
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
