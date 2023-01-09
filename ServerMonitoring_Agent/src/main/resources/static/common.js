
// 삭제 버튼 생성
const deleteBtn = document.createElement('input');
deleteBtn.value = "삭제";
deleteBtn.type = "submit";
deleteBtn.id = "deleteBtn";
inputButton.appendChild(deleteBtn);


$("#addBox").click(function() {
	$("#popup").css("display", "block");
	$("#save").css("background", "#45bbec ");
	$("#save").css("color", "white");
	$("#save").val("등록");
	$("#checkBtn").css("background", "white");
	$("#checkBtn").css("display", "block");
	$("#deleteBtn").css("display", "none");
	$("#show").css("display", "none");
	as();
});

function as() {
	$("#myForm input[type=text],  input[type=password]").val("");
};

$("#close_icon").click(function() {
	$("#popup").css("display", "none");
	$("#show").css("display", "block");
	as();
});

$("#Cancell").click(function() {
	$("#popup").css("display", "none");
	$("#show").css("display", "block");
	as();
});

$("#LocalMyPC").click(function() {
	$("#popup").css("display", "none");
	$("#show").css("display", "block");
	$(".serverName").text("LocalMyPC")
});
// 서버 이름으로 모든 데이터 가져옴 
function selectFormEvent(datad) {
	$.ajax({
		url: "/SelectForm",
		type: "GET",
		dataType: "json",
		data: datad,
		async: false,
		success: function(data) {
			let serverName = data[0]['serverName'];
			localStorage.setItem("key", serverName);
			let ServerIP = data[0]['serverIP'];
			let ServerPort = data[0]['serverPort'];
			let ServerIN = data[0]['serverIN'];
			let ServerPw = data[0]['serverPw'];
			$("#inputText1").val(ServerIN);
			$("#inputText2").val(serverName);
			$("#inputText3").val(ServerPw);
			$("#inputText4").val(ServerIP);
			$("#inputText5").val(ServerPort);

		},
		error: function(e) {
			alert("AJAX Filed!");
			console.log(e);
		}
	});
};

function CpuSend(datad) {
	$.ajax({
		url: "/CpuSend",
		type: "GET",
		dataType: "json",
		data: datad,
		async: false
	});
};

