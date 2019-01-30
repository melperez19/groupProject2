DROP DATABASE IF EXISTS spaceDB;
CREATE DATABASE spaceDB;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

CREATE TABLE user (
    user_id INTEGER(10) AUTO_INCREMENT,    
    regtime DATETIME NOT NULL,
    user_name VARCHAR(45) NOT NULL,
   PRIMARY KEY (user_id)
);

CREATE TABLE questions (
   question_id INTEGER(10) AUTO_INCREMENT,
   catagory VARCHAR(255) NOT NULL,
   question VARCHAR(255) NOT NULL,
   choices VARCHAR(255) NOT NULL,
   correctAnswer INTEGER NOT NULL,
   PRIMARY KEY (question_id)
 );

CREATE TABLE user_question_answer (
    user_id INTEGER(10) PRIMARY KEY,    
    question_id INTEGER(10),
   users_choice INTEGER,
   is_correct BOOLEAN DEFAULT FALSE
);