import Axios from 'axios'
import {
  IMAGE_SAVE_REQUEST,
  IMAGE_SAVE_SUCCESS,
  IMAGE_SAVE_FAIL,
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL, IMAGE_DELETE_REQUEST, IMAGE_DELETE_SUCCESS, IMAGE_DELETE_FAIL
} from '../constans/userConstans'

const listImages = () => async (dispatch) => {
  try {
    dispatch( {type: IMAGE_LIST_REQUEST} )
    const {data} = await Axios.get( '/api/images' )
    dispatch( {type: IMAGE_LIST_SUCCESS, payload: data} )

  } catch (error) {
    dispatch( {type: IMAGE_LIST_FAIL, payload: error.message} )

  }
}

const saveImage = (image) => async (dispatch) => {
  try {
    dispatch( {type: IMAGE_SAVE_REQUEST, payload: image} )

    if (!image._id) {
      const {data} = await Axios.post( '/api/images', image )
      dispatch( {type: IMAGE_SAVE_SUCCESS, payload: data} )
    }
    else {
      const {data} = await Axios.put( '/api/images/' + image._id, image )
      dispatch( {type: IMAGE_SAVE_SUCCESS, payload: data} )
    }

  } catch (error) {
    dispatch( {type: IMAGE_SAVE_FAIL, payload: error.message} )
  }
}

const deleteImage = (imageId) => async (dispatch) => {
  try {
    dispatch( {type: IMAGE_DELETE_REQUEST, payload: imageId} )

      const {data} = await Axios.delete( '/api/images/' + imageId)
      dispatch( {type: IMAGE_DELETE_SUCCESS, payload: data} )


  } catch (error) {
    dispatch( {type: IMAGE_DELETE_FAIL, payload: error.message} )
  }
}

export {
  saveImage,
  listImages,
  deleteImage
}