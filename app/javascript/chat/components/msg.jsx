import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ColorHash from 'color-hash'


class Msg extends Component {


  render(){
    console.log(this.props);
    const colorHash = new ColorHash();
    const date = new Date(this.props.msg.created_at);
    return(
      <div className="msg">
        <p style={{color: colorHash.hex(this.props.msg.user_id)}}>{this.props.msg.user_id}</p>
        <h3>{this.props.msg.content}</h3>
        <p>{ date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Msg;
