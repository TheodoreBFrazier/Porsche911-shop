DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS porsches;

CREATE TABLE porsches (
    id SERIAL PRIMARY KEY, 
    name TEXT
);
