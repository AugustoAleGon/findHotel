/*
    Index of Saga
*/
import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { hotelTypes } from '../Redux/Reducers/hotel'


/* ------------- Sagas ------------- */

import {
  getAllListHotel,
  getSearchHotel
} from './hotelSaga'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function * root () {
  yield [
    // some sagas only receive an action
    // Hotel sagas
    takeLatest(hotelTypes.GET_ALL_LIST_HOTEL, getAllListHotel),
    takeLatest(hotelTypes.GET_SEARCH_HOTEL, getSearchHotel)
  ]
}
