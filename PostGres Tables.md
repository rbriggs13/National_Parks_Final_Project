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
	park_name VARCHAR(100),
	category VARCHAR(100),
	orders VARCHAR(100),
	familys VARCHAR(100),
	scientific_name VARCHAR(100),
	common_names VARCHAR(100),
	occurrence VARCHAR(100),
	nativeness VARCHAR(100),
	conservation_status VARCHAR(100)
)

DROP TABLE nationalparks

SELECT * FROM nationalparks

SELECT * FROM learningspecies

SELECT * FROM cleanspecies
				 


