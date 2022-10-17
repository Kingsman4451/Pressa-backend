import { loginSchema, categorySchema, subcategorySchema, eventSchema, eventStatusSchema } from "../lib/validation.js"
import { ValidationError } from "../lib/errors.js"


export default (req, res, next) =>{
  try {
    if(req.method == 'POST' && req.url == '/login'){
      let {error} = loginSchema.validate(req.body)
      if(error) throw error
    }

    if(req.method == 'POST' && req.url == '/admin/categories'){
      let {error} = categorySchema.validate(req.body)
      if(error) throw error
    }

    if(req.method == 'POST' && req.url == '/admin/subcategories'){
      let {error} = subcategorySchema.validate(req.body)
      if(error) throw error
    }


    if(req.method == 'POST' && req.url == '/events'){
      let {error} = eventSchema.validate(req.body)
      if(error) throw error
    }

    if(req.method == 'GET' && req.url == `/admin/events/${req.params.status}`){
      let {error} = eventStatusSchema.validate({params: req.params})
      if(error) throw error
    }

    return next()
  } catch (error) {
    return next(new ValidationError(401, error.message))
  }
}