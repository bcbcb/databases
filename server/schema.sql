CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id smallint,
  user smallint,
  message_text varchar(500),
  time datetime,
  room smallint
);

CREATE TABLE users (
  id smallint,
  username varchar(25)
);

CREATE TABLE rooms (
  id smallint,
  roomname varchar(25)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

