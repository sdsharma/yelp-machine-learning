new WOW().init();

var data = new vis.DataSet();
var counter = 0;
var steps = 50;  // number of datapoints will be steps*steps
var axisMax = 314;
var axisStep = axisMax / steps;
for (var x = 0; x < axisMax; x+=axisStep) {
    for (var y = 0; y < axisMax; y+=axisStep) {
        var value = (3.688 + (-0.00003891*x) + (0.0003306*y));
        data.add({id:counter++,x:x,y:y,z:value,style:value});
    }
}

// specify options
var options = {
    width:  '100%',
    height: '550px',
    style: 'surface',
    showPerspective: true,
    showGrid: true,
    showShadow: false,
    keepAspectRatio: true,
    verticalRatio: 0.7
};

// Instantiate our graph object.
var container = document.getElementById('chart');
var graph3d = new vis.Graph3d(container, data, options);
hljs.initHighlightingOnLoad();

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});