package com.example.springboot.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.ResponseBody;


// 서버 모니터링 추출 관련

@Controller
public class HomeController {

	@RequestMapping("/index")
	public String Index() {
		return "index.html";
	}


	@ResponseBody
	@RequestMapping(value = "/requeststring", method = { RequestMethod.GET })
	public String  ServerPepple(@RequestParam String id) {
		
		 return "Get id : " + id;
	}

	
	
/*
	@ResponseBody
	@RequestMapping(value = "/UserServerInfo", method = { RequestMethod.POST })
	public String UserServerInfoInsert(float CpuUsage, float MemoryFreespace, float MemoryTotalSpace, float CpuCore,
			  float CpuProcessors, String ServerName ) {
		
		int ServerDBSend = userDAO.UserServerInfo(CpuUsage,	MemoryFreespace, MemoryTotalSpace,
				CpuCore, CpuProcessors, ServerName);
		System.out.println(ServerDBSend);
		if (ServerDBSend == 0) {
			return "Failed data receive";
		} else {

			return "Success data receive";
		}

	}*/
	

}
