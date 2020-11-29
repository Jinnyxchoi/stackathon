import axios from 'axios'

const GET_IMAGES = 'GET_IMAGES'

export const setImages = obj => {
  return {
    type: GET_IMAGES,
    images: obj
  }
}
const initialState = {
  images: []
}
export const fetchImages = department => {
  return async dispatch => {
    try {
      let id //hardcoding for nao.
      switch (department) {
        case 'Drawings and Prints':
          id = 9
          break
        case 'Asian Art':
          id = 6
          break
        case 'European Paintings':
          id = 11
          break
        default:
          id = 1
      }
      const {data} = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${id}&q=cat`
      )
      let objectIds = data.objectIDs //this is an array of objectIds
      objectIds = objectIds.slice(0, 20)
      const imagesArr = []
      for (const objectId of objectIds) {
        const res = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
        ) //fetches each object
        const newObj = {
          objectID: res.data.objectID,
          title: res.data.title,
          artistDisplayName: res.data.artistDisplayName,
          primaryImage: res.data.primaryImageSmall
        }
        imagesArr.push(newObj)
      }
      dispatch(setImages(imagesArr))
    } catch (error) {
      console.log('there was an error in fetchImages', error)
    }
  }
}

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return action.images
    default:
      return state
  }
}
