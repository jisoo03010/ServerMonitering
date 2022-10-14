<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="/common.css">
</head>
<body>
<div class="container">
        <header>
        	<img alt="header_img" src="/header_img.jpg">
        </header>
        <section>
            <div class="box_container">
                <div class="box" id="box1">
                    <div id="servermonitoring_img">
                    	<img alt="servermonitoring_img" src="https://www.poweradmin.com/images/svg/servmonlogo.svg">
                    </div>
                    <hr>
                    <div class="menu_bar_box">
                    	<ul>
                    		<li>
                    			<img alt="cpu_img" src="/cpu_icon.png"> <p> CPU 보기</p>
                    		</li>
                    		<li>
                    			<img alt="ram_img" src="/ram_icon.png"> <p> Memory 보기</p>
                    		</li>
                    	</ul>
                    </div>
                </div>
                <div class="box" id="box2">
                   <div id="chart_box1">
                    chart_box1
                   </div>
                   <div id="chart_box2">
                    chart_box2
                    </div>
                </div>
                <div class="box" id="box3"> 
                    <div id="pie_chart1" class="pie">
                        pie_chart1
                    </div>
                    <div id="pie_chart2" class="pie">
                        pie_chart2
                    </div>
                    <div id="pie_chart3" class="pie">
                        pie_chart3
                    </div>
                </div> 
            </div>
            
        </section>
        <footer>
        	<img alt="footer_img" src="/header_img.jpg"> 
        </footer>
        
    </div>
</body>
</html>