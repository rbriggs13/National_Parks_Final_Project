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

            //list of categories
            var categories = ['Bird', 'Insect', 'Amphibian', 'Reptile', 'Vascular Plant', 'Fish', 'Mammal'];

            //Array of parks ranked by visitor count in order of highest to lowest
            var parksArray = Object.values(parksData);
            
            
            parksArray.sort((a, b) => {
                return b.Rank - a.Rank;
            });

            //getting the visitor amounts and park codes for the reordered array
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

            //build the graph of native vs non native species per park
            var nativeTrace = {
                type: 'bar',
                x: parkNames,
                y: nativeSpeciesCounts,
                name: 'Native Species',
                marker: {color: 'forestgreen'},
                hovertemplate: 'Number of Species: %{y}'
            }

            var nonTrace = {
                type: 'bar',
                x: parkNames,
                y: nonNativeSpeciesCounts,
                name: 'Non Native Species',
                marker: {color: 'crimson'},
                hovertemplate: 'Number of Species: %{y}'
            }

            var nonAndNativeData = [nativeTrace, nonTrace];

            var nonAndNativeLayout = {
                title: 'Native and Non Native Species per Park',
                xaxis: {
                    title: {
                        text: 'Parks',
                        standoff: 10
                    },
                    automargin: true,
                    linecolor: 'black',
                    linewidth: 2,
                    mirror: true
                },
                yaxis: {
                    title: 'Number of Species',
                    linecolor: 'black',
                    linewidth: 2,
                    mirror: true
                },
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
            }

            Plotly.newPlot('graph10', nonAndNativeData, nonAndNativeLayout);

            //Acres vs. no. of visitors
               
            //Create a trace for Bubble layout
           
            var bubbleData = [{
                x: acreArray,
                y: visitorsArray,
                text: parkNames,
                mode: 'markers',
                marker: {
                size: 10,
                color: 'sienna'
                },
                hovertemplate: '<b>%{text} National Park</b><br></br>Number of Acres: %{x}<br>Number of Visitors: %{y}'
              }];

            // Create the layout for the bubble chart.
            var bubbleLayout = {
                title: 'Size of Park vs. Visitors',
                showlegend: false,
                xaxis: {title: 'Size of Park (Acres)'},
                yaxis: {title: 'Number of Visitors'},
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
            };

            // Use Plotly to plot the data with the layout.
            Plotly.newPlot('graph1', bubbleData, bubbleLayout); 


            //Categories and park popularity
            //get bottom 10 most popular parks
            var bottomRanked = rankNames.slice(0,10);

            //get the top 10 most popular parks
            var topRanked = rankNames.slice(-10);
            topRanked = topRanked.reverse();

            //make arrays to store the category counts
            var bCount = 0;
            var pCount = 0;
            var aCount = 0;
            var mCount = 0;
            var iCount = 0;
            var rCount = 0;
            var fCount = 0;
            var bird = [];
            var plants = [];
            var amphi = [];
            var mammals = [];
            var insect = [];
            var reptiles = [];
            var fish = [];

            
            topRanked.forEach((park) => {
                speciesData.forEach((species) => {
                    if (species['Park Name'] === park) {
                        if (species['Category'] === 'Vascular Plant') {
                            pCount += 1;
                        }
                        else if (species['Category'] === 'Mammal') {
                            mCount += 1;
                        }
                        else if (species['Category'] === 'Bird') {
                            bCount += 1;
                        }
                        else if (species['Category'] === 'Reptile') {
                            rCount += 1;
                        }
                        else if (species['Category'] === 'Amphibian') {
                            aCount += 1;
                        }
                        else if (species['Category'] === 'Insect') {
                            iCount += 1;
                        }
                        else if (species['Category'] === 'Fish') {
                            fCount += 1;
                        }

                    }
                });
                plants.push(pCount);
                mammals.push(mCount);
                bird.push(bCount);
                reptiles.push(rCount);
                amphi.push(aCount);
                insect.push(iCount);
                fish.push(fCount);
                bCount = 0;
                pCount = 0;
                aCount = 0;
                mCount = 0;
                iCount = 0;
                rCount = 0;
                fCount = 0;
            });

            //build the graph
            var topTrace1 = {
                type: 'bar',
                x: topRanked,
                y: plants,
                marker: {color: 'forestgreen'},
                name: 'Plants',
                hovertemplate: 'Number of Species: %{y}'
            }

            var topTrace2 = {
                type: 'bar',
                x: topRanked,
                y: mammals,
                marker: {color: 'crimson'},
                name: 'Mammals',
                hovertemplate: 'Number of Species: %{y}'
            }

            var topTrace3 = {
                type: 'bar',
                x: topRanked,
                y: bird,
                marker: {color: 'skyblue'},
                name: 'Birds',
                hovertemplate: 'Number of Species: %{y}'
            }

            var topTrace4 = {
                type: 'bar',
                x: topRanked,
                y: reptiles,
                marker: {color: 'goldenrod'},
                name: 'Reptiles',
                hovertemplate: 'Number of Species: %{y}'
            }

            var topTrace5 = {
                type: 'bar',
                x: topRanked,
                y: amphi,
                marker: {color: 'lavender'},
                name: 'Amphibians',
                hovertemplate: 'Number of Species: %{y}'
            }

            var topTrace6 = {
                type: 'bar',
                x: topRanked,
                y: fish,
                marker: {color: 'royalblue'},
                name: 'Fish',
                hovertemplate: 'Number of Species: %{y}'
            }

            var topTrace7 = {
                type: 'bar',
                x: topRanked,
                y: insect,
                marker: {color: 'slategray'},
                name: 'Insects',
                hovertemplate: 'Number of Species: %{y}'
            }

            var topData = [topTrace1, topTrace2, topTrace3, topTrace4, topTrace5, topTrace6, topTrace7];

            var topLayout = {
                title: 'Top Ranked',
                barmode: 'stack',
                xaxis: {title: 'Top 10 Popular Parks'},
                yaxis: {title: 'Number of Species (By Category)'},
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
            }
            

            Plotly.newPlot("graph2", topData, topLayout);

            //bottom 10 graph
            var bCount = 0;
            var pCount = 0;
            var aCount = 0;
            var mCount = 0;
            var iCount = 0;
            var rCount = 0;
            var fCount = 0;
            var bird = [];
            var plants = [];
            var amphi = [];
            var mammals = [];
            var insect = [];
            var reptiles = [];
            var fish = [];

            
            bottomRanked.forEach((park) => {
                speciesData.forEach((species) => {
                    if (species['Park Name'] === park) {
                        if (species['Category'] === 'Vascular Plant') {
                            pCount += 1;
                        }
                        else if (species['Category'] === 'Mammal') {
                            mCount += 1;
                        }
                        else if (species['Category'] === 'Bird') {
                            bCount += 1;
                        }
                        else if (species['Category'] === 'Reptile') {
                            rCount += 1;
                        }
                        else if (species['Category'] === 'Amphibian') {
                            aCount += 1;
                        }
                        else if (species['Category'] === 'Insect') {
                            iCount += 1;
                        }
                        else if (species['Category'] === 'Fish') {
                            fCount += 1;
                        }

                    }
                });
                plants.push(pCount);
                mammals.push(mCount);
                bird.push(bCount);
                reptiles.push(rCount);
                amphi.push(aCount);
                insect.push(iCount);
                fish.push(fCount);
                bCount = 0;
                pCount = 0;
                aCount = 0;
                mCount = 0;
                iCount = 0;
                rCount = 0;
                fCount = 0;
            });

            //build the graph
            var bottomTrace1 = {
                type: 'bar',
                x: bottomRanked,
                y: plants,
                marker: {color: 'forestgreen'},
                name: 'Plants',
                hovertemplate: 'Number of Species: %{y}'
            }

            var bottomTrace2 = {
                type: 'bar',
                x: bottomRanked,
                y: mammals,
                marker: {color: 'crimson'},
                name: 'Mammals',
                hovertemplate: 'Number of Species: %{y}'
            }

            var bottomTrace3 = {
                type: 'bar',
                x: bottomRanked,
                y: bird,
                marker: {color: 'skyblue'},
                name: 'Birds',
                hovertemplate: 'Number of Species: %{y}'
            }

            var bottomTrace4 = {
                type: 'bar',
                x: bottomRanked,
                y: reptiles,
                marker: {color: 'goldenrod'},
                name: 'Reptiles',
                hovertemplate: 'Number of Species: %{y}'
            }

            var bottomTrace5 = {
                type: 'bar',
                x: bottomRanked,
                y: amphi,
                marker: {color: 'lavender'},
                name: 'Amphibians',
                hovertemplate: 'Number of Species: %{y}'
            }

            var bottomTrace6 = {
                type: 'bar',
                x: bottomRanked,
                y: fish,
                marker: {color: 'royalblue'},
                name: 'Fish',
                hovertemplate: 'Number of Species: %{y}'
            }

            var bottomTrace7 = {
                type: 'bar',
                x: bottomRanked,
                y: insect,
                marker: {color: 'slategray'},
                name: 'Insects',
                hovertemplate: 'Number of Species: %{y}'
            }

            var bottomData = [bottomTrace1, bottomTrace2, bottomTrace3, bottomTrace4, bottomTrace5, bottomTrace6, bottomTrace7];

            var bottomLayout = {
                title: 'Bottom Ranked',
                barmode: 'stack',
                xaxis: {title: 'Bottom 10 Popular Parks'},
                yaxis: {title: 'Number of Species (By Category)'},
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
            }
            

            Plotly.newPlot("graph9", bottomData, bottomLayout);

            //Native Species present in parks compared to visitors


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
                marker: {color: 'forestgreen'},
                
            };
            

            var nativeVisitorsData = [nativeVisitorsTrace];

            var nativeVisitorsLayout = {
                autosize: true,
                title: 'Native Species vs. Parks ranked by Popularity',
                xaxis: {title: 'Park (in ascending order of visitors)'},
                yaxis: {title: 'Number of Native Species'},
                showticklabels: true,
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
            }

            Plotly.newPlot('graph3', nativeVisitorsData, nativeVisitorsLayout)

            //Bird count and visitors per park

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
                autosize: true,
                title: 'Bird Species by Park ranked by Popularity',
                xaxis: {title: 'Parks (in ascending order of visitors)'},
                yaxis: {title: 'Number of Bird Species'},
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
            };

            Plotly.newPlot('graph4', birdData, birdLayout)

            //Graph Exploring the species count and the acreage of the park
            var acreSpeciesTrace = {
                type: 'scatter',
                x: totalSpeciesCounts,
                y: acreArray,
                mode: 'markers',
                text: parkNames,
                marker: {size: 10, color: 'sienna'},
                hovertemplate: '<b>%{text} National Park</b><br></br>' + 'Acres: %{y}<br>' + 'Total Species: %{x}'
            };

            var acreSpeciesData = [acreSpeciesTrace];

            var acreSpeciesLayout = {
                autosize: true,
                title: 'Species Count vs. Size of the Park',
                xaxis: {
                    title: 'Species Count'
                },
                yaxis: {
                    title: 'Size of Park (Acres)'
                },
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
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
                },
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
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
                title: 'Native Species by Category',
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
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
                title: 'Non Native Species by Category',
                plot_bgcolor:"darkseagreen",
                paper_bgcolor:"darkseagreen"
            };

            Plotly.newPlot('graph8', nonNativePieData, nonNativePieLayout)
        });
    });
}

buildCharts();
buildCharts2();