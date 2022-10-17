import { fetch, fetchAll } from '../../lib/postgres.js'
import { GETSUBCATEGORIES, POSTSUBCATEGORY, PUTSUBCATEGORY,DELETESUBCATEGORY } from './query.js'


const GET = async ({subcategoryId}, {categoryId=0})=> {
  try {
    return await fetchAll(GETSUBCATEGORIES, [subcategoryId, categoryId]);
  } catch (error) {
    console.error(error);
  }
}


const POST = async ({subcategoryName, categoryId})=> {
  try {
    return await fetch(POSTSUBCATEGORY, [subcategoryName, categoryId]);
  } catch (error) {
    console.error(error);
  }
}


const PUT = async ({subcategoryName}, {subcategoryId})=> {
  try {
    return await fetch(PUTSUBCATEGORY, [subcategoryId, subcategoryName]);
  } catch (error) {
    console.error(error);
  }
}


const DELETE = async ({subcategoryId})=> {
  try {
    return await fetch(DELETESUBCATEGORY, [subcategoryId]);
  } catch (error) {
    console.error(error);
  }
}

export default {
  GET, POST, PUT, DELETE
}