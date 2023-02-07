$(document).ready(function() {
	var i = 0;
	setInterval(function() {
		$.ajax({
			type: 'GET',
			url: "/MemorySend",
			headers: { "content-type": "application/json" },
			dataType: 'json',
			success: function(data) {
				var fixed_data3 = document.getElementById("input_text3");
				var fixed_data4 = document.getElementById("input_text4");

				if (data.length == 0) {
					fixed_data3.innerText = "데이터 없음"
					fixed_data4.innerText = "데이터 없음"

				} else {
					var b = Math.round(data[0].memoryTotalSpace - data[0].memoryFreespace)	//남은 량
					var memorytotalspace = ((b * 100)) / 100	//메모리 총 옹량
					var memorytotalspacets = parseFloat(data[0].memoryTotalSpace)		//메모리 사용량
					var memoryFreespace = parseFloat(data[0].memoryFreespace)

					fixed_data3.innerText = memorytotalspacets
					fixed_data4.innerText = memoryFreespace

					//메모리 총 옹량
					var series = memorychart.series[0]
					var shift = series.data.length > 3
					var x = i++
					var y = memorytotalspace
					memorychart.series[0].addPoint([x, y], true, shift)

					// cpu solidages chart 영
					var point, inc

					if (smallpie1_chart) {
						//smallpie2_chart.series[0]  : 100 데이터를 100으로 설정했음 
						point = smallpie1_chart.series[0].points[0];
						inc = memoryFreespace;//랜덤 숫자
						point.update(inc);
					}

				}



			},
			error: function(e) {
				console.log(e)
			}

		});

	}, 1000);
	var memorychart = Highcharts.chart('MemoryChartBox', {
		chart: {
			type: 'areaspline',
			backgroundColor: 'white'
		},
		legend: {
			align: 'left',
			x: 80,
			y: 70
		}, title: {
			text: 'memory 사용률',
			style: {
				color: 'black'
			}
		}, yAxis: {
			min: 0,
			max: 40,
			title: {
				text: 'Memory Utilization'
			}
		}, credits: {
			enabled: false
		},
		xAxis: {
			tickPositions: []
		},
		tooltip: {
			headerFormat: ''
		},
		series: [{

			name: 'memory 사용량',
			data: [0],
			lineColor: '#87fee2',
			color: {
				linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
				stops: [
					[0, '#ef9b37'],
					[1, 'white ']
				]
			},
			lineWidth: 3
		}]
	});


	var gaugeOptions1 = {
		chart: {
			type: 'solidgauge'
		},

		pane: {
			center: ['50%', '85%'],
			size: '70%',
			startAngle: -90,
			endAngle: 90,
			background: {
				backgroundColor:
					Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
				innerRadius: '60%',
				outerRadius: '100%',
				shape: 'arc'
			}
		},

		title: null,
		// the value axis
		yAxis: {
			stops: [
				[0.1, '#fbe2af'], // green
				[0.5, '#f6b73b']// yellow
			],
			lineWidth: 0,
			tickWidth: 0,
			minorTickInterval: null,
			tickAmount: 2,
			title: {
				y: -70
			},
			labels: {
				y: 16
			}
		},

		plotOptions: {
			solidgauge: {
				dataLabels: {
					y: 5,
					borderWidth: 0,
					useHTML: true
				}
			}
		}
	};


	//메모리 사용량 파이 그래프 표현 부분 
	var smallpie1_chart = Highcharts.chart('smallpie1', Highcharts.merge(gaugeOptions1, {
		yAxis: {
			min: 0,
			max: 32,
			title: {
				text: 'memory 사용률'
			}
		},

		credits: {
			enabled: false
		},
		tooltip: {

			formatter: function() {
				return '<b>memory 사용량</b>'
			},

		},
		series: [{
			data: [20],
			dataLabels: {
				format:
					'<div style="text-align:center">' +
					'<span style="font-size:25px">{y}</span><br/>' +
					'</div>'
			}
		}]

	}));







});













