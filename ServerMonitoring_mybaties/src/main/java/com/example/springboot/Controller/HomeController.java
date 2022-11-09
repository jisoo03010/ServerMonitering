package com.example.springboot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.ResponseBody;

import com.example.springboot.jdbc.IMyUserDAO;
import com.example.springboot.jdbc.MyUserDTO;

// 서버 모니터링 추출 관련

@Controller
public class HomeController {

	@RequestMapping("/index")
	public String Index() {

		return "index";
	}

	@Autowired
	private IMyUserDAO userDAO;

	@ResponseBody
	@RequestMapping(value = "/send", method = {RequestMethod.GET, RequestMethod.POST})
	public List<MyUserDTO> userListPage(Model model) {
		List<MyUserDTO> dbsend = userDAO.listDAO();
		
		return dbsend;
	}

}
