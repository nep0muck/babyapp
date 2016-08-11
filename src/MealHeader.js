import React from 'react';

export default class MealHeader extends React.Component {
  // render() {
  //   return (
  //     <thead>
  //       <tr>
  //         <th>Task</th>
  //         <th>Actions</th>
  //       </tr>
  //     </thead>
  //   );
  // }

  render() {
    return (
      <thead>
        <tr>
          <th>Time</th>
          <th>Amount</th>
        </tr>
      </thead>
    );
  }
}