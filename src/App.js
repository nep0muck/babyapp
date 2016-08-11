import React from 'react';
import CreateMeal from './CreateMeal';
import MealList from './MealList';

// const todos = [
//   {
//     task: 'make React Tutorial',
//     isCompleted: false
//   },
//   {
//     task: 'Dinner',
//     isCompleted: true
//   }
// ];

const meals = [
  {
    time: '11.08.2016 - 15:24',
    amount: '90'
  },
  {
    time: '11.08.2016 - 16:24',
    amount: '80'
  },
  {
    time: '11.08.2016 - 18:24',
    amount: '100'
  }
];


export default class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     todos
  //   };

  constructor(props) {
    super(props);

    this.state = {
      meals
    };

    const test = new Date();
    console.log(test);
  }


  // render() {
  //   return (
  //     <div>
  //       <h1>React BabyApp</h1>
  //       <CreateTimeLine todos={this.state.todos} createItem={this.createItem.bind(this)} />
  //       <TimeLineList todos={this.state.todos} toggleItem={this.toggleItem.bind(this)} saveItem={this.saveItem.bind(this)} deleteItem={this.deleteItem.bind(this)} />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <h1>JaMeal</h1>
        <CreateMeal meals={this.state.meals} createItem={this.createItem.bind(this)} />
        <MealList meals={this.state.meals} />
      </div>
    );
  }



  // toggleItem(task) {
  //   const foundTodo = _.find(this.state.todos, todo => todo.task === task);
  //   foundTodo.isCompleted = !foundTodo.isCompleted;
  //   this.setState({ todos: this.state.todos });
  // }

  // createItem(task) {
  //   this.state.todos.push({
  //     task,
  //     isCompleted: false
  //   });

  //   this.setState({ todos: this.state.todos });
  // }

  createItem(amount) {
    const timestamp = new Date().toJSON();

    this.state.meals.push({
      time: timestamp,
      amount
    });

    this.setState({ meals: this.state.meals });
  }

  // saveItem(oldItem, newItem) {
  //   const foundTodo = _.find(this.state.todos, todo => todo.task === oldItem);
  //   foundTodo.task = newItem;
  //   this.setState({ todos: this.state.todos });
  // }

  // deleteItem(itemToDelete) {
  //   _.remove(this.state.todos, todo => todo.task === itemToDelete);
  //   this.setState({ todos: this.state.todos });
  // }
}