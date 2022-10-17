const GETSUBCATEGORIES = `
  select
    s.*
  from subcategories as s
  where s.status = 'active' and case 
                                    when $1>0 then s.sub_category_id = $1 else true
                                end
                            and case
                                    when $2>0 then s.category_id = $2 else true
                                end
  order by s.sub_category_id asc
`



const POSTSUBCATEGORY = `
  insert into subcategories (sub_category_name, category_id) values ($1, $2) returning sub_category_id, sub_category_name, category_id
`
const PUTSUBCATEGORY =`
  update subcategories
    set sub_category_name = $2
  where sub_category_id = $1 and status = 'active' 
  returning sub_category_id, sub_category_name, category_id
  `

const DELETESUBCATEGORY = `
  update subcategories
    set status = 'deleted'
  where sub_category_id = $1 and status = 'active' 
  returning sub_category_id, sub_category_name, category_id
`
export {
GETSUBCATEGORIES, POSTSUBCATEGORY, PUTSUBCATEGORY, DELETESUBCATEGORY
}