CREATE DATABASE IF NOT EXISTS bat_stat;

USE bat_stat;

DROP TABLE players;
DROP TABLE teams;

CREATE TABLE IF NOT EXISTS teams (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  wins INT NOT NULL DEFAULT 0,
  losses INT NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS players (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  number INT DEFAULT NULL,
  position VARCHAR(64) DEFAULT NULL,
  batting_average FLOAT DEFAULT 0.0,
  at_bats INT DEFAULT 0,
  strikeouts INT DEFAULT 0,
  walks INT DEFAULT 0,
  hits INT DEFAULT 0,
  doubles INT DEFAULT 0,
  triples INT DEFAULT 0,
  home_runs INT DEFAULT 0,
  team_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (team_id) REFERENCES teams(id)
);

INSERT INTO teams (name) VALUES ('Giants');
INSERT INTO players (name, number, team_id) VALUES ('Buster Posey', 28, 1);