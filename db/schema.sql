-- remove database "eat_da_burger_db" if exists
DROP DATABASE IF EXISTS eat_da_burger_db;
-- Creates the "eat_da_burger_db" database --
CREATE DATABASE eat_da_burger_db;
-- creating table for "eat_da_burger_db" database --
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);