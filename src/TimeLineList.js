import _ from 'lodash';
import React from 'react';
import TimeLineListHeader from './TimeLineListHeader';
import TimeLineListItem from './TimeLineListItem';

export default class TimeLineList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TimeLineListItem key={index} {...todo} {...props} />);
  }

  render() {
    return (
      <table>
        <TimeLineListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}