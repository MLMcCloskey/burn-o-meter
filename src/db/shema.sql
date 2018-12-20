DROP DATABASE IF EXISTS burners_db;
CREATE database burners_db;

Use burners_db;

CREATE TABLE players (
    pname VARCHAR(100) NULL, 
    score INT NOT NULL,
    id  INT NOT NULL AUTO_INCREMENT,
    Primary Key (id)
);

INSERT INTO players (pname, score) VALUES ("McDoobie", 0), ("Bruder", 0), ("Garland", 0), ("Andrea", 0), ("J Guevara", 0);

SELECT * FROM players;