function MemorySend(datad) {
	$.ajax({
		url: "/MemorySend",
		type: "GET",
		dataType: "json",
		data: datad,
		async: false
	});
};
//등록 버튼 이벤트 영역
$("#save").click(function() {

	if ($("#save").val() == "등록") {

		let str_space = /\s/;
		if (!$('input[name="ServerName"]').val() || str_space.exec($('input[name="ServerName"]').val())) {
			alert("서버이름이 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
			$('input[name="ServerName"]').focus();
			$('input[name="ServerName"]').val($('input[name="ServerName"]').val().replace(' ', '')); // 공백제거
			console.log($("#checkBtn").css("color"))
			return false;
		} else if ($("#checkBtn").css("color") == "rgb(223, 70, 129)") {
			console.log("틀립니다")
			alert("중복 확인을 클릭해주세요");
			$("#checkBtn").focus();
			return false;
		} else if (!$('input[name="ServerIN"]').val() || str_space.exec($('input[name="ServerIN"]').val())) {
			alert("서버계정이 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
			$('input[name="ServerIN"]').focus();
			$('input[name="ServerIN"]').val($('input[name="ServerIN"]').val().replace(' ', '')); // 공백제거
			return false;
		} else if (!$('input[name="ServerPw"]').val() || str_space.exec($('input[name="ServerPw"]').val()) || $('input[name="ServerPw"]').val().length != 4) {
			alert("비밀번호가 입력되지 않았거나 텍스트의 개수를 맞춰주세요 아님 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.");
			$('input[name="ServerPw"]').focus();
			$('input[name="ServerPw"]').val($('input[name="ServerPw"]').val().replace(' ', '')); // 공백제거
			return false;
		} else if (!$('input[name="ServerIP"]').val() || str_space.exec($('input[name="ServerIP"]').val())) {
			alert("IP주소가 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.");
			$('input[name="ServerIP"]').focus();
			$('input[name="ServerIP"]').val($('input[name="ServerIP"]').val().replace(' ', '')); // 공백제거
			return false;
		} else if (!$('input[name="ServerPort"]').val() || str_space.exec($('input[name="ServerPort"]').val())) {
			alert("port번호가 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.");
			$('input[name="ServerPort"]').focus();
			$('input[name="ServerPort"]').val($('input[name="ServerPort"]').val().replace(' ', '')); // 공백제거
			return false;
		};
		let insertData = {
			ServerName: $('input[name="ServerName"]').val()
			, ServerIP: $('input[name="ServerIP"]').val()
			, ServerPort: $('input[name="ServerPort"]').val()
			, ServerIN: $('input[name="ServerIN"]').val()
			, ServerPw: $('input[name="ServerPw"]').val()
		};

		$.ajax({
			url: '/Auth',
			type: "POST",
			dataType: "json",
			data: insertData,
			async: false,
			success: function() {
				alert($('input[name="ServerName"]').val() + "님 환영합니다.");
			}
		});


	} else if ($("#save").val() == "수정") {
		if ($("#checkBtn").css("color") == "rgb(223, 70, 129)") {
			console.log("틀립니다")
			alert("중복 확인을 클릭해주세요");
			$("#checkBtn").focus();
			return false;
		} else {
			let updateData = {
				ServerName: $('input[name="ServerName"]').val()
				, ServerIP: $('input[name="ServerIP"]').val()
				, ServerPort: $('input[name="ServerPort"]').val()
				, ServerIN: $('input[name="ServerIN"]').val()
				, ServerPw: $('input[name="ServerPw"]').val()
				, serverName2: localStorage.getItem('key')
			};

			$.ajax({
				url: '/UpdateForm',
				type: "POST",
				async: false,
				dataType: "json",
				data: updateData,
				success: function() {
					$('#' + localStorage.getItem('key')).text($("#inputText2").val());
					$('#' + localStorage.getItem('key')).attr('id', $("#inputText2").val());
					localStorage.setItem('key', $("#inputText2").val());
				}
			});
			alert("success!!");
		}




	}
	$("#popup").css("display", "none");

});

function createElements(i, serverName) {

	$('#menu_bar_box').append('<li id="MenuList' + i + '"><div id="creatediv' + i + '"><img alt="cpu_img" src="./computer_icon.png" id="cpu_img"><div id="' + serverName + '">' + serverName + '</div></div><div id="creatediv2' + i + '"><img src=./updateDatIcon.svg id=updateDatIcon></div></li>');

};

// DB에서 서버전체를 가져와서 서버의 네임을 이용해서 사이드 메뉴에 보여줌 
$.ajax({
	type: "GET",
	url: "/ServerPeople",
	headers: { "content-type": "application/json" },
	dataType: 'json',
	async: false,
	success: function(data) {
		for (let i = 0; i < data.length; i++) {

			let serverName = data[i].serverName;
			// 태그 생성 함수
			createElements(i, serverName);
			//태그 생성
			let myData = null;
			$("#creatediv" + i).click(function() {
				$(".serverName").text(serverName)
				if ($("#profileBoxText").css('left') == 337.906 + "px") {

					console.log($("#profileBoxText").css('left'))
					$("#profileBoxText").css('left', 0 + "%");

				}
				myData = {
					ServerName: $("#creatediv" + i).text()
				};


				CpuSend(myData)
				MemorySend(myData);
			});

			//닷트 아이콘 클릭 이벤트 영역
			$("#creatediv2" + i).click(function() {
				$("#save").css("background", "#45bbec ");
				$("#save").css("color", "white");
				$("#checkBtn").css("display", "block");
				$("#checkBtn").css("background", "white");
				$("#popup").css("display", "block");
				$("#show").css("display", "none");
				$("#save").val("수정");

				//delete 이벤트 영역
				$("#deleteBtn").css("display", "block");

				var myData = {
					ServerName: $("#creatediv" + i).text()
				};
				selectFormEvent(myData);
			});

		};

	},
	error: function(e) {
		console.log(e);
	}
});
$("#show").click(function() {
	if ($("#profileBoxText").css('left') == 337.906 + "px") {
		$("#profileBoxText").css('left', 0 + "%");

	} else {

		console.log("left가 20임")
		console.log($("#profileBoxText").css('left'))
		$("#profileBoxText").css('left', 20 + "%");

	}
})
$("#deleteBtn").click(function() {



	if (!confirm("정말 삭제하시겠습니까?")) {
		alert("취소되었습니다.")

	} else {
		alert("삭제되었습니다.")
		let deData = {
			ServerName: $("#inputText2").val()
		};
		$.ajax({
			url: "/DeleteForm",
			type: "POST",
			async: false,
			dataType: "json",
			data: deData,
			success: function(data) {
				console.log(data.ServerName)
				if (data.ServerName == $("#" + data.ServerName).text()) {
					$("#" + serverName).parent().parent().remove();

					$("#popup").css("display", "none");

					console.log(serverNameTag)
					console.log(data)
				}

			}
		});
	}

});




// 중복체크 이벤트 
$("#checkBtn").click(function() {

	if ($("#save").val() == "등록") {
		$.ajax({
			url: "/SelectServerName",
			type: "GET",
			dataType: "json",
			async: false,
			success: function(data) {
				// 중복 버튼 클릭시 실행되는 이벤트 영역	
				// 중복 버튼 클릭시 실행되는 이벤트 영역
				if (data.length == 0) {
					console.log("아무런 멤버가 존재하지 않습니다.");

					$("#checkBtn").click(function() {
						// 중복버튼 클릭시 서버네임이 입력되어 있지 않을때 실행되는 경고창

						if ($("#inputText2").val() == "") {
							$("#inputText2").focus();
							alert("서버 이름을 적어주세요");
						} else {
							alert("사용 가능한 아이디 입니다.")
							$("#checkBtn").css("border", "2px solid rgb(0, 183, 60)")
							$("#checkBtn").css("color", "rgb(0, 183, 60)")
							//등록되어있는 서버네임이 == 서버네임 입려칸에 입력된 text가 같을때 실행
						};

					});
				} else {
					var result1 = []
					for (let d = 0; d < data.length; d++) {
						let serverName = data[d].serverName;
						result1.push(serverName)

					};
					console.log(result1)
					// 중복버튼 클릭시 서버네임이 입력되어 있지 않을때 실행되는 경고창
					if ($("#inputText2").val() == "") {
						$("#inputText2").focus();
						alert("서버 이름을 적어주세요");
					} else {
						if (result1.includes($("#inputText2").val())) { // 트루 나옴 

							// 사용할 수 없다는 것을 표현하기 위함
							alert("사용할 수 없는 입니다.")
							$("#inputText2").focus();
							$("#checkBtn").css("border", "2px solid rgb(223 70 129)")
							$("#checkBtn").css("color", "rgb(223 70 129)")
						} else if (!result1.includes($("#inputText2").val())) {
							// 사용할 수 있다는 것을 표현하기 위함
							alert("사용 가능한 아이디 입니다.")
							$("#checkBtn").css("border", "2px solid rgb(0, 183, 60)")
							$("#checkBtn").css("color", "rgb(0, 183, 60)")
						}

					}
				}
			},
			error: function(e) {
				alert("AJAX Filed!");
				console.log(e);
			}
		});
	} else if ($("#save").val() == "수정") {
		$.ajax({
			url: "/SelectServerName",
			type: "POST",
			dataType: "json",
			async: false,
			success: function(data) {
				// 중복 버튼 클릭시 실행되는 이벤트 영역	
				var result = []
				for (let d = 0; d < data.length; d++) {
					let serverName = data[d].serverName;
					result.push(serverName)

				};
				// 중복버튼 클릭시 서버네임이 입력되어 있지 않을때 실행되는 경고창
				console.log(!result.includes('o'))
				if ($("#inputText2").val() == "") {
					$("#inputText2").focus();
					alert("서버 이름을 적어주세요");
					return false;
				} else {

					if (!result.includes($("#inputText2").val()) || localStorage.getItem('key') == $("#inputText2").val()) {
						// 사용할 수 있다는 것을 표현하기 위함
						alert("사용 가능한 아이디 입니다.")
						$("#checkBtn").css("border", "2px solid rgb(0, 183, 60)")
						$("#checkBtn").css("color", "rgb(0, 183, 60)")
						//continue;

					} else if (result.includes($("#inputText2").val())) {
						alert("사용할 수 없는 입니다.")
						$("#inputText2").focus();
						$("#checkBtn").css("border", "2px solid rgb(223 70 129)")
						$("#checkBtn").css("color", "rgb(223 70 129)")
						//break;
					}
				}
			},
			error: function(e) {
				alert("AJAX Filed!");
				console.log(e);
			}
		});
	}
});




