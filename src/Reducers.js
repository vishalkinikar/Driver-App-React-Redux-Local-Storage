import { constants } from './Constants';

const getNextId = (lastId) => {
  return lastId + 1;
}

const INITIAL_DRIVER_STATE = {
  lastId: 0,
  all: [],
  currentDriver: {id: null}
}

const DriverReducer = function (state = INITIAL_DRIVER_STATE, action) {
  switch(action.type) {
    case constants.GET_ALL_DRIVERS:
      let lastId = state.lastId;
      let drivers = action.payload.drivers.all.map(driver => {
        lastId = getNextId(lastId);
        driver.id = lastId;
        return driver;
      }); 
      return Object.assign({}, state, {lastId: lastId}, {all: drivers})
    case constants.IS_AUTH:
      return Object.assign({}, state, {auth: action.payload});
    case constants.SET_CURRENT_DRIVER:
      let newCurrent = state.currentDriver.id === action.payload.id ? INITIAL_DRIVER_STATE.currentDriver : action.payload;
      return Object.assign({}, state, {currentDriver: newCurrent});
    case constants.UPDATE_DRIVER:
      return Object.assign({}, state, {currentDriver: action.payload}, {all: state.all.map(driver => {
          if (driver.id === action.payload.id) {
            return action.payload;
          }
          return driver
        })}
      );
    case constants.SAVE_NEW_DRIVER:
      let newDriver = action.payload;
      newDriver.id = getNextId(state.lastId);
      let allDrivers = state.all;
      allDrivers.push(newDriver);
      return Object.assign({}, state, {all: allDrivers});
    case constants.DELETE_DRIVER:
      return Object.assign({}, state, {all: state.all.filter(driver => {
          return driver.id !== action.payload; 
        })
      });
    case constants.AUTH:
      return Object.assign({}, state, {auth: action.payload});
    default:
      return state;
  }
}

const INITIAL_MODAL_STATE = {
  isOpen: false,
  newEntry: false
}

const ModalReducer = (state = INITIAL_MODAL_STATE, action) => {
  switch(action.type) {
    case constants.TOGGLE_MODAL:
      return Object.assign({}, state, {isOpen: !state.isOpen});
    case constants.EDIT_DRIVER:
      return Object.assign({}, state, {newEntry: false});
    case constants.CREATE_DRIVER:
      return Object.assign({}, state, {newEntry: true});
    default:
      return state;
  }
}

export { DriverReducer, ModalReducer }