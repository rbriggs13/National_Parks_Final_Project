function buildCharts() {
    d3.json('../Resources/data/parks_data.json').then((parksData) => {
        d3.json('../Resources/data/species_data.json').then((speciesData) => {
            console.log(parksData);
            console.log(speciesData);

            //List of park names
            var parkNames = Object.keys(parksData);
            console.log(parkNames);

            //Arrays for native and non native species by park in order of the park names array
            var nativeSpeciesCounts = [];
            var nonNativeSpeciesCounts = [];
            var nativeCount = 0;
            var nonNativeCount = 0;

            parkNames.forEach((park) => {
                speciesData.forEach((species) => {
                    if (species['Park Name'] === park) {
                        if (species['Nativeness'] === 'Native') {
                            nativeCount += 1;
                        }
                        else {
                            nonNativeCount +=1;
                        }
                    }
                });
                nativeSpeciesCounts.push(nativeCount);
                nonNativeSpeciesCounts.push(nonNativeCount);

                nativeCount = 0;
                nonNativeCount = 0;
            });
            
            var visitorsArray = [];

            Object.keys(parksData).forEach(key => {
                visitorsArray.push((parksData[key]['Visitors']));
            });


            console.log(visitorsArray);

            //Harry's Graph 1
            var barTrace = {
                type: 'bar',
                x: nativeSpeciesCounts,
                y: parkNames,
                orientation: 'h'
            };

            var barData = [barTrace];

            var barLayout = {
                autosize: true,
                width: 500,
                height: 1000,
                margin: {
                  l: 200,
                  r: 100,
                  b: 100,
                  t: 100,
                  pad: 4
                }
            };

            //Plotly.newPlot('graph', barData, barLayout)

            //Harry's Graph 2
            var barTrace2 = {
                type: 'bar',
                x: nonNativeSpeciesCounts,
                y: parkNames,
                orientation: 'h'
            };

            var barData2 = [barTrace2];

            var barLayout2 = {
                autosize: true,
                width: 500,
                height: 1000,
                margin: {
                  l: 200,
                  r: 100,
                  b: 100,
                  t: 100,
                  pad: 4
                }
            };
            //Plotly.newPlot('graph', barData2, barLayout2)

            //Lydia's Graph 1
            var pieTrace = {
                type: 'pie',
                values: visitorsArray,
                labels: parkNames,
                orientation: 'h'
            };

            var pieData = [pieTrace];

            var pieLayout = {
                autosize: false,
                width: 500,
                height: 1000
            };
            //Plotly.newPlot('graph', pieData, pieLayout)

            //Lydia's Graph 2
            var barTrace = {
                type: 'bar',
                x: nativeSpeciesCounts,
                y: parkNames,
                orientation: 'h'
            };

            var barData = [barTrace];

            var barLayout = {
                autosize: true,
                width: 500,
                height: 1000,
                margin: {
                  l: 200,
                  r: 100,
                  b: 100,
                  t: 100,
                  pad: 4
                }
            };

            //Plotly.newPlot('graph', barData, barLayout)

            //Ryan's Graph 1
            var barTrace = {
                type: 'bar',
                x: nativeSpeciesCounts,
                y: parkNames,
                orientation: 'h'
            };

            var barData = [barTrace];

            var barLayout = {
                autosize: true,
                width: 500,
                height: 1000,
                margin: {
                  l: 200,
                  r: 100,
                  b: 100,
                  t: 100,
                  pad: 4
                }
            };

            //Plotly.newPlot('graph', barData, barLayout)

            // Ryan's Graph 2
            var barTrace = {
                type: 'bar',
                x: nativeSpeciesCounts,
                y: parkNames,
                orientation: 'h'
            };

            var barData = [barTrace];

            var barLayout = {
                autosize: true,
                width: 500,
                height: 1000,
                margin: {
                  l: 200,
                  r: 100,
                  b: 100,
                  t: 100,
                  pad: 4
                }
            };

            //Plotly.newPlot('graph', barData, barLayout)
        });
    });
}

buildCharts();