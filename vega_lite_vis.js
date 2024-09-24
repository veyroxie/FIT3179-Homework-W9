// Define the variable to hold the Vega-Lite spec (JSON file)
var vg_1 = "visualization.vl.json";  // Path to your Vega-Lite JSON spec file

// Embed the Vega-Lite visualization into the div with id "vis"
vegaEmbed("#vis", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
    console.log(result.view);
}).catch(console.error);
