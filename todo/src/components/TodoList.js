import React,{Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component{
    render(){
        return (
            <div>
                {this.props.todos.map((item,index)=>{  
                    return <Todo {...item} key={index} onClick={e=>this.props.todoClick(index)}/>
                })}
            </div>
        )
    }
}