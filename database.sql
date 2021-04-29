-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"quantity" DECIMAL
);

INSERT INTO "list" ("name", "quantity")

VALUES 
	('Apples', '5'),
	('Milk', '1'),
	('Bread', '1'),
	('Sliced Almonds', '20'),
	('Bananas', '3');

SELECT * FROM "list";