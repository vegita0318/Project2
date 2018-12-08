CREATE DATABASE team_db;

USE team_db;

CREATE TABLE NFL_teams (
id INTEGER auto_increment not null,
  NFL_available_teams VARCHAR(100),
  betting_odds INTEGER,
  user_selected_team BOOLEAN DEFAULT false,
  date TIMESTAMP not null DEFAULT current_timestamp,
  primary key(id)
  );

CREATE TABLE NBA_teams (
id INTEGER auto_increment not null,
  NBA_available_teams VARCHAR(100),
  betting_odds INTEGER,
  user_selected_team BOOLEAN DEFAULT false,
  date TIMESTAMP not null DEFAULT current_timestamp,
  primary key(id)
  );

CREATE TABLE NHL_teams (
id INTEGER auto_increment not null,
  NHL_available_teams VARCHAR(100),
  betting_odds INTEGER,
  user_selected_team BOOLEAN DEFAULT false,
  date TIMESTAMP not null DEFAULT current_timestamp,
  primary key(id)
  );

CREATE TABLE MLB_teams (
id INTEGER auto_increment not null,
  MLB_available_teams VARCHAR(100),
  betting_odds INTEGER,
  user_selected_team BOOLEAN DEFAULT false,
  date TIMESTAMP not null DEFAULT current_timestamp,
  primary key(id)
  );