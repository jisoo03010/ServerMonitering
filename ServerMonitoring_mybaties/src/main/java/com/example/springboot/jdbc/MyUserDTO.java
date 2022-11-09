package com.example.springboot.jdbc;


import java.sql.Time;

//import org.hibernate.annotations.CreationTimestamp;s

import lombok.Data;

@Data
public class MyUserDTO {

	private String cpuusage;

	// 메모리 사용 가능한 공간 / 메모리 남은 용량

	private String memoryfreespace;

	// 메모리 총 저장 용량
	private String memorytotalspace;

	// cpu 코어 개수
	private int cpucore;

	// cpu 프로세서 개수
	private int cpuprocessors;

	// @CreationTimestamp
	private Time id;

	public MyUserDTO() {

	}

	public MyUserDTO(String cpuusage, String memoryfreespace, String memorytotalspace, int cpucore, int cpuprocessors) {

		this.cpuusage = cpuusage;
		this.memoryfreespace = memoryfreespace;
		this.memorytotalspace = memorytotalspace;
		this.cpucore = cpucore;
		this.cpuprocessors = cpuprocessors;
	}

	public static MyUserDTO createMember(String cpuusage, String memoryfreespace, String memorytotalspace, int cpucore,
			int cpuprocessors) {
		return new MyUserDTO(cpuusage, memoryfreespace, memorytotalspace, cpucore, cpuprocessors);
	}

	public String getCpuusage() {
		return cpuusage;
	}

	public void setCpuusage(String cpuusage) {
		this.cpuusage = cpuusage;
	}

	public String getMemoryfreespace() {
		return memoryfreespace;
	}

	public void setMemoryfreespace(String memoryfreespace) {
		this.memoryfreespace = memoryfreespace;
	}

	public String getMemorytotalspace() {
		return memorytotalspace;
	}

	public void setMemorytotalspace(String memorytotalspace) {
		this.memorytotalspace = memorytotalspace;
	}

	public int getCpucore() {
		return cpucore;
	}

	public void setCpucore(int cpucore) {
		this.cpucore = cpucore;
	}

	public int getCpuprocessors() {
		return cpuprocessors;
	}

	public void setCpuprocessors(int cpuprocessors) {
		this.cpuprocessors = cpuprocessors;
	}

	public Time getId() {
		return id;
	}

	public void setId(Time id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "{" + cpuusage + "," + memoryfreespace + ", " + memorytotalspace + ", " + cpucore + ", " + cpuprocessors
				+ ", " + id + "}";
	}

}
