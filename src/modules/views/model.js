import { fetch, fetchAll } from '../../lib/postgres.js'
import { POSTVIEW } from './query.js'




const POST = async ({eventId}, ip, agent)=> {
  try {
    return await fetch(POSTVIEW, [eventId, ip, agent])
    
    } catch (error) {
    console.error(error);
  } 
}



export default {
  POST
}