import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Actions } from './Actions';
import { Modal } from './Modal';
import { Driver } from './Driver';

import { Auth } from './login';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';

class DriverApp extends React.Component {
  createDriver() {
    this.props.actions.createDriver();
    this.props.actions.toggleModal();
  }
  
  render() {
    return (
    <div id="main-container">
        <h1>DriverApp List</h1>
      <div id="container">   
        {
          this.props.modal.isOpen ?
            <Modal />
          : null  
          } 
        <div className="driverApp"> 
          {
            this.props.auth ?
              this.renderDrivers()
            : 
              <Auth />
          }
        </div>

        {
          this.props.auth ?
            <button
              onClick={this.createDriver.bind(this)}
              className="btn btn-success btn-create"
            >
              Add New Driver
            </button>
          : null
        }
      </div>
     </div> 
    );     
  }
  
  componentDidMount() {
    this.props.actions.isAuth();
    this.props.actions.getAllDrivers();
  }
  
  renderDrivers() {
    if (!this.props.drivers || this.props.drivers.length < 1) {
      return (
        <h4>No drivers yet. Click 'Add New Driver' to get started!</h4>
      );
    }
    const driverList = this.props.drivers.map(driver => {
      return <Driver 
               key={driver.id} 
               active={
                driver.id === this.props.currentDriver.id ? 
                  true 
                  : false 
               } 
               {...driver}
               actions={this.props.actions}
              />
    });
    return driverList;
  }
};

const mapStateToDriverAppProps = (state) => {
  return {
    drivers: state.drivers.all,
    auth: state.drivers.auth,
    currentDriver: state.drivers.currentDriver,
    modal: state.modal
  }
} 

const mapDispatchToDriverAppProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

 DriverApp = connect(mapStateToDriverAppProps, mapDispatchToDriverAppProps)(DriverApp);

export { DriverApp }
