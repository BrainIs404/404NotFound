$(function() {
	$(`#bass`).roundSlider({
		sliderType: "min-range",
		circleShape: "pie",
		startAngle: "315",
		lineCap: "round",

		radius: 35,
		width: 10,

		min: -25,
		max: 25,

		svgMode: true,
			pathColor: "#eee",
			borderWidth: 0,

			startValue: 0,
		valueChange: function (e) {
			var color = e.isInvertedRange ? "#709efa" : "#1f31f0";
			$(`#bass`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#treble`).roundSlider({
		sliderType: "min-range",
		circleShape: "pie",
		startAngle: "315",
		lineCap: "round",

		radius: 35,
		width: 10,

		min: -25,
		max: 25,

		svgMode: true,
			pathColor: "#eee",
			borderWidth: 0,

			startValue: 0,
		valueChange: function (e) {
			var color = e.isInvertedRange ? "#709efa" : "#1f31f0";
			$(`#treble`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#middle`).roundSlider({
		sliderType: "min-range",
		circleShape: "pie",
		startAngle: "315",
		lineCap: "round",

		radius: 35,
		width: 10,

		min: -25,
		max: 25,

		svgMode: true,
			pathColor: "#eee",
			borderWidth: 0,

			startValue: 0,
		valueChange: function (e) {
			var color = e.isInvertedRange ? "#709efa" : "#1f31f0";
			$(`#middle`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

});