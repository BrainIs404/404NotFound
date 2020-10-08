$(function() {
	$(`#slider1`).roundSlider({
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
			$(`#slider1`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#slider2`).roundSlider({
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
			$(`#slider2`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#slider3`).roundSlider({
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
			$(`#slider3`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#slider4`).roundSlider({
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
			$(`#slider4`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#slider5`).roundSlider({
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
			$(`#slider5`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});

	$(`#slider6`).roundSlider({
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
			$(`#slider6`).roundSlider({ "rangeColor": color, "tooltipColor": color });
		}
	});
});
