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
            
            //Array of visitor counts in order of parkNames
            var visitorsArray = [];

            Object.keys(parksData).forEach(key => {
                visitorsArray.push((parksData[key]['Visitors']));
            });


            console.log(visitorsArray);

            //Harry's Graph 1 Acres vs. no. of visitors
            // Array for acres
            var acresCounts = []; 
            var visitors = 0;   
            //Create a trace for Bubble layout
           
            var bubbleData = [{
                x: Acres,
                y: Visitors,
                text: parkLabels,
                mode: 'markers',
                marker: {
                color: otuIds,
                size: sampleValues
                }
              }];

            // Create the layout for the bubble chart.
            var bubbleLayout = {
                title: 'Size of park per Visitors',
                showlegend: false,
                xaxis: {
                title: {
                text: 'Acres'
                }
                },
                height: 500,
                width: 600,
                margin: {
                l: 30,
                r: 0,
                t: 100,
                b: 100
                }
            };

            // Use Plotly to plot the data with the layout.
            //Plotly.newPlot('bubble', bubbleData, bubbleLayout); 
            
            
            

            //Harry's Graph 2
            //Nativeness vs non-nativeness of species
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

            //Ryan's Graph 1 (Bird count and visitors per park)

            var birdCounts = [];
            var birds = 0;

            //array of bird counts in the order of 
            parkNames.forEach((park) => {
                speciesData.forEach((species) => {
                    if (species['Park Name'] === park) {
                        if (species['Category'] === 'Bird') {
                            birds += 1;
                        }
                    }
                });
                birdCounts.push(birds);

                birds = 0;
                
            });

            console.log(birdCounts);
            visitorSize = [];

            for (var i=0, length = visitorsArray.length; i < length; i++) {
                visitorSize.push(birdCounts[i]/10);
            }
            

            var birdTrace = {
                type: 'scatter',
                x: birdCounts,
                y: visitorsArray,
                mode: 'markers',
                text: parkNames,
                marker: {size: visitorSize}
            };

            var birdData = [birdTrace];

            var birdLayout = {
                autosize: false,
                width: 750,
                height: 750,
                title: 'Birds'
            };

            //Plotly.newPlot('graph5', birdData, birdLayout)

            // Ryan's Graph 2 (Native Species present in parks compared to visitors)
            var nativeVisitorsTrace = {
                type: 'bar',
                x: parkNames,
                y: nativeSpeciesCounts,
                text: parkNames,
                name: 'Native Species'
            };

            var nativeVisitorsData = [nativeVisitorsTrace];

            var nativeVisitorsLayout = {
                autosize: false,
                width: 750,
                height: 750,
                title: 'Species Nativeness vs. Visitor count',
                xaxis: {title: 'Number of Species'},
                yaxis: {title: 'Number of Visitors'}
            }

            Plotly.newPlot('graph5', nativeVisitorsData, nativeVisitorsLayout)

            var nativeVisitorsTrace2 = {
                type: 'bar',
                x: parkNames,
                y: visitorsArray,
                text: parkNames,
                name: 'Native Species'
            };

            var nativeVisitorsData2 = [nativeVisitorsTrace2];

            var nativeVisitorsLayout2 = {
                autosize: false,
                width: 750,
                height: 750,
                title: 'Species Nativeness vs. Visitor count',
                xaxis: {title: 'Number of Species'},
                yaxis: {title: 'Number of Visitors'}
            }

            Plotly.newPlot('graph6', nativeVisitorsData2, nativeVisitorsLayout2)
        });
    });
}

buildCharts();