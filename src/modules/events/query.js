const GETEVENTS = `
  select 
    e.event_id,
    to_char(e.event_day, 'dd/MM/yyyy'),
    e.event_time,
    e.event_type,
    e.event_link,
    e.category_id,
    e.sub_category_id,
    get_view_count(e.event_id) as views,
    json_agg(
      o.*
    ) as organizer,
    json_agg(
      ep.*
    ) as post
  from events as e
  left join organizers as o on e.organizer_id = o.organizer_id
  left join event_posts as ep on e.post_id = ep.post_id
  where e.status = 'active' and case
                                      when $1 > 0 then e.event_id = $1 else true 
                                  end
                              and case
                                      when $2 > 0 then e.category_id = $2 else true
                                  end
                              and case
                                      when $3 > 0 then e.sub_category_id = $3 else true
                                  end
                              and case
                                      when length($4) > 1 then to_char(e.event_day, 'dd/MM/yyyy') = $4 else true
                                  end
                              and case
                                      when length($5) > 1 then e.event_type::varchar = $5 else true
                                  end
                              and case
                                      when $6 > 0 then o.organizer_id = $6 else true
                                  end
  group by e.event_id, e.post_id, e.organizer_id
  order by e.event_id asc
`



const GETEVENTSBYSTATUS = `
  select 
    e.event_id,
    to_char(e.event_day, 'dd/MM/yyyy'),
    e.event_time,
    e.event_type,
    e.event_link,
    e.category_id,
    e.sub_category_id,
    get_view_count(e.event_id) as views,
    json_agg(
      o.*
    ) as organizer,
    json_agg(
      ep.*
    ) as post
  from events as e
  left join organizers as o on e.organizer_id = o.organizer_id
  left join event_posts as ep on e.post_id = ep.post_id
  where e.status = $1
    and case
            when $2 > 0 then e.category_id = $2 else true
        end
    and case
            when $3 > 0 then e.sub_category_id = $3 else true
        end
    and case
            when length($4) > 1 then to_char(e.event_day, 'dd/MM/yyyy') = $4 else true
        end
    and case
            when length($5) > 1 then e.event_type::varchar = $5 else true
        end
    and case
            when $6 > 0 then o.organizer_id = $6 else true
        end
  group by e.event_id, e.post_id, e.organizer_id
  order by e.event_id asc
`



const POSTPOST = `
  insert into event_posts (title, descriptions, body, post_img)
  values
  ($1, $2, $3, $4)
`


const POSTORGANIZER = `
  insert into organizers (legal_name, organizer_fullname, profession, contact, contact_extra, organizer_type)
  values
  ($2, $3, $4, $5, $6, $1)
`

const POSTEVENT = `
  insert into events 
  (event_day, event_time, category_id, sub_category_id, event_type, event_link, organizer_id, post_id) 
  values 
  ($1, $2, $3, $4, $5, $6, get_organizer_maxId() + 1,  get_post_maxId() + 1) returning *
`


const PUTEVENT =`
  update events
    set status = 'active'
  where event_id = $1 and status = 'pending' returning *
  `

const REJECTEVENT = `
  update events
  set status = 'rejected'
  where event_id = $1 and status = 'pending' returning *
`


export {
GETEVENTS, POSTEVENT, POSTPOST, POSTORGANIZER, PUTEVENT, REJECTEVENT, GETEVENTSBYSTATUS
}