import React from 'react';
import $ from "jquery";

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
        dob: props.dob,
        licno: props.licno,
        email: props.email,
        phone: props.phone,
        licexpdate: props.licexpdate,
        errors: ''
      });
    } else {
      this.state = ({
        fname: '',
        lname: '',
        dob: '',
        licno: '',
        email: '',
        phone: '',
        licexpdate: '',
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
  
  handleSave() {
    let driver = {
        id: this.props.id,
        fname: this.state.fname,
        lname: this.state.lname,
        dob: this.state.dob,
        licno: this.state.licno,
        email: this.state.email,
        phone: this.state.phone,
        licexpdate: this.state.licexpdate,
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
    if (!this.props.modal.newEntry) {
      this.props.actions.updateDriver(driver);
    }
    else {
      this.props.actions.saveNewDriver(driver);
    }
    this.closeModal();
  }
  
  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
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
              {/* {
                !this.props.id ?  
                <h4 className="modal-title">Edit Driver</h4>
                : <h4 className="modal-title">Add Driver</h4>
              } */}
            </div>
            <div className="modal-body">
              <div className="input-form-group">
                <label htmlFor="driver-fname">First Name</label>
                <input type="text" 
                  onChange={this.handleNameChange.bind(this)}
                  id="driver-fname" 
                  className="form-control"
                  value={this.state.fname}
                  name="fname"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-lname">Last Name</label>
                <input type="text" 
                  onChange={this.handleNameChange.bind(this)}
                  id="driver-name" 
                  className="form-control"
                  value={this.state.lname}
                  name="lname"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-dob">DOB</label>
                <input type="text" 
                  onChange={this.handleNameChange.bind(this)}
                  id="driver-dob" 
                  className="form-control"
                  value={this.state.dob}
                  name="dob"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-licno">License No</label>
                <input type="text" 
                  onChange={this.handleNameChange.bind(this)}
                  id="driver-licno" 
                  className="form-control"
                  value={this.state.licno}
                  name="licno"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-email">Email</label>
                <input type="text" 
                  onChange={this.handleNameChange.bind(this)}
                  id="driver-email" 
                  className="form-control"
                  value={this.state.email}
                  name="email"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-phone">Phone</label>
                <input type="text" 
                  onChange={this.handleNameChange.bind(this)}
                  id="driver-phone" 
                  className="form-control"
                  value={this.state.phone}
                  name="phone"/>
              </div>

              <div className="input-form-group">
                <label htmlFor="driver-licexpdate">License Expiration Date</label>
                <input type="text" 
                  onChange={this.handleNameChange.bind(this)}
                  id="driver-licexpdate" 
                  className="form-control"
                  value={this.state.licexpdate}
                  name="licexpdate"/>
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