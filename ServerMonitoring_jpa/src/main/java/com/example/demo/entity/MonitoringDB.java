package com.example.demo.entity;

import lombok.Data;

import java.sql.Time;

import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity
@Table(name ="MonitoringDB")
public class MonitoringDB {

	@Id
	public String cpuusage;

	// 메모리 사용 가능한 공간 / 메모리 남은 용량

	public String memoryfreespace;

	// 메모리 총 저장 용량
	public String memorytotalspace;

	// cpu 코어 개수
	public int cpucore;

	// cpu 프로세서 개수
	public int cpuprocessors;

	@CreationTimestamp
	private Time  startdate;

	public MonitoringDB() {

	}

	public MonitoringDB(String cpuusage, String memoryfreespace, String memorytotalspace, int cpucore,
		int cpuprocessors) {
		
		this.cpuusage = cpuusage;
		this.memoryfreespace = memoryfreespace;
		this.memorytotalspace = memorytotalspace;
		this.cpucore = cpucore;
		this.cpuprocessors = cpuprocessors;
	}

	public static MonitoringDB createMember(String cpuusage, String memoryfreespace, String memorytotalspace,
			int cpucore, int cpuprocessors) {
		return new MonitoringDB(cpuusage, memoryfreespace, memorytotalspace, cpucore, cpuprocessors);
	}

}