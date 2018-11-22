import { constants } from './Constants';

// let initialData = [
//   {
//     fname: 'Vishal', 
//     lname: 'Kinikar',
//     dob: '24/10/1980',
//     licno: 'MH48/214450',
//     email: 'vishalkonline@gmail.com',
//     phone: '9833866537',
//     licexpdate: '20/11/2020'
//   }
// ];

let initialData = [];
  
  
  
const Actions = {
  getAllDrivers: () => {
    return (dispatch) => {   
      dispatch(
        {
        type: constants.GET_ALL_DRIVERS,
        payload: initialData
      }
      ); 
    }
  },

  setCurrentDriver: (data) => {
    return {
      type: constants.SET_CURRENT_DRIVER,
      payload: data
    }
  },
  editDriver: () => {
    return {
      type: constants.EDIT_DRIVER
    }
  },
  
  updateDriver: (data) => {
    return {
      type: constants.UPDATE_DRIVER,
      payload: data
    }
  },
  
  createDriver: () => {
    return {
      type: constants.CREATE_DRIVER
    }
  },
  
  saveNewDriver: (data) => {
    return {
      type: constants.SAVE_NEW_DRIVER,
      payload: data
    }
  },
  
  deleteDriver: (driverId) => {
    return {
      type: constants.DELETE_DRIVER,
      payload: driverId
    }
  },
  
  toggleModal: () => {
    return {
      type: constants.TOGGLE_MODAL
    }
  }
}
  
  
  export { Actions };