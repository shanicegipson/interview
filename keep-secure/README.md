This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Install Dependencies

1. `npm install`

### Database Setup

1. Create a database named `keep_secure`
2. Run the queries from `database.sql` on the `keep_secure` database.

```
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
```

## Available Scripts
*
1. `npm run server`
2. `npm run client`
