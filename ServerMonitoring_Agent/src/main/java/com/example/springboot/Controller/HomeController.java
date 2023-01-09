package com.example.springboot.Controller;

import java.net.InetAddress;
import java.util.ArrayList;
import java.util.List;
import java.net.UnknownHostException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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
	@RequestMapping(value = "/LocalCpuSend", method = { RequestMethod.GET })
	public List<MyUserDTO> LocalCPUListPage() {
		String ServerNamed = null;

		try {
			ServerNamed = InetAddress.getLocalHost().getHostName();
			List<MyUserDTO> CpuSend = userDAO.CpuSend(ServerNamed);
			return CpuSend;
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return null;
	}
	@ResponseBody
	@RequestMapping(value = "/LocalMemorySend", method = { RequestMethod.GET })
	public List<MyUserDTO> LocalMemoryListPage() {
		String ServerNamed = null;

		try {
			ServerNamed = InetAddress.getLocalHost().getHostName();
			List<MyUserDTO> MemorySend = userDAO.MemorySend(ServerNamed);
			return MemorySend;
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return null;
	}

	ArrayList sn = new ArrayList<String>();

	@ResponseBody
	@RequestMapping(value = "/CpuSend", method = { RequestMethod.GET })
	public List<MyUserDTO> CPUListPage(String ServerName) {

		if (ServerName == null) {
			for (int i = 0; i < sn.size(); i++) {
				String name = String.valueOf(sn.get(sn.size() - 1));
				List<MyUserDTO> ServerNames = userDAO.CpuSend(name);
				System.out.println("sn.get(sn.size() - 1) : " + sn.get(sn.size() - 1));
				return ServerNames;
			}
		} else {
			sn.add(ServerName);
			System.out.println(sn);

		}

		return sn;

	}

	@ResponseBody
	@RequestMapping(value = "/MemorySend", method = { RequestMethod.GET })
	public List<MyUserDTO> MemoryListPage(String ServerName) {
		//

		if (ServerName == null) {
			for (int i = 0; i < sn.size(); i++) {
				String name = String.valueOf(sn.get(sn.size() - 1));
				List<MyUserDTO> ServerNames = userDAO.MemorySend(name);
				return ServerNames;
			}
		} else {
			sn.add(ServerName);
		}
		// String ServerName = null;
		/*
		 * try { ServerName = InetAddress.getLocalHost().getHostName(); List<MyUserDTO>
		 * MemorySend = userDAO.MemorySend(ServerName); System.out.println(ServerName);
		 * return MemorySend; } catch (UnknownHostException e) { e.printStackTrace(); }
		 * return null;
		 */
		return sn;
	}

	@ResponseBody
	@RequestMapping(value = "/Auth", method = { RequestMethod.POST })
	public String ArrayListInsert(String ServerName, String ServerIP, String ServerPort, String ServerIN,
			String ServerPw) {
		int ServerDBSend = userDAO.Auth(ServerName, ServerIP, ServerPort, ServerIN, ServerPw);
		System.out.println(
				"insert : " + ServerName + "," + ServerIP + "," + ServerPort + "," + ServerIN + "," + ServerPw);

		if (ServerDBSend == 0) {
			return "Failed data receive";
		} else {

			return "Success data receive";
		}

	}

	@ResponseBody
	@RequestMapping(value = "/ServerPeople", method = { RequestMethod.GET })
	public List<MyUserDTO> ServerPepple(Model model) {
		List<MyUserDTO> Serversend = userDAO.ServerPeople();

		return Serversend;
	}

	@ResponseBody
	@RequestMapping(value = "/SelectServerName", method = { RequestMethod.GET })
	public List<MyUserDTO> SelectServerName(Model model) {
		List<MyUserDTO> Serversend = userDAO.SelectServerName();
		return Serversend;
	}

	@ResponseBody
	@RequestMapping(value = "/SelectForm", method = { RequestMethod.GET })
	public List<MyUserDTO> SelectFormData(String ServerName) {
		List<MyUserDTO> Serversend = userDAO.SelectForm(ServerName);
		System.out.println("ajax 요청 도착!" + ":" + ServerName);
		return Serversend;
	}

	@ResponseBody
	@RequestMapping(value = "/UpdateForm", method = { RequestMethod.POST })
	public String UpdateForm(String ServerName, String ServerIP, String ServerPort, String ServerIN, String ServerPw,
			String serverName2) {
		int Serversend = userDAO.UpdateForm(ServerName, ServerIP, ServerPort, ServerIN, ServerPw, serverName2);
		System.out.println("update : " + ServerIN + "," + ServerName + "," + ServerPw + "," + ServerIP + ","
				+ ServerPort + "," + serverName2);
		if (Serversend == 0) {
			return "Failed update";
		} else {

			return "Success update";
		}
	}

	// 삭제
	@ResponseBody
	@RequestMapping(value = "/DeleteForm", method = { RequestMethod.POST })
	public String DeleteForm(String ServerName) {
		int Serversend = userDAO.DeleteForm(ServerName);
		System.out.println("delete : " + ServerName);
		if (Serversend == 0) {
			return "Failed delete";
		} else {

			return "success delete";
		}
	}

	/*
	 * @ResponseBody
	 * 
	 * @RequestMapping(value = "/UserServerInfo", method = { RequestMethod.POST })
	 * public String UserServerInfoInsert(float CpuUsage, float MemoryFreespace,
	 * float MemoryTotalSpace, float CpuCore, float CpuProcessors, String ServerName
	 * ) {
	 * 
	 * int ServerDBSend = userDAO.UserServerInfo(CpuUsage, MemoryFreespace,
	 * MemoryTotalSpace, CpuCore, CpuProcessors, ServerName);
	 * System.out.println(ServerDBSend); if (ServerDBSend == 0) { return
	 * "Failed data receive"; } else {
	 * 
	 * return "Success data receive"; }
	 * 
	 * }
	 */
	@ResponseBody
	@RequestMapping(value = "/requeststring", method = { RequestMethod.GET })
	public String ServerPepple(@RequestParam String cpuusage, @RequestParam String cpucore,
			@RequestParam String cpuprocessors, @RequestParam String memoryfreespace,
			@RequestParam String memorytotalspace) {

		return "Get id : " + cpuusage + ", " + cpucore + ", " + cpuprocessors + ", " + memoryfreespace + ", "
				+ memorytotalspace;
	}

}
