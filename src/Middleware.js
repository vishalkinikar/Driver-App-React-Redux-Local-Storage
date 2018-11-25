import { constants } from './Constants';

const thunkMiddleware = ({ dispatch, getState }) => {
  return next => action =>
    typeof action === 'function' ?
      action(dispatch, getState) :
      next(action);
}
  
const persistData = store => next => action => {
  
  let localState = localStorage.getItem('driver-list');
  
  if (localState && typeof JSON.parse(localState) === 'object') {
    localState = JSON.parse(localState);
  }
  else {
    let all = action.payload;
    let driverState = { all: all, auth: false};
    localState = Object.assign({}, {drivers: driverState});
  }
  
  let result;
  let newAction;
  
  switch(action.type) {
    case constants.GET_ALL_DRIVERS:
      newAction = {type: action.type};
      newAction.payload = localState;
      localStorage.setItem('driver-list', JSON.stringify(localState));
      result = next(newAction);
      return result;
    case constants.IS_AUTH:
      return next({
        type: action.type,
        payload: localState.drivers.auth
      })
    case constants.SAVE_NEW_DRIVER:
      localState.drivers.all.push(action.payload);
      localStorage.setItem('driver-list', JSON.stringify(localState));
      /* falls through */
    case constants.DELETE_DRIVER:
      localState.drivers.all = localState.drivers.all.filter((driver, index) => {
        return (index + 1) !== action.payload;
      });
      localStorage.setItem('driver-list', JSON.stringify(localState));
      /* falls through */
    case constants.UPDATE_DRIVER:
      localState.drivers.all = localState.drivers.all.map((driver, index) => {
        if (index + 1 === action.payload.id) {
          return action.payload;
        }
        return driver;
      });      
      localStorage.setItem('driver-list', JSON.stringify(localState));
      /* falls through */
    case constants.AUTH:
      localState.drivers.auth = action.payload;  
      localStorage.setItem('driver-list', JSON.stringify(localState));
      /* falls through */
    default:
      result = next(action);
      return result;
  }
}
  
export { thunkMiddleware, persistData }