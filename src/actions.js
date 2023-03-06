// actions.js
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';

export function addUser(user) {
  return { type: ADD_USER, user };
}

export function removeUser(userId) {
  return { type: REMOVE_USER, userId };
}

export function setCurrentUser(user) {
  return { type: SET_CURRENT_USER, user };
}

export function clearCurrentUser() {
  return { type: CLEAR_CURRENT_USER };
}
