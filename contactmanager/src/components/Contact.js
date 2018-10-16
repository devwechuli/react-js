import React, { Component } from "react";
import PropTypes from "prop-types";
//import './contact.css';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { showContactInfo } = this.state;
    //we can destructure so that we don't have to keep using this.pros
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            className="fas fa-angle-down"
            style={{ cursor: "pointer" }}
            onClick={this.onShowClick}
          />
          <i
            className="fa fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.PropTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler:PropTypes.func.isRequired
};

export default Contact;
