create database pressa;
\c pressa;


create extension pgcrypto;
create type event_type as enum ('online', 'offline');

create type organizer_type as enum ('legal', 'physical');

create table admins(
  admin_id serial primary key,
  username varchar(32) not null,
  password varchar(60) not null
);

drop table categries;
create table categories(
  category_id serial primary key,
  category_name varchar(32) not null,
  status varchar(20) default 'active',
  created_at timestamp default current_timestamp
);


create table subcategories(
  sub_category_id serial primary key,
  sub_category_name varchar(64) not null,
  category_id int references categories(category_id),
  status varchar(20) default 'active',
  created_at timestamp default current_timestamp
);

drop table organizers cascade;
create table organizers(
  organizer_id serial primary key,
  legal_name varchar(255) default NULL,
  organizer_fullname varchar(80) not null,
  profession varchar(64) not null,
  contact varchar(13) not null,
  contact_extra varchar(13) not null,
  organizer_type organizer_type not null
);


drop table event_posts;
create table event_posts(
  post_id serial primary key,
  title varchar(255) not null,
  descriptions text not null,
  body text not null,
  post_img text not null
);

drop table events;
create table events(
  event_id serial primary key,
  event_day date not null,
  event_time time not null,
  category_id int references categories(category_id),
  sub_category_id int references subcategories(sub_category_id),
  event_type event_type not null,
  event_link text default null,
  organizer_id int not null,
  post_id int not null,
  status varchar(20) default 'pending',
  created_at timestamp default current_timestamp
);

drop table views;
create table views(
  view_id serial primary key,
  view_ip text not null,
  view_agent text not null,
  event_id int references events(event_id)
);



drop function get_maxId;
create or replace function get_organizer_maxId() returns int language plpgsql as $$
  declare maxId int;
  begin
    select 
      organizer_id into maxId
    from organizers
    order by organizer_id desc
    limit 1;
    return maxId;
  end;
$$;



create or replace function get_post_maxId() returns int language plpgsql as $$
  declare maxId int;
  begin
    select 
      post_id into maxId
    from event_posts
    order by post_id desc
    limit 1;
    return maxId;
  end;
$$;


create or replace function get_view_count(id int) returns int language plpgsql as $$
  declare view_count int;
  begin
    select 
      count(*) into view_count
    from views
    where event_id = id;
    return view_count;
  end;
$$;



