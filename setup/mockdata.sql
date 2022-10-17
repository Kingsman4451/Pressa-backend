insert into admins (username, password) values ('salim', crypt('123456789', gen_salt('bf'))), ('javohir', crypt('qwerty123', gen_salt('bf')));


insert into categories (category_name) values ('Information Technologies'), ('Design'), ('Bussiness'), ('Education');


insert into subcategories (sub_category_name, category_id) values ('Web dasturlash', 1), ('Mobile dasturlash', 1), ('UI/UX dizayn', 2), ('Grafik dizayn', 2), ('Menejment', 3), ('Kredit va audit', 3), ('Matematika', 4), ('Fizika', 4);




insert into organizers (organizer_fullname, profession, contact, contact_extra, organizer_type) values ('Alisher Isaev', 'Tadbirkor', '998903451245', '998945557585', 'physical'), 
('Sadoqat Kaziyeva', 'UI/UX designer', '998910097609', '998904567814', 'physical');

insert into organizers (organizer_fullname, profession, contact, contact_extra, organizer_type, legal_name) values ('MuhammadAli Eshonqulov', 'Biznesmen', '998971234567', '999338915634', 'legal', 'Biznes school'), 
('Jahongir G''lomov', 'Grafik designer', '998910097609', '998904567814', 'legal', 'Najot ta''lim');


insert into event_posts (title, descriptions, body, post_img) values ('Alisher Isaevdan biznes va IT bo''yicha master klass', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.
', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.

Kuni kecha bo''lib o''tgan uchrashuvda to''rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to''g''risida e''lonli ma''lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.

Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o''rin egalari qimmatbaho sovg''alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.', 'https://s3-alpha-sig.figma.com/img/372b/e1ce/fa68fc76741d2c97416dd18326a974a5?Expires=1666569600&Signature=WokZvNm8uEKU4xw3j~mAB51jFdYD4MvOIKghmiUnoglQu11kwGAdTuAVeSGFK20DGkSYMWmCGMM6QLn~XeRoaez7iUHz2RiuiB-Qc~jzCZNYhWvFBhAagkdB7ui4mb0CmWwvEnQW1zyIg8GpctH~qjziuHc8PoF1F2Zx4VCJcpMGgMPQw3ixqnt8MPKv1Oxg~cq3NsuBKJaOx84Qz7hxNu-4bcAT8x3Mqs9vkG5TX-BUnn2Z~Ippa2QfJlyrRF9I38oXFLWlXquCGmd5pSnzdSH~62HLHbYqjknI5ou-oDA3A~gzfHMJ0Znj0RKsf7yV3nQNS8DhFOogX~2~fulzdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'),
('Sadoqat Kaziyevadan UI/UX bo''yicha master klass', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.
', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.

Kuni kecha bo''lib o''tgan uchrashuvda to''rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to''g''risida e''lonli ma''lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.

Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o''rin egalari qimmatbaho sovg''alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.', 'https://s3-alpha-sig.figma.com/img/9e8e/a97a/028d8c780bfacf1cfb5fca1b874cded2?Expires=1666569600&Signature=HKJ84TQps9ANTypLa6bnWo3zUNLjthlbmdBR3HrBXybV3AcXw~j153ym~fMvSsiZlfVlDf2BVlzDIgt0Ho1Dw2OttbdUzjQZfUWHpLsXXjbzVVNam-gnox3hDwJv5tFP9KeCOAid3-IiC90YbiVREvpiXtqATaa0X4kDWY5uYkJjdkOqXIWsDqk8W6VJ-fSVhJII~Ssyc~RY7lYRIvwXrDs~brv-UI2g6QT8ZW8vD5aoLPjmfqdPmSEwcTF29U0-bNa8J8TOKpKl4QzwLtQpmbRE4-Z0M-d-JaHVUr5h7cVk~QTc1tQz5VF6ZwjmKHO~7N~tpMrcb-u0r-SpCDTx9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'),
('Yuksalish loyihasi AQSHda ovozli suhbat', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.
', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.

Kuni kecha bo''lib o''tgan uchrashuvda to''rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to''g''risida e''lonli ma''lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.

Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o''rin egalari qimmatbaho sovg''alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.', 'https://s3-alpha-sig.figma.com/img/0453/16b7/a792c07263af12a93e6a515560be941f?Expires=1666569600&Signature=TRWRTW~OQeIihF3Qsiu7~kD-jj4ViNFDDd9wX956Nh5vSKG6-yrjLvlke4ctrNg7-zEjK1rVIEyuDyG5qcaFbBgi~~HucBCtSs6~CeXahMnEAPFGY-gB0kTw1tlJBopMlbIfXciqh3lmZ~J4P0S~CH6nhncpvYKV9ieDJMnzR~XcUeE2qhxcdn8c4Qt8DjjGT8QGHAIiUoxD9wbBi~Idsy7rZsxmROLYc6G3sWlJPko~bYbR3W9fgsNrPdF9pncYJwuq~vphRoa-~N0TWrwsXfB1KJgGDgV8qIslKZKzzb~suuY0K8pglURgvJPXu8Zz4M9P~CVLAdZhq8aBUrDJzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'),
('Jahongir G''ulamovdan dizayn sohasi bo''yicha master klass', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.
', 'Najot Ta''lim jamoasi o''z o''quvchilari uchun manfaatli bo''lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya''ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to''plashga qaror qildik.

Kuni kecha bo''lib o''tgan uchrashuvda to''rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to''g''risida e''lonli ma''lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.

Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o''rin egalari qimmatbaho sovg''alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.', 'https://s3-alpha-sig.figma.com/img/6b5a/892f/0a27407ff7160f9f64b75ff794680bf5?Expires=1666569600&Signature=Qyir2EcaZB5Ch97jIally8cwKUQv6dpaQJGMhT81FwyLRaSyIiINARhnm7ysnbo6Wjl-ENmZNizv3QbGO8rF-Ustxc63Jyz5G7s9aJch88zYGl0vKLLjQdI8mtKTGGu45rzN-iKDrLQDOv4rw6oGjv8L4BhVTgrO2fUQ8dFnvoa6Cy39of1UvJPBb~wZ7ggh2v14YS4F9Vkxj1F8Kn11VZvFr5urazHNuXSG-izDUjQ1xS2a5rpHBgykPj94cyznBlMZHg~Zs4SWdZ960awqnIUdg0yZ8q2YZ3wzkwkG8XKVMY8pF4hcOZubUS5Zi8wqNsi78G5-6f43OWJb6hmyYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');




insert into events (event_day, event_time, category_id, sub_category_id, event_type, event_link, organizer_id, post_id) values 
('2022-01-17', '15:00', 1, 1, 'online', 'https://www.youtube.com/liver24', 1, 1),
('2022-10-21', '15:00', 2, 3, 'offline', 'https://www.youtube.com/liver24', 2, 2),
('2022-01-17', '21:00', 3, 5, 'online', 'https://www.youtube.com/liver24', 3, 3),
('2022-01-17', '15:00', 2, 4, 'offline', 'https://www.youtube.com/liver24', 4, 4);


insert into events 
  (event_day, event_time, category_id, sub_category_id, event_type, event_link, organizer_id, post_id) 
  values 
  ('2022-10-21', '15:00', 2, 3, 'offline', 'youtube', get_organizer_maxId(),  get_post_maxId());