import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import {setVisibilityFilter,addTodo,ToggleTodo} from '../actions';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    let {dispatch,visibleTodos} = this.props;
    console.log(dispatch)
    return (
      <div className="App">
        <AddTodo onAddClick ={text=>{
            dispatch(addTodo(text))
          }}/>
          <TodoList todos={visibleTodos} todoClick={index=>dispatch(ToggleTodo(index))}/>
          <Footer onFilterChange={(filter)=>dispatch(setVisibilityFilter(filter))}/>
      </div>
    );
  }
}
function selectTodos(todos, filter) {
  switch (filter) {
  case 'SHOW_ALL':
    return todos;
  case 'SHOW_COMPLETE':
    return todos.filter(todo => todo.completed);
  case 'SHOW_ACTIVE':
    return todos.filter(todo => !todo.completed);
  }
}
function select (state){
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(App);
