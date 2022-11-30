let addBox = document.getElementById("addBox")
let popup = document.getElementById("popup")
let close_icon = document.getElementById("close_icon")
let deleteBTN = document.getElementById("delete")
let inputText1 = document.getElementById("inputText1")
let inputText2 = document.getElementById("inputText2")
let inputText3 = document.getElementById("inputText3")
let inputText4 = document.getElementById("inputText4")
let inputText5 = document.getElementById("inputText5")
let LocalMyPC = document.getElementById("LocalMyPC")
let menu_bar_box = document.querySelector('#menu_bar_box li')

let checkBtn = document.getElementById("checkBtn")
const myForm = document.querySelector("#myForm")// 폼
const input = document.querySelector("#inputText2"); //서버 이름
const ServerName = localStorage.getItem("ServerName");
let save = document.getElementById("save")




// 유효성 검사

addBox.addEventListener("click", function() {
	popup.style.display = "block"
	save.style.background = "#dce6f2"
	save.style.color = "#5f83bc"
	save.value = "등록"
	inputText2.disabled = false
	checkBtn.style.background = "#fff8b9"
	checkBtn.style.display = "block"
	as()
})

function as() {
	inputText1.value = ""
	inputText2.value = ""
	inputText3.value = ""
	inputText4.value = ""
	inputText5.value = ""
}

close_icon.addEventListener("click", function() {
	popup.style.display = "none"
	as()
})

deleteBTN.addEventListener("click", function() {
	popup.style.display = "none"
	as()
})
LocalMyPC.addEventListener("click", function() {
	popup.style.display = "none"
})

// save 아이디 버튼을 클릭했을때 유효성 검사가 되도록




