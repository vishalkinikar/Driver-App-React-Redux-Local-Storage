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
          <p>First name: {this.props.fname}</p>
          <p>Last name: {this.props.lname}</p>
          <p>DOB: {this.props.dob}</p>
          <p>License No: {this.props.licno}</p>
          <p>Email: {this.props.email}</p>
          <p>Phone Number: {this.props.phone}</p>
          <p>License Expiration Date: {this.props.licexpdate}</p>
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