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
            Plotly.newPlot('graph5', bubbleData, bubbleLayout); 

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

               Plotly.newPlot("graph4", pieData, pieLayout);

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
                text.push(`${rankNames[i]} National Park, Number of Visitors: ${visitorsRank[i]}`)
            }

            var nativeVisitorsTrace = {
                type: 'bar',
                x: codeArray,
                y: nativeRank,
                text: text,
                name: 'Native Species',
                hovertemplate: 
                    "<b>%{text}</b><br><br>" +
                    "%{yaxis.title.text}: %{y:,}<br>"
            };
            

            var nativeVisitorsData = [nativeVisitorsTrace];

            var nativeVisitorsLayout = {
                autosize: false,
                width: 1000,
                height: 750,
                title: 'Native Species vs. Parks ranked by Popularity',
                xaxis: {title: 'Park (in descending order of visitors)'},
                yaxis: {title: 'Number of Native Species'},
                showticklabels: true
            }

            Plotly.newPlot('graph5', nativeVisitorsData, nativeVisitorsLayout)

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
                text: rankNames
            };

            var birdData = [birdTrace];

            var birdLayout = {
                autosize: false,
                width: 1000,
                height: 750,
                title: 'Birds'
            };

            //Plotly.newPlot('graph6', birdData, birdLayout)

            //Graph Exploring the species count and the acreage of the park
            var acreSpeciesTrace = {
                type: 'scatter',
                x: totalSpeciesCounts,
                y: acreArray,
                mode: 'markers',
                text: parkNames,
                marker: {size: 10}
            };

            var acreSpeciesData = [acreSpeciesTrace];

            var acreSpeciesLayout = {
                autosize: false,
                width: 1000,
                height: 750,
                title: 'Species Count vs. Acreage'
            };

            Plotly.newPlot('graph6', acreSpeciesData, acreSpeciesLayout)
        });
    });
}

