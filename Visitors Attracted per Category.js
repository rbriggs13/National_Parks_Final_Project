//Lydia's Graph 1 (Category Attracts Most Visitors)

            var pietrace = {
                labels: ["Algae", "Amphibian", "Bird", "Crab/Lobster/Shrimp",
                "Fish", "Fungi", "Insect", "Invertebrate", "Mammal", "Nonvascular Plant",
                "Reptile", "Slug/Snail", "Spider/Scorpion", "Vascular Plant", "(blank)"],
                values: [0.16, 0.79, 14.03, 0.07, 1.97, 0.64, 4.91, 0.28, 3.53, 5.18, 1.31, 0.19, 0.68, 66.24, 0],
                type: 'pie',
                orientation: 'h'
               };
               
               var pieData = [pieTrace];

               var pieLayout = {
                   autosize: false,
                   width: 500,
                   height: 1000,
                   title: "Visitors Attracted Perr Category"
               };

               Plotly.newPlot("Visitors Attracted Per Category", pieData, pieLayout);

            //Plotly.newPlot('Visitors Attracted Per Category', pieData, pieLayout)
