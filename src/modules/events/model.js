import { fetch, fetchAll, fetchEvent } from '../../lib/postgres.js'
import { GETEVENTS, POSTEVENT, POSTPOST, POSTORGANIZER, PUTEVENT, REJECTEVENT, GETEVENTSBYSTATUS } from './query.js'


const GET = async ({eventId=0}, {categoryId=0, subcategoryId=0, date='', eventType='', organizerId=0})=> {
  try {
    return await fetchAll(GETEVENTS, [eventId, categoryId, subcategoryId, date, eventType, organizerId]);
  } catch (error) {
    console.error(error);
  }
}


const GETBYSTATUS = async ({status},{categoryId=0, subcategoryId=0, date='', eventType='', organizerId=0})=> {
  try {
    return await fetchAll(GETEVENTSBYSTATUS, [status, categoryId, subcategoryId, date, eventType, organizerId]);
  } catch (error) {
    console.error(error);
  }
}





const POST = async ({date, time, categoryId, subcategoryId, eventType, eventLink, organizerType, legalName=null, fullname, proffesion, contact, extraContact, title, description, body}, {filename})=> {
  try {
    const event = await fetchEvent([
      [POSTEVENT, [date, time, categoryId, subcategoryId, eventType, eventLink]],
      [POSTORGANIZER, [organizerType, legalName, fullname, proffesion, contact, extraContact]], 
      [POSTPOST, [title, description, body, filename]]
    ]);
    return event
  } catch (error) {
      console.error(error);
  }
}


const PUT = async ({eventId})=> {
  try {
    return await fetch(PUTEVENT, [eventId]);
  } catch (error) {
    console.error(error);
  }
}


const DELETE = async ({eventId})=> {
  try {
    return await fetch(REJECTEVENT, [eventId]);
  } catch (error) {
    console.error(error);
  }
}

export default {
  GET, POST, PUT, GETBYSTATUS, DELETE
}