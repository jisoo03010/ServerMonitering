$(document).ready(function() {
	var i = 0;
	setInterval(function() {
		i++
		$.ajax({
			type: 'GET',
			url: "/CpuSend",
			headers: { "content-type": "application/json" },
			dataType: 'json',
			success: function(data) {

				var fixed_data1 = document.getElementById("input_text1");
				var fixed_data2 = document.getElementById("input_text2");
				var cpuusage_val = parseFloat(data[0].cpuusage) // cpu 사용률 
				var input_text1 = data[0].cpucore // cpu 코어 개수 (고정 값) // var input_text2 = data[0].cpuprocessors cpu 프로세서 :
				fixed_data1.innerText = input_text1
				fixed_data2.innerText = cpuusage_val
				console.log(input_text1)
				var updateCPUVal = parseFloat(data[0].cpuusage) // cpu 사용률 
				var series = cpuchart.series[0]	// cpu 사용률 제일 최신 데이터 
				var shift = series.data.length > 10
				var x = i++
				var y = updateCPUVal
				cpuchart.series[0].addPoint([x, y], true, shift)

				// cpu solidages chart 영
				var point,
					inc;

				if (smallpie2_chart) {
					//smallpie2_chart.series[0]  : 100 데이터를 100으로 설정했음 
					point = smallpie2_chart.series[0].points[0];

					inc = cpuusage_val;//랜덤 숫자


					point.update(inc);
				}

			},
			error: function(e) {
				console.log(e)
			}
		});
	}, 1000)
	
	var i = 0;
	setInterval(function() {
		i++
		$.ajax({
			type: 'GET',
			url: "/LocalCpuSend",
			headers: { "content-type": "application/json" },
			dataType: 'json',
			success: function(data) {

				var fixed_data1 = document.getElementById("input_text1");
				var fixed_data2 = document.getElementById("input_text2");
				var cpuusage_val = parseFloat(data[0].cpuusage) // cpu 사용률 
				var input_text1 = data[0].cpucore // cpu 코어 개수 (고정 값) // var input_text2 = data[0].cpuprocessors cpu 프로세서 :
				fixed_data1.innerText = input_text1
				fixed_data2.innerText = cpuusage_val
				console.log(input_text1)
				var updateCPUVal = parseFloat(data[0].cpuusage) // cpu 사용률 
				var series = cpuchart.series[0]	// cpu 사용률 제일 최신 데이터 
				var shift = series.data.length > 10
				var x = i++
				var y = updateCPUVal
				cpuchart.series[0].addPoint([x, y], true, shift)

				// cpu solidages chart 영
				var point,
					inc;

				if (smallpie2_chart) {
					//smallpie2_chart.series[0]  : 100 데이터를 100으로 설정했음 
					point = smallpie2_chart.series[0].points[0];

					inc = cpuusage_val;//랜덤 숫자


					point.update(inc);
				}

			},
			error: function(e) {
				console.log(e)
			}
		});
	}, 1000)
	var cpuchart = Highcharts.chart('CPUChartBox', {
		chart: {
			type: 'areaspline',
			backgroundColor: 'white',
		},
		legend: {
			align: 'left',
			x: 80,
			y: 70
		}, title: {
			text: 'cpu 사용률',
			style: {
				color: 'black'
			}
		},
		yAxis: {
			min: 0,
			max: 100,
			title: {
				text: 'Cpu Utilization'
			}
		}, credits: {
			enabled: false
		},
		xAxis: {
			tickPositions: []
		},
		tooltip: {
			headerFormat: ' '
		},
		series: [{
			
			name: 'cpu 사용량',
			data: [0],
			lineColor: '#87fee2',
			color: {
				linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
				stops: [
					[0, '#df4681'],
					[1, 'white']
				]
			},
			lineWidth: 3
		}]
	});


	var gaugeOptions = {
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
				[0.1, '#fae2eb'], // green
				[0.5, '#e04c85']// yellow
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



	var smallpie2_chart = Highcharts.chart('smallpie2', Highcharts.merge(gaugeOptions, {
		yAxis: {
			min: 0,
			max: 100,
			title: {
				text: 'cpu 사용률'
			}
		},

		credits: {
			enabled: false
		},
		tooltip: {
			formatter: function() {
				return 'cpu 사용량'
			},
		},
		series: [{
			data: [30],
			dataLabels: {
				format:
					'<div style="text-align:center">' +
					'<span style="font-size:25px">{y}</span><br/>' +
					'<span style="font-size:12px;opacity:0.4">%</span>' +
					'</div>'
			},
			tooltip: {
				valueSuffix: ' %'
			}
		}]

	}));

});


























