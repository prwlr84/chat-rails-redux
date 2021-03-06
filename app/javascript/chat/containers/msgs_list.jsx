import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMsgs, setUsers } from '../actions';
import { createRef } from 'react';
import Msg from '../components/msg';
import MsgForm from './message_form';


class MsgsList extends Component {
  componentDidMount() {
    this.props.setUsers();
    this.props.setMsgs('general');
    this.refresher = setInterval(()=>{this.props.setMsgs(this.props.active)}, 2000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render(){
    return(
        <div className="msgs-list" ref={(list) => { this.list = list; }} style={{height: '90vh'}}>
          {this.props.msgs.map( msg => <Msg msg={msg} key={msg.created_at} users={this.props.users}/>)}
        </div>
      )
  }
}



function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setMsgs: setMsgs, setUsers: setUsers },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
  msgs: state.msgs,
  users: state.users,
  active: state.activeChannel
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(MsgsList);
