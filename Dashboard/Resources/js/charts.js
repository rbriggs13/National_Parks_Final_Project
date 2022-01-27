function buildCharts() {
    d3.json('../Resources/data/parks_data.json').then((parksData) => {
        d3.json('../Resources/data/species_data.json').then((speciesData) => {
            console.log(parksData);
            console.log(speciesData);

            //List of park names
            var parkNames = Object.keys(parksData);
            console.log(parkNames);

            var speciesCounts = [];

            
        });
    });
}

buildCharts();