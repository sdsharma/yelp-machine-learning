new WOW().init();

var data = new vis.DataSet();
var counter = 0;
var steps = 50;  // number of datapoints will be steps*steps
var axisMax = 1000;
var axisStep = axisMax / steps;
for (var x = 0; x < axisMax; x+=axisStep) {
    for (var y = 0; y < axisMax; y+=axisStep) {
        var value = (3.688 + (-0.00003891*x) + (0.0003306*y));
        data.add({id:counter++,x:x,y:y,z:value,style:value});
    }
}

var datasub = new vis.DataSet();
counter = 0;
for (var x = 0; x < axisMax; x+=axisStep) {
    for (var y = 0; y < axisMax; y+=axisStep) {
        var value = (3.681 + (-0.002632*x) + (0.00489*y));
        datasub.add({id:counter++,x:x,y:y,z:value,style:value});
    }
}

var datametro = new vis.DataSet();
counter = 0;
for (var x = 0; x < axisMax; x+=axisStep) {
    for (var y = 0; y < axisMax; y+=axisStep) {
        var value = (3.668 + (-0.00002353*x) + (0.0002426*y));
        datametro.add({id:counter++,x:x,y:y,z:value,style:value});
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
var subcontainer = document.getElementById('subchart');
var metrocontainer = document.getElementById('metrochart');
var graph3d = new vis.Graph3d(container, data, options);
var subgraph3d = new vis.Graph3d(subcontainer, datasub, options);
var metrograph3d = new vis.Graph3d(metrocontainer, datametro, options);

hljs.initHighlightingOnLoad();

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});