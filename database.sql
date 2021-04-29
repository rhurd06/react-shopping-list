-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"quantity" DECIMAL,
	"purchased" BOOLEAN DEFAULT 'False'
);

INSERT INTO "list" ("name", "quantity", "purchased")

VALUES 
	('Apples', '5', 'True'),
	('Milk', '1', 'False'),
	('Bread', '1', 'True'),
	('Sliced Almonds', '20', 'False'),
	('Bananas', '3', 'False');

SELECT * FROM "list";