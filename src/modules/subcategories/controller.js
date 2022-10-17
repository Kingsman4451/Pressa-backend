import model from './model.js';
import jwt from '../../lib/jwt.js'
import { InternalServerError } from '../../lib/errors.js';

const GET = async (req, res, next) => {
  try {
    const subcategories = await model.GET(req.params, req.query)
    return res.status(200).json({
      status: 200,
      message: 'ok',
      data: subcategories
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}

const POST = async (req, res, next) => {
  try {
    const subcategory = await model.POST(req.body)
    return res.status(201).json({
      status: 201,
      message: 'new subcategory created',
      data: subcategory
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}


const PUT = async (req, res, next) => {
  try {
    const subcategory = await model.PUT(req.body, req.params)
    if(!subcategory) {
      return res.status(400).json({
        status: 400,
        message: 'subcategory not found',
      })
    }
    return res.status(201).json({
      status: 201,
      message: 'subcategory updated',
      data: subcategory
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}


const DELETE = async (req, res, next) => {
  try {
    const subcategory = await model.DELETE(req.params)
    if(!subcategory) {
      return res.status(400).json({
        status: 400,
        message: 'subcategory not found',
      })
    }
    return res.status(201).json({
      status: 201,
      message: 'subcategory deleted',
      data: subcategory
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}



export default {
  GET, POST, PUT, DELETE
}