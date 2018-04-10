import { call, put } from 'redux-saga/effects'
import {
  getAllListBreed as getAllListBreedRequest,
  getRandomPic as getRandomPicRequest
} from '../Services'
import hotelActions from '../Redux/Reducers/hotel'

export function * getAllListHotel (action) {
  const { fetchedAllListBreed, requestFailed } = hotelActions
  const responseList = yield call(getAllListBreedRequest, {})
  if (responseList.ok) {
    const { data } = responseList
    yield put(fetchedAllListBreed({hotelList: data.message}))
  } else {
    yield put(requestFailed(responseList.error))
  }
}

export function * getRandomPic (action) {
  const { fetchedRandomPic, requestFailed } = hotelActions
  const { payload } = action
  let responsePic = yield call(getRandomPicRequest, payload)
  if (responsePic.ok) {
    const { data } = responsePic
    yield put(fetchedRandomPic({randomPic: data.message}))
  } else {
    yield put(requestFailed(responsePic.error))
  }
}
