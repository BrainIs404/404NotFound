
$(function() {
    $("#slider1").roundSlider({
    sliderType: "min-range",
    value: 80,
      svgMode: true
});

$("#slider2").roundSlider({
    sliderType: "min-range",
    circleShape: "pie",
    startAngle: "315",
    lineCap: "round",
    radius: 130,
    width: 20,

    min: -50,
    max: 50,
    
    svgMode: true,
      pathColor: "#eee",
      borderWidth: 0,
    
      startValue: 0,
    
    valueChange: function (e) {
        var color = e.isInvertedRange ? "#FF5722" : "#8BC34A";
      
      $("#slider2").roundSlider({ "rangeColor": color, "tooltipColor": color });
    }
});

var sliderObj = $("#slider2").data("roundSlider");
sliderObj.setValue(0);

});
