import React from 'react';
import $ from "jquery";

class Driver extends React.Component {
 
  setCurrentDriver(e) {
    e.preventDefault();
    e.stopPropagation();
        
    let $currentPanel = $(e.target).closest('div').children('.driverInfo');
    let currentDriver = {
      id: this.props.id,
      fname: this.props.fname,
      lname: this.props.lname,
      dob: this.props.dob,
      licno: this.props.licno,
      email: this.props.email,
      phone: this.props.phone,
      licexpdate: this.props.licexpdate
    };
    this.props.actions.setCurrentDriver(currentDriver);
    $('.driverInfo').not($currentPanel).slideUp(400);
    $(e.target).closest('div').children('.driverInfo').slideToggle(400);
  }
  
  editDriver() {
    this.props.actions.editDriver();
    this.props.actions.toggleModal();
  }
  
  render() {
    return (
      <div className="driver">
        <button className="driverHeaderLink" onClick={this.setCurrentDriver.bind(this)}>
          <h4 className={"driverHeader" + (this.props.active ? " active" : "")} >
            {this.props.fname}
          </h4>
        </button>
        <div className="driverInfo">
          <p><b>First name:</b> {this.props.fname}</p>
          <p><b>Last name:</b> {this.props.lname}</p>
          <p><b>DOB:</b> {this.props.dob}</p>
          <p><b>License No:</b> {this.props.licno}</p>
          <p><b>Email:</b> {this.props.email}</p>
          <p><b>Phone Number:</b> {this.props.phone}</p>
          <p><b>License Expiration Date:</b> {this.props.licexpdate}</p>
          <button 
            onClick={this.editDriver.bind(this)}
            className="btn edit-btn"
          >
              Edit
          </button>
        </div>
      </div>      
    );
  }
};

export { Driver };