CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR (100) NOT NULL,
"password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "messages" (
"id" SERIAL PRIMARY KEY, 
"message" VARCHAR (2000) NOT NULL
);

CREATE TABLE "secrets" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"messages_id" INT REFERENCES "messages"
);

SELECT * FROM "secrets" 
JOIN "user" ON "user"."id" = "secrets"."user_id"
JOIN "messages" ON "messages"."id" = "secrets"."messages_id"
where "user"."id" = 1;

