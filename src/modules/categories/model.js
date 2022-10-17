import { fetch, fetchAll } from '../../lib/postgres.js'
import { GETCATEGORIES, POSTCATEGORY, PUTCATEGORY,DELETECATEGORY } from './query.js'


const GET = async ({categoryId})=> {
  try {
    const categories =  await fetchAll(GETCATEGORIES, [categoryId]);
    return categories.map((category)=>{
      category.subcategories = category.subcategories[0] == null ? [] : category.subcategories;
      category.subcategories.map(subcategory=>{
        delete subcategory.category_id
        return subcategory
      })
      return category
    })
  } catch (error) {
    console.error(error);
  }
}


const POST = async ({categoryName})=> {
  try {
      const category =  await fetch(POSTCATEGORY, [categoryName]);
      console.log(category);
      return category
  } catch (error) {
    console.error(error);
  }
}


const PUT = async ({categoryName}, {categoryId})=> {
  try {
    return await fetch(PUTCATEGORY, [categoryId, categoryName]);
  } catch (error) {
    console.error(error);
  }
}


const DELETE = async ({categoryId})=> {
  try {
    return await fetch(DELETECATEGORY, [categoryId]);
  } catch (error) {
    console.error(error);
  }
}

export default {
  GET, POST, PUT, DELETE
}