package com.example.java;

import java.lang.management.ManagementFactory;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.demo.entity.MonitoringDB;
import com.example.demo.repository.UserRepository;
import com.sun.management.OperatingSystemMXBean;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component // 스프링 컴포넌트 클래스를 지정함
public class Monitoring {

	@Autowired
	public UserRepository userRepository;

	@Test
	@Scheduled(fixedDelay = 1000, initialDelay = 5000)
	public void MonitoringSystem() throws Exception {

		long now = System.currentTimeMillis() / 1000;
		//log.info("Fixed rate task with one second initial delay - {}", now);
		OperatingSystemMXBean operatingSystemMXBean = (com.sun.management.OperatingSystemMXBean) ManagementFactory
				.getOperatingSystemMXBean();
	
			int availableProcessors = Runtime.getRuntime().availableProcessors();

			String cpuusage = String.format("%.2f", operatingSystemMXBean.getSystemCpuLoad() * 100);
			String memoryfreespace = String.format("%.2f",
					(double) operatingSystemMXBean.getFreePhysicalMemorySize() / 1024 / 1024 / 1024);
			String memorytotalspace = String.format("%.2f",
					(double) operatingSystemMXBean.getTotalPhysicalMemorySize() / 1024 / 1024 / 1024);
			// 논리프로세서 개수
			int cpucore = availableProcessors;
			// 코어 개수
			int cpuprocessors = availableProcessors / 2;

			// 1초마다 데이터 저장
			//Thread.sleep(1000);
			MonitoringDB member = MonitoringDB.createMember(cpuusage, memoryfreespace, memorytotalspace, cpucore,
					cpuprocessors);

			// 저장기능
			userRepository.save(member);

		
		
	}

}
