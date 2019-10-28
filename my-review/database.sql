CREATE TABLE "review" (
"id" SERIAL PRIMARY KEY,
"business_name" VARCHAR (250) NOT NULL,
"review" VARCHAR (550) NOT NULL, 
"latitude" int,
"longitude" int);