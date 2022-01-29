CREATE TABLE nationalparks ( 
	park_code VARCHAR(100), 
	park_name VARCHAR(100), 
	states VARCHAR(100), 
	acres DECIMAL, 
	latitude DECIMAL, 
	longitude DECIMAL, 
	ranks INT, 
	visitors INT, 
	percentage DECIMAL
)

CREATE TABLE learningspecies (
	genus VARCHAR(100), 
	category VARCHAR(100), 
	park_name VARCHAR(100), 
	conservation_status VARCHAR(100), 
	nativeness VARCHAR(100)
)

CREATE TABLE cleanspecies (
	species_id VARCHAR(100),
	park_name VARCHAR(100),
	category VARCHAR(100),
	orders VARCHAR(100),
	families VARCHAR(100),
	scientific_name VARCHAR(100),
	common_name VARCHAR(10000),
	occurrence VARCHAR(100),
	nativeness VARCHAR(100),
	conservation_status VARCHAR(100),
	park_id VARCHAR(100)
)

DROP TABLE cleanspecies 

SELECT * FROM nationalparks

SELECT * FROM learningspecies