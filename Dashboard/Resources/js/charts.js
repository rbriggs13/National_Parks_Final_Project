function buildCharts() {
    d3.json('../Resources/data/parks_data.json').then((parksData) => {
        d3.json('../Resources/data/species_data.json').then((speciesData) => {

            
            //List of park names
            var parkNames = Object.keys(parksData);

            //Arrays for native and non native species by park in order of the park names array
            var nativeSpeciesCounts = [];
            var nonNativeSpeciesCounts = [];
            var nativeCount = 0;
            var nonNativeCount = 0;
            var totalSpeciesCounts = []
            var totalCount = 0;

            parkNames.forEach((park) => {
                speciesData.forEach((species) => {
                    if (species['Park Name'] === park) {
                        totalCount +=1;
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
                totalSpeciesCounts.push(totalCount);

                nativeCount = 0;
                nonNativeCount = 0;
                totalCount = 0;
            });
            
            //Array of visitor counts in order of parkNames
            var visitorsArray = [];

            Object.keys(parksData).forEach(key => {
                visitorsArray.push((parksData[key]['Visitors']));
            });
            

            //Array of acres in order of parkNames
            var acreArray = [];

            Object.keys(parksData).forEach(key => {
                acreArray.push((parksData[key]['Acres']))
            });

            //Array of visitor rank in order of parkNames
            var rankArray = [];

            Object.keys(parksData).forEach(key => {
                rankArray.push((parksData[key]['Rank']))
            });


            //Harry's Graph 1 Acres vs. no. of visitors
            // Array for acres
               
            //Create a trace for Bubble layout
           
            var bubbleData = [{
                x: acreArray,
                y: visitorsArray,
                text: parkNames,
                mode: 'markers',
                marker: {
                size: 10
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
            Plotly.newPlot('graph1', bubbleData, bubbleLayout); 


            //Lydia's Graph
            var pieTrace = {
                labels: ["Algae", "Amphibian", "Bird", "Crab/Lobster/Shrimp",
                "Fish", "Fungi", "Insect", "Invertebrate", "Mammal", "Nonvascular Plant",
                "Reptile", "Slug/Snail", "Spider/Scorpion", "Vascular Plant"],
                values: [0.16, 0.79, 14.03, 0.07, 1.97, 0.64, 4.91, 0.28, 3.53, 5.18, 1.31, 0.19, 0.68, 66.24],
                type: 'pie',
               };
               
               var pieData = [pieTrace];

               var pieLayout = {
                   autosize: false,
                   width: 500,
                   height: 1000,
                   title: "Visitors Attracted Per Category"
               };

               Plotly.newPlot("graph2", pieData, pieLayout);

            // Ryan's Graph 1 (Native Species present in parks compared to visitors)
            //Array of parks ranked by visitor count in order of highest to lowest
            var parksArray = Object.values(parksData);
            
            
            parksArray.sort((a, b) => {
                return b.Rank - a.Rank;
            });

            var codeArray = [];
            var visitorsRank = [];

            parksArray.forEach((park) => {
                codeArray.push(park['Park Code']);
                visitorsRank.push(park['Visitors'])
            });

            
            //making an array for the reordered names
            rankNames = [];

            codeArray.forEach((code) => {
                for (var key in parksData) {
                    if (parksData[key]['Park Code'] === code) {
                        rankNames.push(key);
                    }
                }
            });

            console.log(rankNames);

            //getting the array for the native species count in the ranked order
            var nativeRank = [];
            var nativeRankCount = 0;
            
            codeArray.forEach((park) => {
                speciesData.forEach((species) => {
                    if (species['Park Code'] === park) {
                        if (species['Nativeness'] === 'Native') {
                            nativeRankCount += 1;
                        }
                    }
                });
                nativeRank.push(nativeRankCount);

                nativeRankCount = 0;
            });

            console.log(nativeRank);

            //build the graph
            var text = [];

            for (let i=0; i < rankNames.length; i++) {
                text.push(`<b>${rankNames[i]} National Park</b><br></br>Number of Visitors: ${visitorsRank[i]}`)
            }

            var nativeVisitorsTrace = {
                type: 'bar',
                x: codeArray,
                y: nativeRank,
                text: text,
                name: 'Native Species',
                hovertemplate: 
                    "%{text}<br>" +
                    "%{yaxis.title.text}: %{y:,}<br>",
                marker: {color: 'forestgreen'}
            };
            

            var nativeVisitorsData = [nativeVisitorsTrace];

            var nativeVisitorsLayout = {
                autosize: false,
                width: 1000,
                height: 750,
                title: 'Native Species vs. Parks ranked by Popularity',
                xaxis: {title: 'Park (in ascending order of visitors)'},
                yaxis: {title: 'Number of Native Species'},
                showticklabels: true
            }

            Plotly.newPlot('graph3', nativeVisitorsData, nativeVisitorsLayout)

            //Ryan's Graph 2 (Bird count and visitors per park)

            var birdCounts = [];
            var birds = 0;

            //array of bird counts in the order of parkNames
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
            
            //Build the graph
            var birdTrace = {
                type: 'bar',
                x: codeArray,
                y: birdCounts,
                text: text,
                hovertemplate: 
                    "%{text}<br>" +
                    "%{yaxis.title.text}: %{y:,}",
                marker: {color: 'goldenrod'}
            };

            var birdData = [birdTrace];

            var birdLayout = {
                autosize: false,
                width: 1000,
                height: 750,
                title: 'Bird Species by Park ranked by Popularity',
                xaxis: {title: 'Parks (in ascending order of visitors)'},
                yaxis: {title: 'Number of Bird Species'}
            };

            Plotly.newPlot('graph4', birdData, birdLayout)

            //Graph Exploring the species count and the acreage of the park
            var acreSpeciesTrace = {
                type: 'scatter',
                x: totalSpeciesCounts,
                y: acreArray,
                mode: 'markers',
                text: parkNames,
                marker: {size: 10},
                hovertemplate: '<b>%{text} National Park</b><br></br>' + 'Acres: %{y}<br>' + 'Total Species: %{x}'
            };

            var acreSpeciesData = [acreSpeciesTrace];

            var acreSpeciesLayout = {
                autosize: false,
                width: 1000,
                height: 750,
                title: 'Species Count vs. Size of the Park',
                xaxis: {
                    title: 'Species Count'
                },
                yaxis: {
                    title: 'Size of Park (Acres)'
                }
            };

            Plotly.newPlot('graph5', acreSpeciesData, acreSpeciesLayout)
        });
    });
}

function buildCharts2() {
    d3.json('../Resources/data/parks_data.json').then((parksData) => {
        d3.json('../Resources/data/species_data.json').then((speciesData) => {
            console.log(parksData);
            console.log(speciesData);

            //building a graph that displays the category an endangered species belongs too and it's endangered status
            var categories = ['Bird', 'Insect', 'Slug/Snail', 'Amphibian', 'Reptile', 'Vascular Plant', 'Fish', 'Mammal'];
            var speciesIdsEnd = 0;
            var speciesIdsThr = 0;
            var speciesIdsRec = 0;
            var categoryCountsEnd = [];
            var categoryCountsThr = [];
            var categoryCountsRec = [];
            

            categories.forEach((category) => {
                speciesData.forEach((species) => {
                    if (species['Category'] === category) {
                        if (species['Conservation Status'] === 'Endangered') {
                            speciesIdsEnd += 1;
                        }
                        else if (species['Conservation Status'] === 'Threatened') {
                            speciesIdsThr += 1;
                        }
                        else if (species['Conservation Status'] === 'In Recovery') {
                            speciesIdsRec += 1;
                        }
                    }
                });
                categoryCountsEnd.push(speciesIdsEnd);
                categoryCountsThr.push(speciesIdsThr);
                categoryCountsRec.push(speciesIdsRec);
                speciesIdsEnd = 0;
                speciesIdsThr = 0;
                speciesIdsRec = 0;
            });


            //Build the Graph
            var conTrace = {
                type: 'bar',
                x: categories,
                y: categoryCountsEnd,
                marker: {
                    color: 'red'
                },
                name: "Endangered Species",
                hovertemplate: '<b>Number of Species</b>: %{y}'
            };

            var conTrace2 = {
                type: 'bar',
                x: categories,
                y: categoryCountsThr,
                marker: {
                    color: 'yellow'
                },
                name: 'Threatened Species',
                hovertemplate: '<b>Number of Species</b>: %{y}'
            };

            var conTrace3 = {
                type: 'bar',
                x: categories,
                y: categoryCountsRec,
                marker: {
                    color: 'green'
                },
                name: 'Species in Recovery',
                hovertemplate: '<b>Number of Species</b>: %{y}'
            };


            var conData = [conTrace, conTrace2, conTrace3];

            var conLayout = {
                title: 'Endangered Species Count per Category',
                xaxis: {
                    title: 'Species Category'
                },
                yaxis: {
                    title: 'Species Count'
                }
            }

            Plotly.newPlot('graph6', conData, conLayout)

            //pie charts showing the distribution of categories across both native and non native species
            var nativeCategoryCounts = [];
            var nonCategoryCounts = [];

            //Native category counts
            var nativeCount = 0;

            categories.forEach((category) => {
                speciesData.forEach((species) => {
                    if (species['Category'] === category) {
                        if (species['Nativeness'] === 'Native') {
                            nativeCount += 1;
                        }
                    }
                });
                nativeCategoryCounts.push(nativeCount);
                nativeCount = 0;
            });
            
            
            //Non native category counts
            var nonNativeCount = 0;

            categories.forEach((category) => {
                speciesData.forEach((species) => {
                    if (species['Category'] === category) {
                        if (species['Nativeness'] === 'Not Native') {
                            nonNativeCount += 1;
                        }
                    }
                });
                nonCategoryCounts.push(nonNativeCount);
                nonNativeCount = 0;
            });
            
            colors = ['skyblue','beige', 'navajowhite', 'goldenrod', 'lavender', 'forestgreen', 'royalblue', 'crimson']

            //Build the native graph
            var nativePieTrace = {
                type: 'pie',
                values: nativeCategoryCounts,
                labels: categories,
                marker: {
                    colors: colors
                },
                hoverinfo: 'label+value'
            };

            var nativePieData = [nativePieTrace];

            var nativePieLayout = {
                autosize: true,
                title: 'Native Species by Category'
            };

            Plotly.newPlot('graph7', nativePieData, nativePieLayout)

            //Build the non native graph
            var nonNativePieTrace = {
                type: 'pie',
                values: nonCategoryCounts,
                labels: categories,
                marker: {
                    colors: colors
                },
                hoverinfo: 'label+value'
            };

            var nonNativePieData = [nonNativePieTrace];

            var nonNativePieLayout = {
                autosize: true,
                title: 'Non Native Species by Category'
            };

            Plotly.newPlot('graph8', nonNativePieData, nonNativePieLayout)
        });
    });
}

buildCharts();
buildCharts2();