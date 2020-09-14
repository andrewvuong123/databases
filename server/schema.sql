DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE rooms (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   name VARCHAR(50) NULL,
--   PRIMARY KEY (id)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  text VARCHAR(150),
  userid INTEGER,
  roomname VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (userid) REFERENCES user (id)
  -- FOREIGN KEY (room_id) REFERENCES rooms (id)
);

-- INSERT INTO user ( username ) VALUES ('Alex');
-- -- INSERT INTO rooms ( name ) VALUES ('lobby');
-- INSERT INTO messages ( message, user_id, roomname) VALUES ('hi', 1, 'lobby');
-- INSERT INTO messages ( message, user_id, roomname) VALUES ('message', 1, 'classroom');

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/










