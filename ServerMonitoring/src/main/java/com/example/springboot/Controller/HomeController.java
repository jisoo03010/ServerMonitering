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
		return "index.html";
	}

	@Autowired
	private IMyUserDAO userDAO;

	@ResponseBody
	@RequestMapping(value = "/cpusend", method = { RequestMethod.GET, RequestMethod.POST })
	public List<MyUserDTO> CPUListPage(Model model) {
		List<MyUserDTO> CPUsend = userDAO.CPUlistDAO();

		return CPUsend;
	}

	@ResponseBody
	@RequestMapping(value = "/Memorysend", method = { RequestMethod.GET, RequestMethod.POST })
	public List<MyUserDTO> MemoryListPage(Model model) {
		List<MyUserDTO> Memorysend = userDAO.MemorylistDAO();

		return Memorysend;
	}

	@ResponseBody
	@RequestMapping(value = "/auth", method = { RequestMethod.GET, RequestMethod.POST })
	public int ArrayListInsert(String ServerName, String ServerIP, String ServerPort, String ServerIN,
			String ServerPw) {
		int ServerDBSend = userDAO.ArrayListInsertDAO(ServerName, ServerIP, ServerPort, ServerIN, ServerPw);
		System.out.println(
				"insert : " + ServerName + "," + ServerIP + "," + ServerPort + "," + ServerIN + "," + ServerPw);
		return ServerDBSend;

	}

	@ResponseBody
	@RequestMapping(value = "/ServerPepple", method = { RequestMethod.GET, RequestMethod.POST })
	public List<MyUserDTO> ServerPepple(Model model) {
		List<MyUserDTO> Serversend = userDAO.ServerListDAO();

		return Serversend;
	}
	@ResponseBody
	@RequestMapping(value = "/SelectServerName", method = { RequestMethod.GET, RequestMethod.POST })
	public List<MyUserDTO> SelectServerName(Model model) {
		List<MyUserDTO> Serversend = userDAO.SelectServerName();

		return Serversend;
	}
	@ResponseBody
	@RequestMapping(value = "/SelectForm", method = { RequestMethod.GET, RequestMethod.POST })
	public List<MyUserDTO> SelectFormData(String ServerName) {
		List<MyUserDTO> Serversend = userDAO.SelectFormDataDAO(ServerName);
		System.out.println("ajax 요청 도착!" + ":" + ServerName);
		return Serversend;
	}	

	@ResponseBody
	@RequestMapping(value = "/UpdateForm", method = { RequestMethod.GET, RequestMethod.POST })
	public int UpdateForm(String ServerName, String ServerIP, String ServerPort, String ServerIN, String ServerPw, String serverName2) {
		int Serversend = userDAO.UpdateFormDAO(ServerName, ServerIP, ServerPort, ServerIN, ServerPw, serverName2);
		System.out.println("udpate : " + ServerIN + "," + ServerName + "," + ServerPw + "," + ServerIP + "," + ServerPort + "," + serverName2);
		return Serversend;
	}
	

	//삭제 
	@ResponseBody
	@RequestMapping(value = "/DeleteForm", method = {  RequestMethod.POST })
	public int DeleteForm(String ServerName) {
		int Serversend = userDAO.DeleteFormDAO(ServerName);
		System.out.println("delete : " +  ServerName );
		return Serversend;
	}

}
