import model from './model.js';
import jwt from '../../lib/jwt.js'
import { InternalServerError } from '../../lib/errors.js';


const POST = async (req, res, next) => {
  try {
    const view = await model.POST(req.params, req.ip, req.headers['user-agent'])
    return res.status(201).json({
      status: 201,
      message: 'new view created',
      data: view
    })
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}




export default {
  POST
}