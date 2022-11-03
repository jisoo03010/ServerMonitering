package com.example.springboot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.entity.MonitoringDB;
import com.example.demo.repository.UserRepository;

// 서버 모니터링 추출 관련

@Controller
public class HomeController {

	@RequestMapping("/index")
	public String Index() {

		return "index";
	}


	@Autowired
	public UserRepository userRepository;


	@ResponseBody
	@RequestMapping(value="/send", method = {RequestMethod.GET, RequestMethod.POST})
	public List<MonitoringDB>  DBRequesttest() {
		List<MonitoringDB> dbsend = userRepository.selectAllSQL();
		return dbsend; 
	}
	
	

    

}
