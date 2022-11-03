/**
 * 
 *//**
 * 
 */

$(document).ready(function() {
	temp = setInterval(function() {
		$.ajax({
			type: 'GET',
			url: "/send",
			headers: { "content-type": "application/json" },
			dataType: 'json',
			success: function(data) {
				//console.log("Ajax Success!")
				var cpuusage_arr = [];
				for (var i = 0; i < data.length; i++) {
					//console.log("cpuusage (cpu 사용율)= " + data[i].cpuusage);
					//console.log("cpucore (cpu 코어 개수)= " + data[i].cpucore);
					//console.log("cpuprocessors (cpu 프로세서 개수) = " + data[i].cpuprocessors);

					//console.log("\n");
					var cpuusage_val = parseFloat(data[i].cpuusage)
					cpuusage_arr.push(cpuusage_val)
				}
				//console.log("\n\n" + "cpuusage_arr==============")
				//console.log(cpuusage_arr)
				//==================================꺾은선 그래차트 

				Highcharts.chart('container3', {
					chart: {
						type: 'areaspline',
						backgroundColor: '#393939'
					},
					legend: {
						layout: 'vertical',
						floating: true,
						align: 'left',
						x: 80,
						verticalAlign: 'top',
						y: 70
					},
					tooltip: {
						headerFormat: '<b>{series.name}</b><br/>',
						pointFormat: '{point.category}: {point.y}'
					},
					series: [{
						color: 'white',
						data: cpuusage_arr,
						marker: {
							enabled: true,
							lineWidth: 2,
						},
						dataLabels: {
							enabled: 'true',
							lineColor: 'black'
						}
						,
						lineColor: '#8a95f7',
						lineWidth: 3,
						color: '#8a95f7',
					}]
				});

			},
			//실패시
			error: function(e) {
				alert("AJAX Filed!")
				console.log(e)
			}



		});



	}, 60000);




});

