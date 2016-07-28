import React from 'react';
import CreateTimeLine from './CreateTimeLine';
import TimeLineList from './TimeLineList';

const todos = [
  {
    task: 'make React Tutorial',
    isCompleted: false
  },
  {
    task: 'Dinner',
    isCompleted: true
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React BabyApp</h1>
        <CreateTimeLine createItem={this.createItem.bind(this)} />
        <TimeLineList todos={this.state.todos} toggleItem={this.toggleItem.bind(this)} saveItem={this.saveItem.bind(this)} deleteItem={this.deleteItem.bind(this)} />
      </div>
    );
  }

  toggleItem(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });

  }

  createItem(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });

    this.setState({ todos: this.state.todos });
  }

  saveItem(oldItem, newItem) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldItem);
    foundTodo.task = newItem;
    this.setState({ todos: this.state.todos });
  }

  deleteItem(itemToDelete) {
    _.remove(this.state.todos, todo => todo.task === itemToDelete);
    this.setState({ todos: this.state.todos });
  }
}