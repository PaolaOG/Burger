USE burgers_db;

DROP TABLE IF EXISTS `burgers`;


CREATE TABLE burgers(

id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (50),
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);

SELECT*FROM burgers;



