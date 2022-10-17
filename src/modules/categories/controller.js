import model from './model.js';
import jwt from '../../lib/jwt.js'
import { InternalServerError } from '../../lib/errors.js';

const GET = async (req, res, next) => {
  try {
    const categories = await model.GET(req.params)
    return res.status(200).json({
      status: 200,
      message: 'ok',
      data: categories
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}

const POST = async (req, res, next) => {
  try {
    const category = await model.POST(req.body)
    return res.status(201).json({
      status: 201,
      message: 'new category created',
      data: category
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}


const PUT = async (req, res, next) => {
  try {
    const category = await model.PUT(req.body, req.params)
    if(!category) {
      return res.status(400).json({
        status: 400,
        message: 'category not found',
      })
    }
    return res.status(201).json({
      status: 201,
      message: 'category updated',
      data: category
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}


const DELETE = async (req, res, next) => {
  try {
    const category = await model.DELETE(req.params)
    if(!category) {
      return res.status(400).json({
        status: 400,
        message: 'category not found',
      })
    }
    return res.status(201).json({
      status: 201,
      message: 'category deleted',
      data: category
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}



export default {
  GET, POST, PUT, DELETE
}