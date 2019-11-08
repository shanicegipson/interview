CREATE TABLE "review" (
"id" SERIAL PRIMARY KEY,
"business_name" VARCHAR (250) NOT NULL,
"review" VARCHAR (550) NOT NULL, 
"address" VARCHAR (550) NOT NULL,
"latitude" VARCHAR (50),
"longitude" VARCHAR (50)
);