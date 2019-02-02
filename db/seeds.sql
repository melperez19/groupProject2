INSERT INTO user (user_name) values ('Matt');
INSERT INTO user (user_name) values ('Mark');
INSERT INTO user (user_name) values ('Lewis');
INSERT INTO user (user_name) values ('Andre');

describe Questions;

INSERT INTO questions (id, category, question, choices, correctAnswer, image, createdAt, updatedAt) values (1, 'Moon', "How are far away is the moon?", "238,900 miles, 310,000 miles, 19,586 miles, 524,356 miles", 0, "assets/images/moonRotation.gif", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions (id, category, question, choices, correctAnswer, image, createdAt, updatedAt) values (2, 'Moon', "What is the orbital period of the moon?", "2 months, 27 days, 2 weeks, none", 1, "assets/images/moonOrbit.gif", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions (id, category, question, choices, correctAnswer, image, createdAt, updatedAt) values (3, 'Constellation', 'What star will lead you north?', "Santa Claus, Celine Dion, Polaris, Big Dipper", 2, "assets/images/polaris.gif", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions (id, category, question, choices, correctAnswer, image, createdAt, updatedAt) values (4, 'Constellation', 'How many stars make up the belt of Orion?', "7, 5, 19, 3", 3, "https://thumbs.gfycat.com/IllinformedShockedBlesbok-size_restricted.gif",  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions (id, category, question, choices, correctAnswer, image, createdAt, updatedAt) values (5, 'Mars', 'When did the first robot land on Mars?', "1997, 1900, 2000, 2002", 0, "assets/images/sojourner.gif", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO questions (id, category, question, choices, correctAnswer, image, createdAt, updatedAt) values (6, 'Mars', 'What color is Mars?', "Blue, Red, Green, Hazy", 1, "https://media.giphy.com/media/cmzkzpxPS3xl8hRVJm/giphy.gif", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

SELECT * FROM user;
SELECT * FROM questions;