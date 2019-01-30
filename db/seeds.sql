INSERT INTO user (user_name) values ('Matt');
INSERT INTO user (user_name) values ('Mark');
INSERT INTO user (user_name) values ('Lewis');
INSERT INTO user (user_name) values ('Andre');

INSERT INTO questions (category, question, choices, correctAnswer) values ('Moon', "How are far away is the moon?", "a, b, c, d", 0);
INSERT INTO questions (category, question, choices, correctAnswer) values ('Moon', "What is the orbital period of the moon?", "a, b, c, d", 1);
INSERT INTO questions (category, question, choices, correctAnswer) values ('Constellation', 'What star will lead you north?', "a, b, c, d", 2);
INSERT INTO questions (category, question, choices, correctAnswer) values ('Constellation', 'How many stars make up the belt of Orion?', "a, b, c, d", 3);
INSERT INTO questions (category, question, choices, correctAnswer) values ('Mars', 'When did the first robot land on Mars?', "a, b, c, d", 0);
INSERT INTO questions (category, question, choices, correctAnswer) values ('Mars', 'What color is Mars?', "a, b, c, d", 1);

SELECT * FROM user;
SELECT * FROM questions;
