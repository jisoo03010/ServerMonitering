let addBox = document.getElementById("addBox");
let popup = document.getElementById("popup");
let close_icon = document.getElementById("close_icon");
let Cancell = document.getElementById("Cancell");
let inputText1 = document.getElementById("inputText1");
let inputText2 = document.getElementById("inputText2");
let inputText3 = document.getElementById("inputText3");
let inputText4 = document.getElementById("inputText4");
let inputText5 = document.getElementById("inputText5");
let LocalMyPC = document.getElementById("LocalMyPC");
let menu_bar_box = document.querySelector('#menu_bar_box li');

let checkBtn = document.getElementById("checkBtn"); // 중복 체크 버튼
const myForm = document.querySelector("#myForm"); // 폼
let save = document.getElementById("save");
let inputButton = document.getElementById("inputButton"); //버튼을 감싸고 있는  div 태그 


// 삭제 버튼 생성
const deleteBtn = document.createElement('input');
deleteBtn.value = "삭제";
deleteBtn.type = "submit";
deleteBtn.id = "deleteBtn";
inputButton.appendChild(deleteBtn);

let deleteBtnc = document.getElementById("deleteBtn");



addBox.addEventListener("click", function() {
	popup.style.display = "block";
	save.style.background = "#dce6f2";
	save.style.color = "#5f83bc";
	save.value = "등록";
	//inputText2.disabled = false
	checkBtn.style.background = "#fff8b9";
	checkBtn.style.display = "block";
	deleteBtn.style.display = "none";
	as();
});

function as() {
	inputText1.value = "";
	inputText2.value = "";
	inputText3.value = "";
	inputText4.value = "";
	inputText5.value = "";
};

close_icon.addEventListener("click", function() {
	popup.style.display = "none";
	as();
});

Cancell.addEventListener("click", function() {
	popup.style.display = "none";
	as();
});

LocalMyPC.addEventListener("click", function() {
	popup.style.display = "none";
});



