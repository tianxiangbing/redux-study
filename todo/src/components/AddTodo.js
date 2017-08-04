import React, {  Component, } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    handleClick(e){
        console.log(e)
        let text = this.refs.input.value;
        this.props.onAddClick(text)
    }
    render() {
        return (
            <div>
                <input type="text" ref="input"/><button onClick={e=>this.handleClick(e)} >add</button>
            </div>
        )
    }
}
AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}