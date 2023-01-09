package com.example.java;

import java.lang.management.ManagementFactory;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.springboot.jdbc.IMyUserDAO;
import com.sun.management.OperatingSystemMXBean;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component // 스프링 컴포넌트 클래스를 지정함
public class Monitoring {

	@Autowired
	public IMyUserDAO imyuserdao;

	@Test
	@Scheduled(fixedDelay = 1000, initialDelay = 5000)
	public void MonitoringSystem() throws Exception {

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
		imyuserdao.writeDao(cpuusage, memoryfreespace, memorytotalspace, cpucore, cpuprocessors);
	}

	@Scheduled(cron = "0 0/2 * * * *")
	public void deleteResult() {
		imyuserdao.deleted();
	}

}