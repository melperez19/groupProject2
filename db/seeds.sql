INSERT INTO user (user_name) values ('Matt');
INSERT INTO user (user_name) values ('Mark');
INSERT INTO user (user_name) values ('Lewis');
INSERT INTO user (user_name) values ('Andre');

INSERT INTO questions (category, question, choices, correctAnswer) values ('Moon', "How are far away is the moon?", "a, b, c, d", "a");
INSERT INTO questions (category, question, choices, correctAnswer) values ('Moon', "What is the orbital period of the moon?", "a, b, c, d", "b");
INSERT INTO questions (category, question, choices, correctAnswer) values ('Constellation', 'What star will lead you north?', "a, b, c, d", "c");
INSERT INTO questions (category, question, choices, correctAnswer) values ('Constellation', 'How many stars make up the belt of Orion?', "a, b, c, d", "d");
INSERT INTO questions (category, question, choices, correctAnswer) values ('Mars', 'When did the first robot land on Mars?', "a, b, c, d", "a");
INSERT INTO questions (category, question, choices, correctAnswer) values ('Mars', 'What color is Mars?', "a, b, c, d", "b");

SELECT * FROM authors;
SELECT * FROM books;