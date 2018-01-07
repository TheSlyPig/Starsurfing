import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const userId = this.props.user.id;
    this.props.history.push(`/users/${userId}`);
  }

  render() {
    const { username } = this.props.user;
    return (
      <div
        className="user-index-item"
        onClick={this.handleClick}
      >
        <div className="user-index-item-info">
          <span className="user-index-item-desc">{ username }</span>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexItem);
