import React, { Component } from 'react';
import MsgsList from '../containers/msgs_list';
import MsgForm from '../containers/message_form';
import Channels from '../containers/channels';


class App extends Component {
  render(){
    console.log(this.props);
    return(
    <div className='row'>
      <div className="logo col-sm-2">
        <img src="https://res.cloudinary.com/prwlr84/image/upload/v1613987651/signatureLogo_w3jejj.svg" alt="" />
        <div className="logos col-sm-2">
          <img className="col-4" src="/images/rails.svg" alt="" />
          <img className="col-4" src="/images/react.svg" alt="" />
          <img className="col-4" src="/images/redux.svg" alt="" />
        </div>
      </div>
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
