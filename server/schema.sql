DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  text VARCHAR(150),
  user_id INTEGER,
  room_id INTEGER,
  date DATE NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (room_id) REFERENCES rooms (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/










