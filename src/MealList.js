import _ from 'lodash';
import React from 'react';
import MealHeader from './MealHeader';
import MealItem from './MealItem';

export default class MealList extends React.Component {
  // renderItems() {
  //   const props = _.omit(this.props, 'todos');

  //   return _.map(this.props.todos, (todo, index) => <TimeLineListItem key={index} {...todo} {...props} />);
  // }

  renderItems() {
    const props = _.omit(this.props, 'meals');

    return _.map(this.props.meals, (meal, index) => <MealItem key={index} {...meal} {...props} />);
  }

  // render() {
  //   return (
  //     <table>
  //       <TimeLineListHeader />
  //       <tbody>
  //         {this.renderItems()}
  //       </tbody>
  //     </table>
  //   );
  // }

  render() {
    return (
      <table>
        <MealHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}