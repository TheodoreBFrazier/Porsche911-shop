CREATE TABLE porsches (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    image TEXT,
    year INTEGER,
    color TEXT,
    generation INTEGER,
    price INTEGER,
    description TEXT,
    featured BOOLEAN,
    is_new BOOLEAN,
    rating INTEGER
);

