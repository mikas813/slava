import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  image: {
    type: 'string',
    required: true,
  },
  keyword: {
    type: 'string',
    required: true,
  },
  location: {
    type: 'string',
    required: true,
  },
  camera: {
    type: 'string',
    required: true,
  },
  lens: {
    type: 'string',
    required: true,
  },
  zoom: {
    type: 'string',
    required: true,
  },
  aperture: {
    type: 'string',
    required: true,
  },
  shutter: {
    type: 'string',
    required: true,
  },
  iso: {
    type: 'string',
    required: true,
  },
})

const imageModel = mongoose.model('Image', imageSchema)

export default imageModel