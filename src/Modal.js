import React from 'react';
import $ from "jquery";import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Actions } from './Actions';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    
    if (!props.modal.newEntry) {
      this.state = ({
        fname: props.fname,
        lname: props.lname,
        dob: new Date(props.dob),
        licno: props.licno,
        email: props.email,
        phone: props.phone,
        licexpdate: new Date(props.licexpdate),
        errors: ''
      });
    } else {
      this.state = ({
        fname: '',
        lname: '',
        dob: new Date(),
        licno: '',
        email: '',
        phone: '',
        licexpdate: new Date(),
        errors: ''
      });
    }
  }
  
  componentDidMount() {
    $('#editDriver').modal('show');
  }
  
  closeModal() {
    let modalComponent = this;
    $('#editDriver').modal('hide');
    $('#editDriver').on('hidden.bs.modal', function () {
      modalComponent.props.actions.toggleModal();
    });
  }
  
  handleDelete() {
    if (this.props.id && !this.props.modal.newEntry) {
      this.props.actions.deleteDriver(this.props.id);  
    }
    this.closeModal();
  }

  validateEmail(email) {
    let re = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }
  
  handleSave() {
    let driver = {
        id: this.props.id,
        fname: this.state.fname,
        lname: this.state.lname,
        dob: typeof this.state.dob === 'object' ? this.state.dob.toJSON() : this.state.dob,
        licno: this.state.licno,
        email: this.state.email,
        phone: this.state.phone,
        licexpdate: typeof this.state.licexpdate === 'object' ? this.state.licexpdate.toJSON() : this.state.licexpdate,
    }
    if (driver.fname.length < 1 || driver.dob.length < 1 || driver.licno.length < 1 || driver.email.length < 1 || driver.phone.length < 1 || driver.licexpdate.length < 1) {
      let errors = [];
      errors.push('All fields are required.');
      if (errors.length >= 1) {
        this.setState({
          errors: errors.join(' ')
        });
        return;
      }
    }
    if(!this.validateEmail(driver.email)) {
      this.setState({
        errors: 'Email Not Valid!'
      });
      return;
    }
    if (!this.props.modal.newEntry) {
      this.props.actions.updateDriver(driver);
    }
    else {
      this.props.actions.saveNewDriver(driver);
    }
    this.closeModal();
  }
  
  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDOBChange(date) {
    this.setState({
      dob: date
    });
  }

  handleLEDChange(date) {
    this.setState({
      dob: date
    });
  }

  handleEmailChange(date) {
    this.setState({
      dob: date
    });
  }
  
  render() {
    if (!this.props.modal.isOpen) {
      this.closeModal();
    }
    return <div 
      id={"editDriver"}
      className="modal fade" 
      data-backdrop="static"       
      tabIndex="-1" 
      role="dialog"       
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button 
                onClick={this.closeModal.bind(this)}
                type="button" className="close" 
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="input-form-group">
                <label htmlFor="driver-fname">First Name</label>
                <input type="text" 
                  onChange={this.handleInputChange.bind(this)}
                  id="driver-fname" 
                  className="form-control"
                  value={this.state.fname}
                  name="fname"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-lname">Last Name</label>
                <input type="text" 
                  onChange={this.handleInputChange.bind(this)}
                  id="driver-name" 
                  className="form-control"
                  value={this.state.lname}
                  name="lname"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-dob">DOB</label>
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.dob}
                  onChange={this.handleDOBChange.bind(this)}
                />
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-licno">License No</label>
                <input type="text" 
                  onChange={this.handleInputChange.bind(this)}
                  id="driver-licno" 
                  className="form-control"
                  value={this.state.licno}
                  name="licno"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-email">Email</label>
                <input type="text" 
                  onChange={this.handleInputChange.bind(this)}
                  id="driver-email" 
                  className="form-control"
                  value={this.state.email}
                  name="email"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-phone">Phone</label>
                <input type="number" 
                  onChange={this.handleInputChange.bind(this)}
                  id="driver-phone" 
                  className="form-control"
                  value={this.state.phone}
                  name="phone"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-licexpdate">License Expiration Date</label>
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.licexpdate}
                  onChange={this.handleLEDChange.bind(this)}
                />
              </div>

              <p className="text-danger">
                {this.state.errors}
              </p>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-default"
                onClick={this.closeModal.bind(this)}
              >
                  Cancel
              </button>
              <button 
                onClick={this.handleSave.bind(this)}
                type="button" 
                className="btn btn-primary"
              >
                Save changes
              </button>
              <button 
                onClick={this.handleDelete.bind(this)}
                type="button" 
                className="btn btn-danger bottom-left"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
    </div>
  }
};

const mapStateToModalProps = (state) => {
  return {
    id: state.drivers.currentDriver.id,
    newEntry: state.modal.newEntry,
    modal: state.modal,
    fname: state.drivers.currentDriver.fname,
    lname: state.drivers.currentDriver.lname,
    dob: state.drivers.currentDriver.dob,
    licno: state.drivers.currentDriver.licno,
    email: state.drivers.currentDriver.email,
    phone: state.drivers.currentDriver.phone,
    licexpdate: state.drivers.currentDriver.licexpdate
  };
}

const mapDispatchToModalProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

Modal = connect(mapStateToModalProps, mapDispatchToModalProps)(Modal);

export { Modal }