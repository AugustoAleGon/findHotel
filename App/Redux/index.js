import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { resettableReducer } from 'reduxsauce'
import {reducer as nav} from './NavigationRedux'
import {reducer as hotel} from './Reducers/hotel'
import { persistReducer } from 'redux-persist'
import AsyncStorage from 'redux-persist/lib/storage'

export default () => {
  const rootConfig = {
    key: 'root',
    storage: AsyncStorage
    // blacklist: [], reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
  }
  const hotelConfig = {
    key: 'hotel',
    storage: AsyncStorage
  }
  const resettable = resettableReducer('LOG_OUT')
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = persistReducer(
    rootConfig,
    combineReducers({
      nav: nav,
    // All my reducers are here:
      hotel: persistReducer(hotelConfig, resettable(hotel))
    })
  )

  const store = configureStore(rootReducer, rootSaga)

  return store
}
