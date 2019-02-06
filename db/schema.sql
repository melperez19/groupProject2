DROP DATABASE IF EXISTS spaceDB;
CREATE DATABASE spaceDB;
USE spaceDB;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
DESCRIBE user_question_answers;

CREATE TABLE user (
    -- user_id INTEGER(10) AUTO_INCREMENT,    
    regtime DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    user_name VARCHAR(45) NOT NULL,
    best_score INTEGER(10),
    -- PRIMARY KEY (user_id)

);

CREATE TABLE questions (
   -- question_id INTEGER(10) AUTO_INCREMENT,
   category VARCHAR(255) NOT NULL,
   question VARCHAR(255) NOT NULL,
   choices VARCHAR(255) NOT NULL,
   correctAnswer INTEGER NOT NULL,
   image TEXT NOT NULL
   -- PRIMARY KEY (question_id)
 );

CREATE TABLE user_question_answer (
    -- user_id INTEGER(10) PRIMARY KEY,    
    -- question_id INTEGER(10),
   users_choice INTEGER,
   is_correct BOOLEAN DEFAULT FALSE,
   quiz_score INTEGER
);