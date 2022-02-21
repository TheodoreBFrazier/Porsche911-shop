DROP DATABASE IF EXISTS porsche_dev;
CREATE DATABASE porsche_dev;

\c porsche_dev;

CREATE TABLE porsches (
    id SERIAL PRIMARY KEY, 
    model TEXT, 
    image TEXT,
    year INTEGER,
    color TEXT,
    generation INTEGER,
    price INTEGER,
    feature TEXT,
    is_new BOOLEAN
);

DROP TABLE IF EXISTS generations;

CREATE TABLE generations (
   id SERIAL PRIMARY KEY, 
   generation TEXT,
   image TEXT,
   beganProd INTEGER,
   endedProd INTEGER,
   description TEXT    
)