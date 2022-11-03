/**
 * 
 */

$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: "/send",
		headers: { "content-type": "application/json" },
		dataType: 'json',
		success: function(data) {
			console.log(data[0].cpucore);
			
			
			var input_text1 = data[0].cpucore

			var input_text2 = data[0].cpuprocessors

			var input_text3 = parseFloat(data[0].memorytotalspace)

			console.log("input_text3" + input_text3);
			//총 사용량 
			var memorytotalspace = parseFloat(data[0].memoryfreespace)
			//사용중인 메모리 양
			var memoryfreespace = parseFloat(data[0].memorytotalspace - data[0].memoryfreespace)
			

			Highcharts.chart('chart_box1', {
				colors: ['#ffffff', '#ffffff'],
				chart: {
					type: 'column',
					backgroundColor: '#393939'

				},

				title: {
					text: '메모리 용량',
					style: {
						color: 'white'
					}
				},

				xAxis: {
					categories: ['메모리 용량']

				},

				yAxis: {
					allowDecimals: false,
					min: 0,

					title: {
						text: 'Count medals',
						style: {
							color: 'white'
						}
					}
				},

				tooltip: {
					formatter: function() {
						return '<b>' + this.x + '</b><br/>' +
							this.series.name + ': ' + this.y + '<br/>' +
							'Total: ' + this.point.stackTotal;
					}
				},

				plotOptions: {

					column: {
						stacking: 'normal',
						dataLabels: {
							enabled: true,
							color: '#FFFFFF'
						}
					}
				},

				series: [{

					name: 'memorytotalspace',
					data: [memorytotalspace],
					stack: 'Europe',
					color: '#9eec6f'
				}, {
					name: 'memoryfreespace',
					data: [memoryfreespace],
					stack: 'Europe',
					color: '#f767f7'
				}]
			});


			/* cpu 코어 개수  */
			Highcharts.chart({
				colors: ['#f78df7'],
				chart: {
					renderTo: 'fixed_data1',
					plotBackgroundColor: null,
					plotBorderWidth: 0,
					plotShadow: false,
					backgroundColor: '#393939'
				},


				accessibility: {
					point: {
						valueSuffix: '%'
					}
				},
				plotOptions: {
					pie: {
						dataLabels: {
							enabled: true,
							distance: -50,
							style: {
								backgroundColor: 'red',
								fontWeight: 'bold',
								color: 'white'
							}
						},
						startAngle: -90,
						endAngle: 90,
						center: ['50%', '75%'],
						size: '110%'
					}
				},
				series: [{
					type: 'pie',
					name: ' cpu 코어 개수',
					innerSize: '50%',
					data: [input_text2]
				}]
			});
			Highcharts.chart({
				colors: ['#87fee2'],
				chart: {
					renderTo: 'fixed_data2',
					plotBackgroundColor: null,
					plotBorderWidth: 0,
					plotShadow: false,
					backgroundColor: '#393939'
				},


				accessibility: {
					point: {
						valueSuffix: '%'
					}
				},
				plotOptions: {
					pie: {
						dataLabels: {
							enabled: true,
							distance: -50,
							style: {
								fontWeight: 'bold',
								color: 'white'
							}
						},
						startAngle: -90,
						endAngle: 90,
						center: ['50%', '75%'],
						size: '110%'
					}
				},
				series: [{
					type: 'pie',
					name: '프로세서 개수',
					innerSize: '50%',
					data: [input_text1
					]
				}]
			});
			//
			Highcharts.chart({
				colors: ['#767ec7'],
				chart: {
					renderTo: 'fixed_data3',
					plotBackgroundColor: null,
					plotBorderWidth: 0,
					plotShadow: false,
					backgroundColor: '#393939'
				},


				accessibility: {
					point: {
						valueSuffix: '%'
					}
				},
				plotOptions: {
					pie: {
						dataLabels: {
							enabled: true,
							distance: -50,
							style: {
								fontWeight: 'bold',
								color: 'white'
							}
						},
						startAngle: -90,
						endAngle: 90,
						center: ['50%', '75%'],
						size: '110%'
					}
				},
				series: [{
					type: 'pie',
					name: '메모리 총용량',
					innerSize: '50%',
					data: [input_text3]
				}]
			});
		},
		//실패시
		error: function(e) {
			alert("AJAX Filed!")
			console.log(e)
		}

	});



});