//server 정보 가져오는 ajax 영역
$.ajax({
	type: 'GET',
	url: "/ServerPepple",
	headers: { "content-type": "application/json" },
	dataType: 'json',
	success: function(data) {
			console.log(data)
		//데이터 유무 
		// 유저 정보에 대한 db가 모두 select됨
		for (let i = 0; i < data.length; i++) {
			let serverName = data[i].serverName;//모든 서버 네임을 가져옴
			//$('#menu_bar_box').append('<li id="MenuList'+i+'"><div><img alt="ram_img" src="./add_box.png" id="ram_img"><div class=menu>'+serverName+'</div></div><div><img src=./updateDatIcon.svg id=updateDatIcon></div></li>');
		
			const createLi = document.createElement('li'); // li엘리먼트 생성
			document.querySelector('#menu_bar_box').appendChild(createLi); // ul태그 안에 생성한 li넣기

			createLi.id = "MenuList" + i; //생성한 li태그에 아이디 보여 ( id는 겹치지 않도록 i를 넣어줌)

			const imgTag = document.createElement('img'); // img태그 생성
			imgTag.setAttribute('src', './computer_icon.png'); // img태그 속성지정
			imgTag.id = "cpu_img"; //img태그에 id부여 


			const creatediv = document.createElement('div'); // 왼쪽 사이드 메뉴에 들어갈 아이콘과 텍스트 영역 박스 생성
			creatediv.id = "creatediv" + i;
			const creatediv2 = document.createElement('div'); // 닷트 아이콘이 들어갈 영역ㄴ
			creatediv2.id = "creatediv2" + i;

			const updateDatIconImage = document.createElement('img'); // img엘리먼트 생성
			updateDatIconImage.setAttribute('src', './updateDatIcon.svg'); // 닷트 아이콘 속성을 img태그 안에 지정
			updateDatIconImage.id = "updateDatIcon" // 닷트 이미지의 아이디를 updateDatIcon로 지정 

			const Textdivtag = document.createElement('div'); // li에 서버네임이 들어갈 영역
			console.log(serverName)
			Textdivtag.innerText = serverName;
			Textdivtag.id = serverName;
			let btn = document.getElementById('MenuList' + i); //li를 의미함 


			btn.appendChild(creatediv);
			btn.appendChild(creatediv2);
			creatediv.appendChild(imgTag);
			creatediv.appendChild(Textdivtag);
			creatediv2.appendChild(updateDatIconImage);

			///////////////
			//li태그 클릭 이벤트 영역
			let creatediv_click1 = document.getElementById("creatediv" + i);
			creatediv_click1.addEventListener("click", function() {
				alert(Textdivtag.innerText);
			});
			///////////////	///////////////	///////////////	///////////////	///////////////

			//닷트 아이콘 클릭 이벤트 영역
			let creatediv2_click = document.getElementById("creatediv2" + i);
			creatediv2_click.addEventListener("click", function() {
				save.style.background = "#fff8b9";
				save.style.color = "#d6a64e";
				checkBtn.style.display = "block";
				checkBtn.style.background = "rgb(255, 248, 185)";
				popup.style.display = "block";
				save.value = "수정";

				//delete 이벤트 영역
				deleteBtn.style.display = "block";

				var myData = {
					ServerName: Textdivtag.innerText
				};
				$.ajax({
					url: "/SelectForm",
					type: "post",
					dataType: "json",
					data: myData,
					success: function(data) {
						let serverName = data[0]['serverName'];
						localStorage.setItem("key", serverName);
						let ServerIP = data[0]['serverIP'];
						let ServerPort = data[0]['serverPort'];
						let ServerIN = data[0]['serverIN'];
						let ServerPw = data[0]['serverPw'];
						inputText1.value = ServerIN;
						inputText2.value = serverName;
						inputText3.value = ServerPw;
						inputText4.value = ServerIP;
						inputText5.value = ServerPort;

					},
					error: function(e) {
						alert("AJAX Filed!");
						console.log(e);
					}
				});
				


			});
			///////////////	///////////////	///////////////	///////////////	///////////////


			//삭제 버튼 이벤트 영역
			let leftSideMenuText = document.getElementById(serverName);
			deleteBtnc.addEventListener("click", function() {
				var deData = {
					ServerName: inputText2.value
				};
				$.ajax({
					url: "/DeleteForm",
					type: "post",
					dataType: "json",
					data: deData,
					success: function(data) {

						console.log(leftSideMenuText.innerText)
						if (deData.ServerName == leftSideMenuText.innerText) {
							leftSideMenuText.parentNode.parentNode.remove();
							popup.style.display = "none";
						};
					}
				});

			});

		};///////////////////////////여기까지가 모든 서버 정보를 가져올 수 있게 하는 for문


		// 여기서 부터는 리셋하지 않고 save버튼 바로 클릭했을때 실행되는 이벤트 영역이다
		// 저장 버튼을 클릭하는 동시에 왼쪽 메뉴바에 나타나게 된다.

		//증가 값 
		var j = 0;
		//save 아이디 버튼을 클릭했을때
		save.addEventListener("click", function(event) {
			//유효성 검사 
			let str_space = /\s/;
			let form = document.form1;
			if (!form['ServerName'].value || str_space.exec(form['ServerName'].value)) {
				alert("서버이름이 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
				form['ServerName'].focus();
				form['ServerName'].value = form['ServerName'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			} else if (checkBtn.style.background == "rgb(255, 248, 185)") {
				alert("중복 확인을 클릭해주세요");
				checkBtn.focus();
				event.preventDefault();
				return false;
			} else if (!form['ServerIN'].value || str_space.exec(form['ServerIN'].value)) {
				alert("서버계정이 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
				form['ServerIN'].focus();
				form['ServerIN'].value = form['ServerIN'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			} else if (!form['ServerPw'].value || str_space.exec(form['ServerPw'].value) || form['ServerPw'].value.length != 4) {
				alert("비밀번호가 입력되지 않았거나 텍스트의 개수를 맞춰주세요 아님 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.");
				form['ServerPw'].focus();
				form['ServerPw'].value = form['ServerPw'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			} else if (!form['ServerIP'].value || str_space.exec(form['ServerIP'].value)) {
				alert("IP주소가 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.");
				form['ServerIP'].focus();
				form['ServerIP'].value = form['ServerIP'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			} else if (!form['ServerPort'].value || str_space.exec(form['ServerPort'].value)) {
				alert("port번호가 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.");
				form['ServerPort'].focus();
				form['ServerPort'].value = form['ServerPort'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			}
			alert("success!!");
			if (save.value == "등록") {

				const createLi = document.createElement('li'); // img엘리먼트 생성
				document.querySelector('#menu_bar_box').appendChild(createLi); // div에 li태그 추가

				createLi.id = "newMenuList" + j;

				const creatediv = document.createElement('div');
				creatediv.id = "newcreatediv" + j;
				const creatediv2 = document.createElement('div');
				creatediv2.id = "newcreatediv2" + j;

				// 아이디 존재 여부 버튼 생성하기

				const imgTag = document.createElement('img'); // img엘리먼트 생성
				imgTag.setAttribute('src', './computer_icon.png'); // 속성 설정 방법 #1
				imgTag.id = "cpu_img";


				//닷트 이미지 
				const updateDatIconImage = document.createElement('img'); // img엘리먼트 생성
				updateDatIconImage.setAttribute('src', './updateDatIcon.svg'); // 속성 설정 방법 #1
				updateDatIconImage.id = "updateDatIcon";


				const Textdivtag = document.createElement('div');
				let inputTextvalue = document.getElementById("inputText2").value;
				Textdivtag.innerText = inputTextvalue;
				Textdivtag.id = inputTextvalue;

				let btn1 = document.getElementById('newMenuList' + j); //save했을때 생성될 li를 의미함 
				btn1.appendChild(creatediv);
				btn1.appendChild(creatediv2);
				creatediv.appendChild(imgTag);
				creatediv.appendChild(Textdivtag);
				creatediv2.appendChild(updateDatIconImage);

				// 증가 값 =======


				// li태그 중 리스트에 해당하는 영역 
				let creatediv_click2 = document.getElementById("newcreatediv" + j);
				creatediv_click2.addEventListener("click", function() {
					alert(Textdivtag.innerText);

				});
				// 닷트 아이콘에 해당하는 영역 
				//닷트 사이드 메뉴 ... 아이콘을 클릭했을때 
				let creatediv2_click = document.getElementById("newcreatediv2" + j);

				j++;
				creatediv2_click.addEventListener("click", function() {
					popup.style.display = "block";
					deleteBtn.style.display = "block";
					checkBtn.style.display = "block";

					checkBtn.style.background = "rgb(255, 248, 185)";
					//save input태그의 수정으로 변환하기 위한 스타일 지정
					save.style.background = "#fff8b9";
					save.style.color = "#d6a64e";
					save.value = "수정"; // save input태그의 text를 수정으로 변경함



					var myData = {
						ServerName: Textdivtag.innerText
					};
					$.ajax({
						url: "/SelectForm",
						type: "post",
						dataType: "json",
						data: myData,
						success: function(data) {
							let serverName = data[0]['serverName'];
							let ServerIP = data[0]['serverIP'];
							let ServerPort = data[0]['serverPort'];
							let ServerIN = data[0]['serverIN'];
							let ServerPw = data[0]['serverPw'];
							localStorage.setItem("key", serverName);
							inputText1.value = ServerIN;
							inputText2.value = serverName;

							inputText3.value = ServerPw;
							inputText4.value = ServerIP;
							inputText5.value = ServerPort;

						},
						error: function(e) {
							alert("AJAX Filed!")
							console.log(e)
						}
					});

					//삭제 버튼 이벤트 영역
					let leftSideMenuText = document.getElementById(inputTextvalue);
					console.log(leftSideMenuText);
					deleteBtnc.addEventListener("click", function() {
						var deData = {
							ServerName: inputText2.value
						};
						$.ajax({
							url: "/DeleteForm",
							type: "post",
							dataType: "json",
							data: deData,
							success: function(data) {
								if (deData.ServerName == leftSideMenuText.innerText) {
									leftSideMenuText.parentNode.parentNode.remove();
									popup.style.display = "none";
								}
							}
						});

					});

				});





			} else if (save.value == "수정") {

				$.ajax({
					url: "/SelectServerName",
					type: "post",
					dataType: "json",
					success: function(data) {

						for (let d = 0; d < data.length; d++) {
							//내가 클릭한 li태그 자식요소 div태그 안에 텍스트를 신규로 생성하려는 inputText2.value로 지정해야함

							let serverName = data[d].serverName;
							if (serverName == localStorage.getItem('key')) {

								console.log(serverName);
								let serverNameID = document.getElementById(serverName); // 얘가 포함된 부모요소 태그를 가져옴

								console.log(serverNameID);
								console.log(inputText2.value);
								serverNameID.innerText = inputText2.value;
								serverNameID.id = inputText2.value;
							};

						};

						popup.style.display = "none";
					}
				});
			}
			popup.style.display = "none";
		}); /// save btn 이벤ㄴ트 끝나는 지점


	}, // 모든 멤버를 가져왔을때 success영역이 끝나는 지점
	error: function(e) { // 모든 멤버를 가져오지 못했을때 실행되는 이벤트 영역
		// 멤버가 단 1명도 존재하지 않을경우 
		console.log(e);
	}
});


///////////////////////////////////아예 분리 

//중복값 이벤트
checkBtn.addEventListener("click", function() {

	if (save.value == "등록") {
		$.ajax({
			url: "/SelectServerName",
			type: "post",
			dataType: "json",
			success: function(data) {
				// 중복 버튼 클릭시 실행되는 이벤트 영역	
				// 중복 버튼 클릭시 실행되는 이벤트 영역
				if (data.length == 0) {
					console.log("아무런 멤버가 존재하지 않습니다.");

					checkBtn.addEventListener("click", function() {
						// 중복버튼 클릭시 서버네임이 입력되어 있지 않을때 실행되는 경고창

						if (inputText2.value == "") {
							console.log("값이 없습니다");
							inputText2.focus();
							alert("서버 이름을 적어주세요");
						} else {
							console.log("값이 있습니다." + inputText2.value);
							//등록되어있는 서버네임이 == 서버네임 입려칸에 입력된 text가 같을때 실행
							checkBtn.style.background = "green";
						};

					});
				} else {



					for (var d = 0; d < data.length; d++) {
						var serverName = data[d].serverName;

						// 중복버튼 클릭시 서버네임이 입력되어 있지 않을때 실행되는 경고창
						if (inputText2.value == "") {
							inputText2.focus();
							alert("서버 이름을 적어주세요");
							break;
						} else {

							//등록되어있는 서버네임이 == 서버네임 입려칸에 입력된 text가 같을때 실행
							console.log(localStorage.getItem('key'))
							console.log(inputText2.value)
							console.log(localStorage.getItem('key') == inputText2.value)
							console.log("================\n")
							console.log(localStorage.getItem('key') == inputText2.value)
							console.log("================\n")

							if (serverName == inputText2.value) { // 트루 나옴 
								// 사용할 수 없다는 것을 표현하기 위함
								checkBtn.style.background = "rgb(255, 248, 185)";
								inputText2.focus();
								break;
							} else if (serverName != inputText2.value) {
								// 사용할 수 있다는 것을 표현하기 위함
								checkBtn.style.background = "green";
								continue;

							}
						}
					};


				}
			},
			error: function(e) {
				alert("AJAX Filed!");
				console.log(e);
			}
		});
	} else if (save.value == "수정") {
		$.ajax({
			url: "/SelectServerName",
			type: "post",
			dataType: "json",
			success: function(data) {
				// 중복 버튼 클릭시 실행되는 이벤트 영역	
				for (let d = 0; d < data.length; d++) {
					let serverName = data[d].serverName;

					// 중복버튼 클릭시 서버네임이 입력되어 있지 않을때 실행되는 경고창
					if (inputText2.value == "") {
						inputText2.focus();
						alert("서버 이름을 적어주세요");
						break;
					} else {

						//등록되어있는 서버네임이 == 서버네임 입려칸에 입력된 text가 같을때 실행
						console.log(localStorage.getItem('key'))
						console.log(inputText2.value)
						console.log(localStorage.getItem('key') == inputText2.value)
						console.log("================\n")
						console.log(localStorage.getItem('key') == inputText2.value)
						console.log("================\n")

						if (serverName != inputText2.value || localStorage.getItem('key') == inputText2.value) {
							// 사용할 수 있다는 것을 표현하기 위함
							checkBtn.style.background = "green";
							continue;

						} else if (serverName == inputText2.value ) {
							checkBtn.style.background = "rgb(255, 248, 185)";
							inputText2.focus(); 
							break;
						}
					}
				};
			},
			error: function(e) {
				alert("AJAX Filed!");
				console.log(e);
			}
		});
	}
});






