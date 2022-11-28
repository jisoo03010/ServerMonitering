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

const myForm = document.querySelector("#myForm")// 폼
const input = document.querySelector("#inputText2"); //서버 이름
const ServerName = localStorage.getItem("ServerName");
let save = document.getElementById("save")


// 유효성 검사

addBox.addEventListener("click", function() {
	popup.style.display = "block"

})

function as() {
	inputText1.value = " "
	inputText2.value = " "
	inputText3.value = " "
	inputText4.value = " "
	inputText5.value = " "
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
let updateDatIcon = document.getElementById("updateDatIcon")
updateDatIcon.addEventListener("click", function() {
	alert("updateDatIcon 클릭함 !")
})
//server 정보 가져오는 ajax 영역
$.ajax({
	type: 'GET',
	url: "/ServerPepple",
	headers: { "content-type": "application/json" },
	dataType: 'json',
	success: function(data) {
		for (let i = 0; i < data.length; i++) {
			let serverName = data[i].serverName
			const createLi = document.createElement('li'); // img엘리먼트 생성
			document.querySelector('#menu_bar_box').appendChild(createLi); // div에 img태그 추가

			createLi.id = "MenuList" + i

			const imgTag = document.createElement('img'); // img엘리먼트 생성
			imgTag.setAttribute('src', './computer_icon.png'); // 속성 설정 방법 #1
			imgTag.id = "cpu_img"


			const creatediv = document.createElement('div');
			creatediv.id = "creatediv" + i
			const creatediv2 = document.createElement('div');
			creatediv2.id = "creatediv2" + i

			const updateDatIconImage = document.createElement('img'); // img엘리먼트 생성
			updateDatIconImage.setAttribute('src', './updateDatIcon.svg'); // 속성 설정 방법 #1
			updateDatIconImage.id = "updateDatIcon"

			const Textdivtag = document.createElement('div');
			Textdivtag.innerText = serverName

			let btn = document.getElementById('MenuList' + i) //li를 의미함 

			btn.appendChild(creatediv)
			btn.appendChild(creatediv2)
			creatediv.appendChild(imgTag)
			creatediv.appendChild(Textdivtag)
			creatediv2.appendChild(updateDatIconImage)

			//li태그 안에 닷트 아이콘 넣어야 함 js로 엘레멘츠 가져오기 !!!!먼저 해야함 
			//let updateDatIcon = document.getElementById("updateDatIcon")

			//	btn.appendChild(updateDatIcon)
			let creatediv_click = document.getElementById("creatediv" + i)
			creatediv_click.addEventListener("click", function() {
				alert(Textdivtag.innerText)
			})
			let creatediv2_click = document.getElementById("creatediv2" + i)
			creatediv2_click.addEventListener("click", function() {

				popup.style.display = "block"
				var myData = {
					ServerName: Textdivtag.innerText
				}
				$.ajax({
					url: "SelectForm",
					type: "post",
					dataType: "json",
					data: myData,
					success: function(data) {
						for (let i = 0; i < data.length; i++) {
							let serverName = data[i].serverName
							let ServerIP = data[i].ServerIP
							let ServerPort = data[i].ServerPort
							let ServerIN = data[i].ServerIN
							let ServerPw = data[i].ServerPw
							console.log(serverName);
							console.log(ServerPort);
							console.log(ServerIN);
							console.log(ServerPw);
							inputText1.value = serverName
							inputText2.value = ServerIP
							inputText3.value = ServerPort
							inputText4.value = ServerIN
							inputText5.value = ServerPw
						}

					},
					error: function(e) {
						alert("AJAX Filed!")
						console.log(e)
					}
				})


			})


		}

		// 서버 네임 클릭시 이벤트 발생 



		let j = 1;
		save.addEventListener("click", function() {
			let form = document.form1
			if (!form['ServerIN'].value) {
				alert("서버계정이 입력되지 않았습니다.")
				form['ServerIN'].focus()
				return false;
			} else if (!form['ServerName'].value) {
				alert("서버이름이 입력되지 않았습니다.")
				form['ServerName'].focus()
				return false;
			} else if (!form['ServerPw'].value) {
				alert("비밀번호가 입력되지 않았습니다.")
				form['ServerPw'].focus()
				return false;
			} else if (!form['ServerIP'].value) {
				alert("IP 주소를 입력되지 않았습니다.")
				form['ServerIP'].focus()
				return false;
			} else if (!form['ServerPort'].value) {
				alert("PORT번호를 입력되지 않았습니다.")
				form['ServerPort'].focus()
				return false;
			}
			alert("success!!")

			const createLi = document.createElement('li'); // img엘리먼트 생성
			document.querySelector('#menu_bar_box').appendChild(createLi); // div에 li태그 추가

			createLi.id = "newMenuList" + j

			const creatediv = document.createElement('div');
			creatediv.id = "creatediv" + j
			const creatediv2 = document.createElement('div');
			creatediv2.id = "creatediv2" + j
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

			let creatediv_click = document.getElementById("creatediv" + j)
			creatediv_click.addEventListener("click", function() {
				alert(Textdivtag.innerText)
				popup.style.display = "none"

			})

			//dat 이벤트 영역
			let creatediv2_click = document.getElementById("creatediv2" + j)
			creatediv2_click.addEventListener("click", function() {
				alert("다트 클릭함")
				popup.style.display = "block"
				//////////////

			})

		})

			j++





	},
	error: function(e) {
		alert("AJAX Filed!")
		console.log(e)
	}
})







