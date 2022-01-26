function init() {
    //get reference to the drop down
    var selector = d3.select('#selDataset');
    
    //fill in the filters
    var catSelector = d3.select('#selCategory');
    d3.json('category_data.json').then((categories) => {
        catSelector.append('option').text("All").property('value', 0);
        categories.forEach((category) => {
            catSelector.append('option').text(category).property('value', category);
        });
    });

    d3.json('parks_data.json').then((park_data) => {
        console.log(park_data);
        
        var parkNames = Object.keys(park_data);
        console.log(parkNames)

        //build the parks drop down menu
        parkNames.forEach((park) => {
            selector.append('option').text(park).property('value', park);
        });

        var firstPark = parkNames[0];
        buildData(firstPark);

        d3.json('table_data.json').then((table_data) => {
            console.log(table_data);
            buildTable(table_data, firstPark);
        });
    });

    
};

//initialize the dashboard
init();
var tbody = d3.select('tbody');

function optionChanged(newPark) {
    //fetch the park info each time it is changed
    buildData(newPark);


    d3.json('table_data.json').then((table_data) => {
        buildTable(table_data, newPark);
    });
}

//Parks info panel
function buildData(park) {
    d3.json('parks_data.json').then((data) => {
        var panelData = data[park];
        console.log(panelData);

        var PANEL = d3.select('#sample-data');

        PANEL.html("");

        Object.entries(panelData).forEach(([key, value]) => {
            if (key === 'Percentage') {
                value = `${(value*100).toFixed(2)}%`
                
            };

            PANEL.append('h6').text(`${key}: ${value}`);
        });
    });
}

//species table
function buildTable(table_data, park) {
    //clear the existing table
    tbody.html("");
    

    //fill the table based on the park
    table_data.forEach((species) => {
        //append a row onto the table
        let row = tbody.append("tr");

        //add values to the cells
        if (species['Park Name'] === park) {
           Object.values(species).forEach((val) => {
               let cell = row.append("td");
               cell.text(val);
           }); 
        }
    });
}

// filter table
function filterChanged (newCategory) {
    var park = document.getElementById('selDataset').value;
    console.log(park);
    console.log(newCategory);

    d3.json('table_data.json').then((table_data) => {
        var filteredData = table_data;

        if (newCategory != 0) {
            console.log('Hello from the if');
            filteredData = filteredData.filter(row => row['Category'] === newCategory);
        }

        buildTable(filteredData, park);
    });
}