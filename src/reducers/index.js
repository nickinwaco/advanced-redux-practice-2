import {combineReducers} from "redux";


function newComments(state = 0, action) {
  return state;
}

function newTasks(state = 0, action) {
  return state;
}

function tasks(state = [], action) {
  return state;
}

function tickets(state = [], action) {
  return state;
}

function newOrders(state=[], action) {
  return state;
}

function orders(state=[], action) {
  return state;
}

function messages(state=[], action){
  return state;
}


const rootReducer = combineReducers({
  newComments,
  newTasks,
  tasks,
  tickets,
  newOrders,
  orders,
  messages,
});

export default rootReducer;
