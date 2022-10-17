



const POSTVIEW = `
  insert into views (event_id, view_ip, view_agent) values ($1, $2, $3) returning *
`

export {
  POSTVIEW
}