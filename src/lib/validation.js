import Joi from 'joi';


export const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})


export const categorySchema = Joi.object({
    categoryName: Joi.string().required()
})


export const subcategorySchema = Joi.object({
  subcategoryName: Joi.string().required(),
  categoryId: Joi.number().required()
})


export const eventSchema = Joi.object({
  date:Joi.date().greater('now').required(),
  time: Joi.string().max(5).required(),
  categoryId: Joi.number().required(),
  subcategoryId: Joi.number().required(),
  eventType: Joi.any().valid('online', 'offline').required(),
  eventLink: Joi.string(),
  organizerType:Joi.any().valid('legal', 'physical').required(),
  legalName: Joi.string(),
  fullname: Joi.string().max(64).required(),
  proffesion: Joi.string().required(),
  contact: Joi.string().pattern(new RegExp(/^998[389][0123456789][0-9]{7}$/)).required(),
  extraContact: Joi.string().pattern(new RegExp(/^998[389][0123456789][0-9]{7}$/)).required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  body: Joi.string().required(),
  imge: Joi.string().pattern(new RegExp(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i))
})


export const eventStatusSchema = Joi.object({
  params:{
    status: Joi.any().valid('active', 'pending', 'rejected').required(),
  }
})

