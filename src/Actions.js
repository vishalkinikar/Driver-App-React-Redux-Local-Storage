import { constants } from './Constants';

// let initialData = [
//   {
//     fname: 'Vishal', 
//     lname: 'Kinikar',
//     dob: '2018-11-14T17:46:58.000Z',
//     licno: 'MH48/1988/450X1',
//     email: 'test@yahoo.co.in',
//     phone: '980000000',
//     licexpdate: '2018-11-25T17:46:58.494Z
//   }
// ];

let initialData = [];
  
  
  
const Actions = {

  auth: (data) => {
    return {
      type: constants.AUTH,
      payload: data
    }
  },

  isAuth: () => {
    return {
      type: constants.IS_AUTH
    }
  },

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