import apiObject from '../apiUtils'

export const getAllListHotel = async () => {
  const {api} = apiObject
  return api.get('hotel/list')
}

export const getSearchHotel = async (param) => {
  const {api} = apiObject
  return api.get('hotel/' + param)
}
