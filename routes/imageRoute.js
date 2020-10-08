import express from 'express'
import Image from '../models/imageModel.js'

const router = express.Router()

router.get( '/', async (req, res) => {
  const images = await Image.find( {} )
  res.send( images )
} )

router.post( '/', async (req, res) => {
  const image = new Image( {
    image: req.body.image,
    keyword: req.body.keyword,
    location: req.body.location,
    camera: req.body.camera,
    lens: req.body.lens,
    zoom: req.body.zoom,
    aperture: req.body.aperture,
    shutter: req.body.shutter,
    iso: req.body.iso
  } )
  const newImage = await image.save()

  if (newImage) {
    return res.status( 201 ).send( {message: 'New image added', data: newImage} )
  }
  return res.status( 500 ).send( {message: 'Error in adding a new image!'} )
} )

router.put( '/:id', async (req, res) => {
  const imageId = req.params.id
  const image = await Image.findOne( {_id: imageId} )

  if (image) {
    image.image = req.body.image,
      image.keyword = req.body.keyword,
      image.location = req.body.location,
      image.camera = req.body.camera,
      image.lens = req.body.lens,
      image.zoom = req.body.zoom,
      image.aperture = req.body.aperture,
      image.shutter = req.body.shutter,
      image.iso = req.body.iso

    const updatedImage = await image.save()

    if (updatedImage) {
      return res.status( 200 ).send( {message: 'Image updated', data: updatedImage} )
    }
  }
  return res.status( 500 ).send( {message: 'Error in updating an image!'} )
} )

router.delete( '/:id', async (req, res) => {
  const deletedImage = await Image.findById( req.params.id )
  if (deletedImage) {
    await deletedImage.remove()
    res.send( {message: 'Image deleted'} )
  } else {
    res.send( 'Error in deletion!' )
  }
} )

export default router