import React, { Component } from 'react';
import { createMessage } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMsgs } from '../actions';


class MsgForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', channel: this.props.active };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = {
      channel: this.props.activeChannel,
      content: this.state.value
    }
    createMessage(text, this.props.active);
    this.setState({value:''});
  }


  componentDidMount() {
    this.messageBox.focus();
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input className="col-9" ref={(input) => { this.messageBox = input; }} id='focus' type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
 return {
  active: state.activeChannel,
 };
}

export default connect(mapStateToProps)(MsgForm);
