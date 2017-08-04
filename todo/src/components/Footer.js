import React,{Component} from 'react';
import Proptypes from 'prop-types';

export default class Footer extends Component{
    renderFilter(filter,name){
        if(this.props.filter === filter){
            return name;
        }
        return (
            <a onClick={this.props.onFilterChange.bind(this,filter)}>{name}</a>
        )
    }
    render(){
        return (
            <div>
               Show: {this.renderFilter('SHOW_ALL','all')} {' , '}
                {this.renderFilter('SHOW_COMPLETE','complete')}{' , '}
                {this.renderFilter('SHOW_ACTIVE','active')}
            </div>
        )
    }
}
Footer.propTypes = {
    onFilterChange:Proptypes.func.isRequired,
    filter:Proptypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETE',
        'SHOW_ACTIVE'
    ])
}