DROP DATABASE IF EXISTS burners_DB;
CREATE database burners_DB;

Use burners_DB;

CREATE TABLE players (
    pname VARCHAR(100) NULL, 
    score INT NOT NULL,
    id INT NOT NULL,
    Primary Key (id)
);

SELECT * FROM burners_DB;