import pg from 'pg';
import { pgconfig } from '../config.js';

const pool = new pg.Pool(pgconfig);

async function fetchAll(SQL, params=[]){
  const client = await pool.connect();
  try {
    const {rows} = await client.query(SQL, params);
    return rows
  } catch (error) {
    console.log(error);
  }finally{
    client.release();
  }
}

async function fetch(SQL, params=[]){
  const client = await pool.connect();
  try {
      const {rows: [row]} = await client.query(SQL, params);
      return row
  } catch (error) {
    console.log(error);
  }finally{
    client.release();
  }
}



async function fetchEvent(SQL){
  const client = await pool.connect();
  try {
    return SQL.map(async(query)=>{
      const {rows: [row]} = await client.query(query[0], query[1]);
      return row
    })
  } catch (error) {
    console.log(error);
  }finally{
    client.release();
  }
}

export {
  fetch, fetchAll, fetchEvent
}