function buildCharts2() {
    d3.json('../Resources/data/parks_data.json').then((parksData) => {
        d3.json('../Resources/data/species_data.json').then((speciesData) => {
            console.log(parksData);
            console.log(speciesData);

            //building a graph that displays the category an endangered species belongs too and it's endangered status
            var categories = ['Bird', 'Insect', 'Slug/Snail', 'Amphibian', 'Invertabrate', 'Reptile', 'Vascular Plant', 'Fish', 'Mammal'];
            var speciesIdsEnd = [];
            var speciesIdsThr = [];
            var conStatusEnd = [];
            var categoryCountsEnd = [];
            var categoryCountsThr = [];
            var conCountEnd = [];

            categories.forEach((category) => {
                speciesData.forEach((species) => {
                    if (species['Nativeness'] === 'Native') {
                        if (species['Conservation Status'] != 'Least Concern') {
                                
                                
                            if (species['Conservation Status'] === 'Threatened') {
                                //conStatus.push('rgb(23, 190, 207)');
                                speciesIdsThr.push(species['Species ID']);
                            }
                            else if (species['Conservation Status'] === 'In Recovery'){
                                    //conStatus.push('rgb(44, 160, 44)');
                            }
                            else if (species['Conservation Status'] === 'Species of Concern') {

                            }
                            else {
                                    conStatusEnd.push('rgb(214, 39, 40)');
                                    speciesIdsEnd.push(species['Species ID']);
                            }
                            
                        }
                    }
                });
                categoryCountsEnd.push(speciesIdsEnd.length);
                categoryCountsThr.push(speciesIdsThr.length);
            });

            

            //Build the Graph
            var conTrace = {
                type: 'bar',
                x: categories,
                y: categoryCountsEnd,
                mode: 'markers',
            };

            var conTrace2 = {
                type: 'bar',
                x: categories,
                y: categoryCountsThr,
                mode: 'markers',
            };

            var conData = [conTrace, conTrace2];

            var conLayout = {
                title: 'Individual'
            }

            Plotly.newPlot('endangeredGraph', conData, conLayout)

            //pie charts showing the distribution of categories across both native and non native species
            var nativeCategoryCounts = [];
            var nonCategoryCounts = [];

            //Native category counts
            var birds = 0;
            var insects = 0;
            var slug = 0;
            var amphibians = 0;
            var invertebrates = 0;
            var reptiles = 0;
            var plants = 0;
            var fish = 0;
            var mammals = 0;
            

            speciesData.forEach((species) => {
                if (species['Nativeness'] === 'Native') {
                    if (species['Category'] === 'Bird') {
                        birds += 1;
                    }
                    else if (species['Category'] === 'Insect') {
                        insects += 1;
                    }
                    else if (species['Category'] === 'Amphibian') {
                        amphibians += 1;
                    }
                    else if (species['Category'] === 'Invertabrate') {
                        invertebrates += 1;
                    }
                    else if (species['Category'] === 'Reptile') {
                        reptiles += 1;
                    }
                    else if (species['Category'] === 'Vascular Plant') {
                        plants += 1;
                    }
                    else if (species['Category'] === 'Fish') {
                        fish += 1;
                    }
                    else if (species['Category'] === 'Mammal') {
                        mammals += 1;
                    }
                    else {
                        slug += 1;
                    }
                    
                };
            });
            nativeCategoryCounts.push(birds);
            nativeCategoryCounts.push(insects);
            nativeCategoryCounts.push(amphibians);
            nativeCategoryCounts.push(invertebrates);
            nativeCategoryCounts.push(reptiles);
            nativeCategoryCounts.push(plants);
            nativeCategoryCounts.push(fish);
            nativeCategoryCounts.push(mammals);
            nativeCategoryCounts.push(slug);
            
            //Non native category counts
            var birds = 0;
            var insects = 0;
            var slug = 0;
            var amphibians = 0;
            var invertebrates = 0;
            var reptiles = 0;
            var plants = 0;
            var fish = 0;
            var mammals = 0;

            speciesData.forEach((species) => {
                if (species['Nativeness'] === 'Not Native') {
                    if (species['Category'] === 'Bird') {
                        birds += 1;
                    }
                    else if (species['Category'] === 'Insect') {
                        insects += 1;
                    }
                    else if (species['Category'] === 'Amphibian') {
                        amphibians += 1;
                    }
                    else if (species['Category'] === 'Invertabrate') {
                        invertebrates += 1;
                    }
                    else if (species['Category'] === 'Reptile') {
                        reptiles += 1;
                    }
                    else if (species['Category'] === 'Vascular Plant') {
                        plants += 1;
                    }
                    else if (species['Category'] === 'Fish') {
                        fish += 1;
                    }
                    else if (species['Category'] === 'Mammal') {
                        mammals += 1;
                    }
                    else {
                        slug += 1;
                    }
                    
                };
            });
            nonCategoryCounts.push(birds);
            nonCategoryCounts.push(insects);
            nonCategoryCounts.push(amphibians);
            nonCategoryCounts.push(invertebrates);
            nonCategoryCounts.push(reptiles);
            nonCategoryCounts.push(plants);
            nonCategoryCounts.push(fish);
            nonCategoryCounts.push(mammals);
            nonCategoryCounts.push(slug);

            //Build the native graph
            var nativePieTrace = {
                type: 'pie',
                values: nativeCategoryCounts,
                labels: ['Birds', 'Insects', 'Amphibians', 'Invertebrates', 'Reptiles', 'Plants', 'Fish', 'Mammals', 'Slugs/Snails'],
            };

            var nativePieData = [nativePieTrace];

            var nativePieLayout = {
                autosize: false,
                width: 500,
                height: 1000
            };

            Plotly.newPlot('pie1', nativePieData, nativePieLayout)

            //Build the non native graph
            var nonNativePieTrace = {
                type: 'pie',
                values: nonCategoryCounts,
                labels: ['Birds', 'Insects', 'Amphibians', 'Invertebrates', 'Reptiles', 'Plants', 'Fish', 'Mammals', 'Slugs/Snails'],
            };

            var nonNativePieData = [nonNativePieTrace];

            var nonNativePieLayout = {
                autosize: false,
                width: 500,
                height: 1000
            };

            Plotly.newPlot('pie2', nonNativePieData, nonNativePieLayout)
        });
    });
}

buildCharts();
buildCharts2();