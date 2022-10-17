import model from './model.js';
import jwt from '../../lib/jwt.js'
import { AuthorizationError, InternalServerError } from '../../lib/errors.js';

const LOGIN = async (req, res, next) => {
  try {
    const admin = await model.LOGIN(req.body)
    if (admin) {
      res.status(200).send({
        statusCode: 200,
        message: 'ok',
        token: jwt.sign({adminId: admin.admin_id})
      })
    }else{
      return next(new AuthorizationError(401, 'Invalid username or password'));
    }
  } catch (error) {
    return next(new InternalServerError(500, error.message))
  }
}

export default {
  LOGIN
}