const GETCATEGORIES = `
  select
    c.*,
    json_agg(s.*) as subcategories
  from categories as c
  left join subcategories as s on c.category_id = s.category_id and s.status = 'active'
  where c.status = 'active' and case 
                                    when $1>0 then c.category_id = $1 else true
                                end
  group by c.category_id
  order by c.category_id asc
`



const POSTCATEGORY = `
  insert into categories (category_name) values ($1) returning category_id, category_name
`
const PUTCATEGORY =`
  update categories
    set category_name = $2
  where category_id = $1 and status = 'active' 
  returning category_id, category_name
`

const DELETECATEGORY = `
  update categories
    set status = 'deleted'
  where category_id = $1 and status = 'active' 
  returning category_id, category_name
`
export {
GETCATEGORIES, POSTCATEGORY, PUTCATEGORY, DELETECATEGORY
}