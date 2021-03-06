import React from 'react';
import { Route, Link } from 'react-router-dom';

class Request extends React.Component {

  constructor(props) {
    super(props);

    this.handleApprove = this.handleApprove.bind(this);
    this.handleDeny = this.handleDeny.bind(this);
    this.redirectToUserShow = this.redirectToUserShow.bind(this);
  }

  handleApprove(e) {
    e.preventDefault();

    let request = Object.assign({}, {
      host_id: this.props.request.host_id,
      end_date: this.props.request.end_date,
      start_date: this.props.request.start_date,
    }, { status: 'APPROVED' });

    this.props.editRequest(request, this.props.id );
    this.redirectToUserShow();
  }

  handleDeny(e) {
    e.preventDefault();

    this.props.deleteRequest(this.props.id );
    this.redirectToUserShow();
  }

  redirectToUserShow() {
    const url = `/users/${this.props.match.params.id}`;
    this.props.history.push(url);
  }

  approveDeny() {

    if (this.props.request.status !== "PENDING") {
      return;
    }
    return (
      <section className='user-request-links'>
        <button
          className='user-request-link-approve'
          onClick={this.handleApprove}
        >
          Approve
        </button>

        <button
            className='user-request-link-deny'
            onClick={this.handleDeny}
          >
            Deny
        </button>
      </section>
    );
  }

  render() {
    const date = new Date(this.props.startDate)
                  .toString().slice(0, 15)
                  .concat(' - ')
                  .concat(new Date(this.props.endDate)
                  .toString().slice(0, 15));
    return (
      <div className="request">
        <div className="request-surfer-info">
          <section className="request-surfer-info-left">
            <div className="request-surfer-photo">
              <Link className='reviewer-photo-link' to={`/users/${this.props.madeRequests ? this.props.request.host_id : this.props.surferId}`}>
                <img src={this.props.madeRequests ? this.props.request.host_image_url : this.props.surferImageUrl}/>
              </Link>
            </div>
            <section className="request-surfer-text">
              <p className="request-surfer-name">
                <Link className='reviewer-name-link' to={`/users/${this.props.madeRequests ? this.props.request.host_id : this.props.surferId}`}>
                  {this.props.madeRequests ? this.props.request.host_name : this.props.surferName}
                </Link>
              </p>
              <p className="request-surfer-location">
                <Link className='reviewer-location-link' to={`/stars/${this.props.madeRequests ? this.props.request.host_location_id : this.props.surferLocationId}`}>
                  {this.props.madeRequests ? this.props.request.host_location: this.props.surferLocation}
                </Link>
              </p>
            </section>
          </section>
          <section className="request-surfer-info-right">
            <div className="request-date">
              <p>{ date }</p>
            </div>
            <div className="request-status">Status: {this.props.status}</div>
            {this.props.madeRequests ? null : this.approveDeny()}
          </section>
        </div>
      </div>
    );
  }
}

export default Request;
