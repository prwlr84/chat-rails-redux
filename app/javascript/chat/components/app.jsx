import React, { Component } from 'react';
import MsgsList from '../containers/msgs_list';
import MsgForm from '../containers/message_form';
import Channels from '../containers/channels';


class App extends Component {
  render(){
    return(
    <div className='row'>
      <div className="logo col-sm-2"><img src="signatureLogo.svg" alt="" /></div>
      <Channels />
      <div className="msg-panel col-sm-7">
        <MsgsList />
        <MsgForm />
      </div>
    </div>
    )
  }
}

export default App;
