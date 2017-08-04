import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component{
    static propTypes = {
        onClick:PropTypes.func.isRequired
    }
    render(){
        return <div style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }} onClick={this.props.onClick}>{this.props.text}</div>
    }
}