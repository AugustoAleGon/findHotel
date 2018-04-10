import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getAllListHotel: null,
  getSearchHotel: ['payload'],
  fetchedAllListHotel: ['response'],
  fetchedHotel: ['response'],
  requestFailed: ['error']
})

export const dogTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  hotelList: [],
  hotelItem: {}
})

/* ------------- Reducers ------------- */
const fetchedAll = (state, action) => ({
  ...state,
  hotelList: action.response
})
const fetchedHotel = (state, action) => ({
  ...state,
  hotelItem: action.response
})

const failedRequest = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_FAILED]: failedRequest,
  [Types.FETCHED_ALL_LIST_HOTEL]: fetchedAll,
  [Types.FETCHED_HOTEL]: fetchedHotel
})
