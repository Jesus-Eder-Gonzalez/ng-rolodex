DROP USER admin;

DROP DATABASE ng_rolodex;

CREATE USER admin WITH PASSWORD 'password';

CREATE DATABASE ng_rolodex WITH OWNER admin;
