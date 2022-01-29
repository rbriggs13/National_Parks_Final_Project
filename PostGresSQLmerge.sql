-- Joining cleanspecies and nationalparks tables
SELECT cleanspecies.park_name,
    cleanspecies.category,
cleanspecies.orders,
cleanspecies.familys,
cleanspecies.scientific_name,
cleanspecies.common_names,
cleanspecies.occurrence,
cleanspecies.nativeness,
cleanspecies.conservation_status,
	nationalparks.states,
	nationalparks.acres,
	nationalparks.latitude,
	nationalparks.longitude,
	nationalparks.ranks,
	nationalparks.visitors,
	nationalparks.percentage
INTO parkspecies
FROM cleanspecies
LEFT JOIN nationalparks
ON (cleanspecies.park_name = nationalparks.park_name);