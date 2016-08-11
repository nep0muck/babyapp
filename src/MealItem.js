import React from 'react';

export default class MealItem extends React.Component {
  constructor(props) {
    super(props);

  }

  // renderItemSection() {
  //   const { task, isCompleted } = this.props;

  //   const taskStyle = {
  //     color: isCompleted ? 'green' : 'red',
  //     cursor: 'pointer'
  //   };

  //   if (this.state.isEditing) {
  //     return (
  //       <td>
  //         <form onSubmit={this.onSaveClick.bind(this)}>
  //           <input type="text" defaultValue={task} ref="editInput" />
  //         </form>
  //       </td>
  //     );
  //   }

  //   return (
  //     <td style={taskStyle} onClick={this.props.toggleItem.bind(this, task)}>{this.props.task}</td>
  //   );
  // }

  renderItemSection() {
    const { time, amount } = this.props;

    return (
      <tr>
        <td>{this.props.time}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }


  // renderActionsSection() {
  //   if (this.state.isEditing) {
  //     return (
  //       <td>
  //         <button onClick={this.onSaveClick.bind(this)}>save</button>
  //         <button onClick={this.onCancelClick.bind(this)}>cancel</button>
  //       </td>
  //     );
  //   }

  //   return (
  //     <td>
  //       <button onClick={this.onEditClick.bind(this)}>edit</button>
  //       <button onClick={this.props.deleteItem.bind(this, this.props.task)}>delete</button>
  //     </td>
  //   );
  // }

  render() {
    return (
      <tr>
        <td>{this.props.time}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }

  // onEditClick() {
  //   this.setState({ isEditing: true });
  // }

  // onCancelClick() {
  //   this.setState({ isEditing: false });
  // }

  // onSaveClick(event) {
  //   event.preventDefault();

  //   const oldTask = this.props.task;
  //   const newTask = this.refs.editInput.value;
  //   this.props.saveItem(oldTask, newTask);
  //   this.setState({ isEditing: false });
  // }

  onSaveClick(event) {
    event.preventDefault();

    this.props.saveItem();
  }

}