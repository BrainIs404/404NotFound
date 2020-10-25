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

	$(`#tremolo`).roundSlider({
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
			$(`#tremolo`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#pitch`).roundSlider({
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
			$(`#pitch`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#distortion`).roundSlider({
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
			$(`#distortion`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#echo`).roundSlider({
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
			$(`#echo`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#delay`).roundSlider({
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
			$(`#delay`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});
});