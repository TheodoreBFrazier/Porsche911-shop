DROP DATABASE IF EXISTS porsche_dev;
CREATE DATABASE porsche_dev;

\c porsche_dev;

CREATE TABLE porsches (
    id SERIAL PRIMARY KEY, 
    model TEXT, 
    year INTEGER,
    color TEXT,
    generation INTEGER,
    price INTEGER,
    feature TEXT,
    is_new BOOLEAN
);
