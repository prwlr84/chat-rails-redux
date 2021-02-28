import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ColorHash from 'color-hash'


class Msg extends Component {


  render(){
    const colorHash = new ColorHash();
    const date = new Date(this.props.msg.created_at);
    const user = this.props.users.find(user => user.id === +this.props.msg.user_id);
    return(
      <div className="msg">
        <p style={{color: colorHash.hex(user.email)}}>{user.nick || user.email}</p>
        <h3>{this.props.msg.content}</h3>
        <p>{ date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Msg;
