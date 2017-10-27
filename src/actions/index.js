// this is the action creator. React Redux Component
import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';

//this function takes in info.  In this case is the text
export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

//this function takes in info.  In this case is the id
export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

//this function takes in info.  In this case is the id
export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS,
  }
}
