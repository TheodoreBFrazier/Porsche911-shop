DROP DATABASE IF EXISTS porsche_dev;
CREATE DATABASE porsche_dev;

\c porsche_dev;

DROP TABLE IF EXISTS porsches;

CREATE TABLE porsches (
        id SERIAL PRIMARY KEY, 
    model TEXT, 
    year INTEGER,
    color TEXT,
    generation INTEGER,
    price INTEGER,
    is_new BOOLEAN
);
