package com.example.java;

import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;
import java.net.InetAddress;
import java.net.UnknownHostException;

import org.apache.ibatis.annotations.Mapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.springboot.jdbc.IMyUserDAO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component // 스프링 컴포넌트 클래스를 지정함
@Controller
public class Monitoring {

	JSONObject jo = new JSONObject();
	JSONArray arr = new JSONArray();

	@Scheduled(fixedDelay = 1000, initialDelay = 5000)
	@ResponseBody
	@RequestMapping(value = "/requeststring", method = { RequestMethod.POST })
	public String ServerPepple() {

		OperatingSystemMXBean operatingSystemMXBean = (com.sun.management.OperatingSystemMXBean) ManagementFactory
				.getOperatingSystemMXBean();

		int availableProcessors = Runtime.getRuntime().availableProcessors();

		String CpuUsage = String.format("%.2f",
				((com.sun.management.OperatingSystemMXBean) operatingSystemMXBean).getSystemCpuLoad() * 100);
		String MemoryFreespace = String.format("%.2f",
				(double) ((com.sun.management.OperatingSystemMXBean) operatingSystemMXBean).getFreePhysicalMemorySize()
						/ 1024 / 1024 / 1024);
		String MemoryTotalSpace = String.format("%.2f",
				(double) ((com.sun.management.OperatingSystemMXBean) operatingSystemMXBean).getTotalPhysicalMemorySize()
						/ 1024 / 1024 / 1024);
		// 논리프로세서 개수
		int CpuProcessors = availableProcessors;
		// 코어 개수
		int CpuCore = availableProcessors / 2;
		
		
		// 컴퓨터의 이름을 가져오는 영역
		String ServerName = null;
		try {
			ServerName = InetAddress.getLocalHost().getHostName();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}



		return UserServerInfoInsert(CpuUsage, MemoryFreespace, MemoryTotalSpace, CpuCore, CpuProcessors, ServerName);
	}

	@Autowired
	private IMyUserDAO userDAO;

	@ResponseBody
	@RequestMapping(value = "/UserServerInfo", method = { RequestMethod.POST })
	public String UserServerInfoInsert(String CpuUsage, String MemoryFreespace, String MemoryTotalSpace, float CpuCore,
			float CpuProcessors, String ServerName) {

		int ServerDBSend = userDAO.UserServerInfo(CpuUsage, MemoryFreespace, MemoryTotalSpace, CpuCore, CpuProcessors,
				ServerName);    
		if (ServerDBSend == 0) {
			return "Failed data receive";
		} else {

			return "Success data receive";
		}

	}

}