//server 정보 가져오는 ajax 영역
$.ajax({
	type: 'GET',
	url: "/ServerPepple",
	headers: { "content-type": "application/json" },
	dataType: 'json',
	success: function(data) {
		// 유저 정보에 대한 db가 모두 select됨
		for (let i = 0; i < data.length; i++) {
			let serverName = data[i].serverName //모든 서버 네임을 가져옴
			const createLi = document.createElement('li'); // li엘리먼트 생성
			document.querySelector('#menu_bar_box').appendChild(createLi); // ul태그 안에 생성한 li넣기

			createLi.id = "MenuList" + i //생성한 li태그에 아이디 보여 ( id는 겹치지 않도록 i를 넣어줌)

			const imgTag = document.createElement('img'); // img태그 생성
			imgTag.setAttribute('src', './computer_icon.png'); // img태그 속성지정
			imgTag.id = "cpu_img" //img태그에 id부여 


			const creatediv = document.createElement('div'); // 왼쪽 사이드 메뉴에 들어갈 아이콘과 텍스트 영역 박스 생성
			creatediv.id = "creatediv" + i
			const creatediv2 = document.createElement('div'); // 닷트 아이콘이 들어갈 영역ㄴ
			creatediv2.id = "creatediv2" + i

			const updateDatIconImage = document.createElement('img'); // img엘리먼트 생성
			updateDatIconImage.setAttribute('src', './updateDatIcon.svg'); // 닷트 아이콘 속성을 img태그 안에 지정
			updateDatIconImage.id = "updateDatIcon" // 닷트 이미지의 아이디를 updateDatIcon로 지정 

			const Textdivtag = document.createElement('div'); // li에 서버네임이 들어갈 영역
			Textdivtag.innerText = serverName

			let btn = document.getElementById('MenuList' + i) //li를 의미함 

			btn.appendChild(creatediv)
			btn.appendChild(creatediv2)
			creatediv.appendChild(imgTag)
			creatediv.appendChild(Textdivtag)
			creatediv2.appendChild(updateDatIconImage)


			//li태그 클릭 이벤트 영역
			let creatediv_click = document.getElementById("creatediv" + i)
			creatediv_click.addEventListener("click", function() {
				alert(Textdivtag.innerText)
			})


			//닷트 아이콘 클릭 이벤트 영역
			let creatediv2_click = document.getElementById("creatediv2" + i)
			creatediv2_click.addEventListener("click", function() {
				save.style.background = "#fff8b9"
				save.style.color = "#d6a64e"
				checkBtn.style.display = "none"
				popup.style.display = "block"
				save.value = "수정"
				var myData = {
					ServerName: Textdivtag.innerText
				}
				$.ajax({
					url: "SelectForm",
					type: "post",
					dataType: "json",
					data: myData,
					success: function(data) {
						let serverName = data[0]['serverName']
						let ServerIP = data[0]['serverIP']
						let ServerPort = data[0]['serverPort']
						let ServerIN = data[0]['serverIN']
						let ServerPw = data[0]['serverPw']
						inputText2.disabled = true
						inputText1.value = ServerIN
						inputText2.value = serverName
						inputText3.value = ServerPw
						inputText4.value = ServerIP
						inputText5.value = ServerPort

					},
					error: function(e) {
						alert("AJAX Filed!")
						console.log(e)
					}
				})


			})


		}







		//증가 값 
		let j = 1;
		let k = 1;
		//save 아이디 버튼을 클릭했을때
		// 버튼의 text가 등록이면 : insert 관련 코드가
		// 버튼의 text가 수정이면 : update 관련 코드가 
		save.addEventListener("click", function(event) {
			console.log(checkBtn.style.background)


			let str_space = /\s/;
			let form = document.form1
			if (!form['ServerIN'].value || str_space.exec(form['ServerIN'].value)) {
				alert("서버계정이 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
				form['ServerIN'].focus()
				form['ServerIN'].value = form['ServerIN'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			} else if (!form['ServerName'].value || str_space.exec(form['ServerName'].value)) {
				alert("서버이름이 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
				form['ServerName'].focus()
				form['ServerName'].value = form['ServerName'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;


			} else if (checkBtn.style.background == "rgb(255, 248, 185)") {
				alert("중복 확인을 클릭해주세요")
				checkBtn.focus()
				event.preventDefault();
				return false;


			} else if (!form['ServerPw'].value || str_space.exec(form['ServerPw'].value)) {
				alert("비밀번호가 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
				form['ServerPw'].focus()
				form['ServerPw'].value = form['ServerPw'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			} else if (!form['ServerIP'].value || str_space.exec(form['ServerIP'].value)) {
				alert("IP주소가 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
				form['ServerIP'].focus()
				form['ServerIP'].value = form['ServerIP'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			} else if (!form['ServerPort'].value || str_space.exec(form['ServerPort'].value)) {
				alert("port번호가 입력되지 않았거나 공백이 있습니다.\n공백은 자동적으로 제거 됩니다.")
				form['ServerPort'].focus()
				form['ServerPort'].value = form['ServerPort'].value.replace(' ', ''); // 공백제거
				event.preventDefault();
				return false;
			}
			alert("success!!")

			if (save.value == "등록") {

				const createLi = document.createElement('li'); // img엘리먼트 생성
				document.querySelector('#menu_bar_box').appendChild(createLi); // div에 li태그 추가

				createLi.id = "newMenuList" + j

				const creatediv = document.createElement('div');
				creatediv.id = "newcreatediv" + j
				const creatediv2 = document.createElement('div');
				creatediv2.id = "newcreatediv2" + j

				// 아이디 존재 여부 버튼 생성하기

				const imgTag = document.createElement('img'); // img엘리먼트 생성
				imgTag.setAttribute('src', './computer_icon.png'); // 속성 설정 방법 #1
				imgTag.id = "cpu_img"


				//닷트 이미지 
				const updateDatIconImage = document.createElement('img'); // img엘리먼트 생성
				updateDatIconImage.setAttribute('src', './updateDatIcon.svg'); // 속성 설정 방법 #1
				updateDatIconImage.id = "updateDatIcon"


				const Textdivtag = document.createElement('div');
				let inputTextvalue = document.getElementById("inputText2").value
				Textdivtag.innerText = inputTextvalue

				let btn1 = document.getElementById('newMenuList' + j) //li를 의미함 

				btn1.appendChild(creatediv)
				btn1.appendChild(creatediv2)
				creatediv.appendChild(imgTag)
				creatediv.appendChild(Textdivtag)
				creatediv2.appendChild(updateDatIconImage)

				// 증가 값 =======

				j++
				// li태그 중 리스트에 해당하는 영역 
				let creatediv_click = document.getElementById("newcreatediv" + k)
				creatediv_click.addEventListener("click", function() {
					alert(Textdivtag.innerText)

				})
				// 닷트 아이콘에 해당하는 영역 
				//닷트 사이드 메뉴 ... 아이콘을 클릭했을때 
				let creatediv2_click = document.getElementById("newcreatediv2" + k)
				creatediv2_click.addEventListener("click", function() {
					alert("다트 클릭함")
					popup.style.display = "block"

					checkBtn.style.display = "none"
					//save input태그의 수정으로 변환하기 위한 스타일 지정
					save.style.background = "#fff8b9"
					save.style.color = "#d6a64e"
					save.value = "수정" // save input태그의 text를 수정으로 변경함
					// Textdivtag : 왼쪽 사이드 메뉴에 해당하는 li태그 안에 text 즉, serverName을 말함

					console.log(Textdivtag.innerText)
					var myData = {
						ServerName: Textdivtag.innerText
					}

					//ajax serverName 값을 파라미터로 넘김으로써, serverName에 맞는 모든 데이터를 가져오는 영역
					$.ajax({
						url: "SelectForm",
						type: "post",
						dataType: "json",
						data: myData,
						success: function(data) {
							let serverName = data[0]['serverName']
							let ServerIP = data[0]['serverIP']
							let ServerPort = data[0]['serverPort']
							let ServerIN = data[0]['serverIN']
							let ServerPw = data[0]['serverPw']
							inputText1.value = ServerIN
							inputText2.value = serverName
							inputText3.value = ServerPw
							inputText4.value = ServerIP
							inputText5.value = ServerPort

							inputText2.disabled = true
						},
						error: function(e) {
							alert("AJAX Filed!")
							console.log(e)
						}
					})

					k++
				})
			} else if (save.value == "수정") {

			} else {
				console.log("에러 발생")
			}



			//save input 태그를 클릭하면 팝업창 받음
			popup.style.display = "none"
		})


	},
	error: function(e) {
		alert("AJAX Filed!")
		console.log(e)
	}
})





$.ajax({
	url: "SelectServerName",
	type: "post",
	dataType: "json",
	success: function(data) {
		checkBtn.addEventListener("click", function() {
			for (var d = 0; d < data.length; d++) {
				var serverName = data[d].serverName


				if (inputText2.value == "") {
					inputText2.focus()
					alert("서버 이름을 적어주세요")
					break;
				} else {
					console.log(serverName)
					if (serverName == inputText2.value) { // 트루 나옴 
						console.log("사용할 수 없는 아이디입니다.")
						checkBtn.style.background = "rgb(255, 248, 185)"
						inputText2.focus()
						break;
					} else if (serverName != inputText2.value) {
						console.log("serverName : " + serverName)
						console.log("inputText2.value : " + inputText2.value)
						console.log(serverName != inputText2.value)
						console.log("사용할 수 있는 아이디입니다.")
						checkBtn.style.background = "green"
						continue;

					}
				}
			}
		})
	},
	error: function(e) {
		alert("AJAX Filed!")
		console.log(e)
	}
})







