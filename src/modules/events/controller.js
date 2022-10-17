import model from './model.js';
import { InternalServerError } from '../../lib/errors.js';
import upload from '../../lib/multer.js';



const postImg = upload.single('image')

const GET = async (req, res, next) => {
  try {
    const events = await model.GET(req.params, req.query)
    return res.status(200).json({
      status: 200,
      message: 'ok',
      data: events
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}


const BYSTATUS = async (req, res, next) => {
  try {
    const events = await model.GETBYSTATUS(req.params, req.query)
    return res.status(200).json({
      status: 200,
      message: 'events by status',
      data: events
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}

const POST = async (req, res, next) => {
  try {
    const event = await model.POST(req.body, req.file)

    return res.status(201).json({
      status: 201,
      message: 'new event created'
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}


const PUT = async (req, res, next) => {
  try {
    const event = await model.PUT(req.params)
    if(!event) {
      return res.status(400).json({
        status: 400,
        message: 'event not found',
      })
    }
    return res.status(201).json({
      status: 201,
      message: 'event status updated',
      data: event
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}


const DELETE = async (req, res, next) => {
  try {
    const event = await model.DELETE(req.params)
    if(!event) {
      return res.status(400).json({
        status: 400,
        message: 'event not found',
      })
    }
    return res.status(201).json({
      status: 201,
      message: 'event rejected',
      data: event
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}



export default {
  GET, POST, PUT, DELETE, postImg, BYSTATUS
}