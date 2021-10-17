CREATE DATABASE IF NOT EXISTS bat_stat;

USE bat_stat;

DROP TABLE IF EXISTS bat_stat.players;
DROP TABLE IF EXISTS bat_stat.teams;

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
  image_url VARCHAR(256) DEFAULT 'https://i.ebayimg.com/images/g/vaQAAOSwmWhgU5PV/s-l300.jpg',
  number INT DEFAULT NULL,
  position VARCHAR(64) DEFAULT NULL,
  batting_average FLOAT DEFAULT 0.0,
  on_base_percentage FLOAT DEFAULT 0.0,
  PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXISTS game (
  id INT NOT NULL AUTO_INCREMENT,
  home_id INT,
  away_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (home_id) REFERENCES teams(id),
  FOREIGN KEY (away_id) REFERENCES teams(id)
);

CREATE TABLE IF NOT EXISTS game_stats (
  id INT,
  game_id INT,
  team_id INT,
  player_id INT,
  at_bats INT DEFAULT 0,
  strikeouts INT DEFAULT 0,
  walks INT DEFAULT 0,
  hits INT DEFAULT 0,
  doubles INT DEFAULT 0,
  triples INT DEFAULT 0,
  home_runs INT DEFAULT 0,
  RBI INT DEFAULT 0,
  runs INT DEFAULT 0,
  PRIMARY KEY (id, game_id),
  FOREIGN KEY (game_id) REFERENCES game(id),
  FOREIGN KEY (team_id) REFERENCES teams(id),
  FOREIGN KEY (player_id) REFERENCES players(id)
);

INSERT INTO teams (name) VALUES ('Fairfield');
INSERT INTO teams (name) VALUES ('Berkeley');
INSERT INTO players (name, number, position, team_id) VALUES ('Pickle Rick', 28, 'P', 1);
INSERT INTO players (name, number, position, team_id, image_url) VALUES ('Fred', 69, 'P', 2, 'https://www.edsys.in/wp-content/uploads/flintstone-wecompress.com_-1536x1152.jpg');
INSERT INTO players (name, number, position, team_id, image_url) VALUES ('Homer', 32, 'C', 2, 'https://www.edsys.in/wp-content/uploads/0bb15fd89591ca05d13d4095227f65f1.jpg');
INSERT INTO players (name, number, position, team_id, image_url) VALUES ('Robert', 23, 'C', 1, 'https://www.edsys.in/wp-content/uploads/spongebob_0_0-1536x863.jpg');