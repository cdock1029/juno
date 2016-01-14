import { combineReducers } from 'redux'

import {
  REQUEST_PROPERTIES,
  RECEIVE_PROPERTIES,
  UNIT_SAVE,
  UNIT_SAVE_SUCCESS,
  UNIT_DELETE,
  UNIT_DELETE_SUCCESS
} from '../actions'

//reducers
export function properties(state = {
  isFetching: false,
  properties: []
}, action) {
  switch (action.type) {
    case REQUEST_PROPERTIES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PROPERTIES:
      return {
        ...state,
        isFetching: false,
        properties: action.properties,
        lastUpdated: action.receivedAt
      }
    case UNIT_SAVE:
      return {
        ...state,
        isFetching: true
      }
    case UNIT_SAVE_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    case UNIT_DELETE:
      return {
        ...state,
        isFetching: true
      }
    case UNIT_DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
